# Monospaced BBCode Editor

A userscript for Empornium that sets the font family of the BBCode editor to a
monospaced one.

This script should help legibility when writing BBCode, as the default font is
a sans-serif one. For writing code like BBCode, a monospaced font is generally
preferred.

The "font-stack" used is the the same as the one used by a [popular CSS
framework](https://github.com/tailwindlabs/tailwindcss/blob/f07dbff2a7f78fd75c53c6cfe01b58b6c0419f22/stubs/config.full.js#L313):

1. `ui-monospace`
2. `SFMono-Regular`
3. `Menlo`
4. `Monaco`
5. `Consolas`
6. `Liberation Mono`
7. `Courier New`
8. `monospace` (a fallback "web-safe" font that will always be available)

This script targets any `<textarea>` on ths site, so it may affect ones beyond
BBCode editors (which are unfortunately not marked up in any easily-identifiable
way), but that seems like a good thing.