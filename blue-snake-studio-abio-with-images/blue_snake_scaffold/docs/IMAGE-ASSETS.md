# Image Assets — Blue $nake Studio / ABIO Scaffold

The original ABIO repo and uploaded web zip did not contain raster image files, so this scaffold now includes local SVG image assets that deploy with the site from `client/public/assets`.

## Included images

| File | Use |
|---|---|
| `hero-blue-snake-studio.svg` | Main hero artwork for the landing page |
| `bss-sigil.svg` | Core B$S / Moss 60 studio mark |
| `auralia-gold-on-blue.svg` | Auralia / gold-on-blue guide visual |
| `meta-pet-companion.svg` | Meta-Pet privacy-first companion visual |
| `moss-60-orbital-map.svg` | Moss 60 / visual maths / digital DNA map |
| `black-wing-crew-omen.svg` | Black Wing Crew / Neon Venom omen emblem |
| `teacher-tools-cheatsheet.svg` | Teacher tools / behaviour support visual |
| `grammarians-coup-lexicon.svg` | The Grammarian’s Coup memetic lexicon card |
| `og-image.svg` | Social preview image candidate |
| `favicon.svg` | Browser favicon |

## Web paths

Because these are in `client/public/assets`, reference them from React as:

```tsx
<img src="/assets/bss-sigil.svg" alt="Blue Snake Studio B$S sigil" />
```

No external image hosting is required.
