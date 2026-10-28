#!/usr/bin/env python3
"""Apply JSON edit lists ([{"file","old","new"}, ...]) to the repo, one edit at a
time. Each "old" must occur exactly once at the moment it is applied; anything
else is skipped and reported, never guessed. CRLF files keep their endings.

    python3 tools/apply-edits.py edits1.json [edits2.json ...]
"""
import json, sys

ok = bad = 0
for fn in sys.argv[1:]:
    for e in json.load(open(fn)):
        raw = open(e['file'], 'rb').read()
        old, new = e['old'].encode(), e['new'].encode()
        if b'\r\n' in raw and b'\r\n' not in old and b'\n' in old:
            old, new = old.replace(b'\n', b'\r\n'), new.replace(b'\n', b'\r\n')
        n = raw.count(old)
        if n != 1:
            bad += 1
            print(f'SKIP {fn} {e["file"]}: found {n}x: {e["old"][:70]!r}')
            continue
        open(e['file'], 'wb').write(raw.replace(old, new))
        ok += 1
print(f'applied {ok}, skipped {bad}')
