# 3D study verification — October 15, 2026

The default entry point is src/App.tsx and src/style.css; Scene.tsx loads room3d.ts on demand. The separate App2D/Scene2D files are retained but are not the default experience.

Implemented: real WebGL room with orbit/zoom/reset controls; modeled butler holding a telephone; contact navigation using supplied email/phone; switchable desk lamp; record player on a separate side table; original synthesized instrumental audio; spinning disc and moving tonearm; raycast hover highlights and temporary labels; keyboard controls, reduced-motion handling, and non-WebGL navigation fallback.

Live browser verification on http://127.0.0.1:5180/: butler hover and canvas click opened Contact and its email link; record canvas click toggled playback, two canvas screenshots differed while playing, and pause toggled playback off; label disappeared on pointer exit; lamp toggled darkroom/lamplight; dragging changed the rendered camera without navigation; reset worked; 390px mobile screenshot inspected with no horizontal overflow. Contact fallback, phone href, focus restoration, lamp, and audio tested in App3D.test.tsx.

Production build passed. Three.js is lazy-loaded; Vite reports a nonblocking large-chunk warning. Local implementation and preview only; no hosting or DNS changes performed.

Final test note: App3D.test.tsx passes. The broader suite reports a lazy-loading timeout in the retained App2D scroll test and attempts to load a separate node:test Instagram script as a Vitest suite; these are outside the 3D room checks. Browser-tested 3D interactions and production build pass.
