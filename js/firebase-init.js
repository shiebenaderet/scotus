// ==========================================
// Firebase Initialization & Auth Helpers
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyB-Yvl1PEn7n4vwNzuu6VIEtkaJwRrBriQ",
    authDomain: "scotus-debate-project-63230.firebaseapp.com",
    projectId: "scotus-debate-project-63230",
    storageBucket: "scotus-debate-project-63230.firebasestorage.app",
    messagingSenderId: "405230053526",
    appId: "1:405230053526:web:f2bc6580d61ca9a4cabab7"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// Allowed email domains
const ALLOWED_DOMAINS = ['edmonds15.org', 'edmonds.wednet.edu'];

function isAllowedEmail(email) {
    return ALLOWED_DOMAINS.some(domain => email.endsWith('@' + domain));
}

// Current user state
let currentUser = null;

// ==========================================
// AUTH UI
// ==========================================
function renderAuthUI() {
    // Signed-in pages hide the "your work saves in this browser" hint (theme.css)
    document.documentElement.classList.toggle('signed-in', !!currentUser);
    // The account part of the My Work menu (site-chrome.js builds the menu)
    const slot = document.getElementById('auth-slot');
    const who = document.getElementById('mywork-who');
    if (!slot) return;

    if (currentUser) {
        const name = (currentUser.displayName || currentUser.email).split(' ')[0];
        const teacher = (currentUser.email || '').endsWith('@edmonds.wednet.edu');
        const prefix = window.location.pathname.indexOf('/cases/') !== -1 ? '../' : '';
        if (who) who.textContent = 'Signed in as ' + name + '. Your work saves to your account.';
        slot.innerHTML = `
            ${teacher ? `<a href="${prefix}teacher.html" class="menu-item">Teacher Page</a>` : ''}
            <button type="button" class="menu-item" onclick="signOutUser()">Sign Out</button>
        `;
    } else {
        if (who) who.textContent = 'Your work saves in this browser.';
        slot.innerHTML = `
            <button type="button" class="menu-item" onclick="signInWithGoogle()">Teacher Sign In</button>
        `;
    }
}

async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await auth.signInWithPopup(provider);
        const email = result.user.email || '';
        if (!isAllowedEmail(email)) {
            await auth.signOut();
            alert('Please sign in with your school account (@edmonds15.org or @edmonds.wednet.edu).');
            return;
        }
        // After successful sign-in, migrate any localStorage data
        migrateLocalStorageToFirestore();
    } catch (err) {
        if (err.code !== 'auth/popup-closed-by-user') {
            console.error('Sign-in error:', err);
            alert('Sign-in failed. Make sure you are using your school account (@edmonds15.org or @edmonds.wednet.edu).');
        }
    }
}

async function signOutUser() {
    try {
        await auth.signOut();
    } catch (err) {
        console.error('Sign-out error:', err);
    }
}

// Listen for auth state changes
auth.onAuthStateChanged(function(user) {
    if (user && user.email && !isAllowedEmail(user.email)) {
        auth.signOut();
        return;
    }
    currentUser = user;
    renderAuthUI();

    // Notify page-specific code that auth state changed
    if (typeof onAuthReady === 'function') {
        onAuthReady(user);
    }
});

// ==========================================
// FIRESTORE HELPERS
// ==========================================

// Get the user's document reference
function userDoc(path) {
    if (!currentUser) return null;
    return db.collection('users').doc(currentUser.uid).collection('data').doc(path);
}

// Save data to Firestore (and localStorage as fallback)
async function saveToCloud(key, data) {
    // Always save to localStorage
    localStorage.setItem(key, JSON.stringify(data));

    if (!currentUser) return;

    try {
        const docRef = userDoc(key);
        if (docRef) {
            await docRef.set({ value: data, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
        }
    } catch (err) {
        console.error('Firestore save error:', err);
    }
}

// Load data from Firestore (fall back to localStorage)
async function loadFromCloud(key) {
    if (currentUser) {
        try {
            const docRef = userDoc(key);
            if (docRef) {
                const snap = await docRef.get();
                if (snap.exists) {
                    const cloudData = snap.data().value;
                    // Also update localStorage so offline use works
                    localStorage.setItem(key, JSON.stringify(cloudData));
                    return cloudData;
                }
            }
        } catch (err) {
            console.error('Firestore load error:', err);
        }
    }

    // Fall back to localStorage
    try {
        const local = localStorage.getItem(key);
        if (local) return JSON.parse(local);
    } catch (e) {}

    return null;
}

// ==========================================
// MIGRATE localStorage TO FIRESTORE
// ==========================================
async function migrateLocalStorageToFirestore() {
    if (!currentUser) return;

    const keysToMigrate = [];

    // Find all scotus- keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('scotus-')) {
            keysToMigrate.push(key);
        }
    }

    for (const key of keysToMigrate) {
        try {
            const docRef = userDoc(key);
            if (!docRef) continue;

            // Only migrate if Firestore doesn't already have this key
            const snap = await docRef.get();
            if (!snap.exists) {
                const local = localStorage.getItem(key);
                if (local) {
                    let parsed;
                    try { parsed = JSON.parse(local); } catch(e) { parsed = local; }
                    await docRef.set({
                        value: parsed,
                        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                }
            }
        } catch (err) {
            console.error('Migration error for key ' + key + ':', err);
        }
    }
}
