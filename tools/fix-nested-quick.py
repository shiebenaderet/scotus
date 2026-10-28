#!/usr/bin/env python3
"""Move any Quick block that ended up nested inside its Clear (simplified) block
out to sit right after it, as a sibling. site-chrome.js only switches siblings,
so a nested Quick block leaves the Clear text showing in Quick mode.

    python3 tools/fix-nested-quick.py cases/tinker.html [...]
"""
import re, sys

TAG = re.compile(r'<(/?)div\b[^>]*>')
OPEN = re.compile(r'<div class="(content-block|two-sides-summary) (simplified|quick)\b[^"]*">')


def end_of(s, i):
    depth = 0
    for m in TAG.finditer(s, i):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return m.end()
    raise ValueError('unbalanced div at %d' % i)


def fix(s):
    moved = 0
    while True:
        for m in OPEN.finditer(s):
            if m.group(2) != 'simplified':
                continue
            a, b = m.start(), end_of(s, m.start())
            inner = OPEN.search(s, m.end(), b)
            while inner and inner.group(2) != 'quick':
                inner = OPEN.search(s, inner.end(), b)
            if not inner:
                continue
            qa = inner.start()
            comment = s.rfind('<!-- Quick Version -->', m.end(), qa)
            if comment != -1 and s[comment:qa].strip() == '<!-- Quick Version -->':
                qa = comment
            qb = end_of(s, inner.start())
            quick = s[qa:qb]
            outer = s[a:qa].rstrip() + s[qb:b]
            indent = s[s.rfind('\n', 0, a) + 1:a]
            s = s[:a] + outer + '\n\n' + indent + quick + s[b:]
            moved += 1
            break
        else:
            return s, moved


for path in sys.argv[1:]:
    raw = open(path, 'rb').read()
    crlf = b'\r\n' in raw
    s = raw.decode('utf-8').replace('\r\n', '\n')
    s, n = fix(s)
    if crlf:
        s = s.replace('\n', '\r\n')
    open(path, 'wb').write(s.encode('utf-8'))
    print(f'{path}: moved {n} nested Quick block(s)')
