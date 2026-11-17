# Fighter Jet Eject

Sprite-stack pixel-art fighter jet game, running entirely in the browser.

**Play:** https://icy-cat.github.io/fighter-jet-eject/

- Software renderer (Canvas 2D `putImageData`), sprite stacking, CPU post-processing
- WebGL only for the smooth afterburner flames
- Web Audio mixing, gamepad + touch support

Controls: arrows / WASD to fly, Shift boost, right-click cannon, M missiles, Space switches camera.

## Build

```sh
npm install
npm run build   # → dist/  (esbuild + Tailwind v4)
```

Default settings live in `src/defaults.json`. Serve the repo root with any static server.
