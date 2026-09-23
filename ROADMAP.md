# Swirl — Roadmap

> **Status note:** When this roadmap was written, the repository contained
> a single commit with a placeholder `README.md` ("# Swirl") and nothing
> else — no prior spec, no prior code, no earlier "Phase 1" or "Phase 2"
> work to build on. Phases 1 and 2 below are therefore being defined and
> completed *now*, not recovered from history. If earlier work exists
> outside this repository, it needs to be merged in before this roadmap
> is trusted as authoritative.

## Phase 1 — Foundation (this session)

Goal: establish the product, privacy, and legal baseline before any code
is written.

- [x] `SWIRL_PRODUCT_SPEC.md` — initial product spec (draft, needs review).
- [x] `ROADMAP.md` — this document.
- [x] `PRIVACY_ARCHITECTURE.md` — initial privacy architecture (draft).
- [x] `LEGAL_AND_COMPLIANCE.md` — initial compliance checklist (draft).

## Phase 2 — Project scaffold (this session)

Goal: a minimal, buildable Expo project shell — no camera functionality
yet — so later phases have somewhere to land.

- [x] `package.json` with an Expo TypeScript "blank" template dependency
      set. **Dependency versions are unverified placeholders** — see the
      note in `package.json` and the "Network access" section below.
- [x] `app.json` (Expo app config), `tsconfig.json`, `babel.config.js`,
      `.gitignore`.
- [x] `App.tsx` with a placeholder home screen (no camera code).
- [ ] `npm install` actually run and a working `npx expo start` — **blocked**,
      see below. Must happen before Phase 3 starts.

## Phase 3 — Camera capture (blocked)

Goal: real camera capture using `expo-camera`.

- [ ] Verify npm registry access.
- [ ] Run `npm install` and confirm the actual installed `expo` and
      `expo-camera` versions.
- [ ] Read the installed `expo-camera` package's own type definitions /
      docs for its current API (hooks vs. legacy component API differ
      across SDK versions — do not assume which one is current).
- [ ] Implement the camera screen against the verified API only.
- [ ] Implement photo capture.
- [ ] Implement short video capture.

**Explicitly not started:** no `expo-camera` code has been written. Per
the task constraints for this session, camera implementation is not to
proceed speculatively while npm access is unavailable.

### Network access blocker (as of this writing)

`npm install` / any request to `registry.npmjs.org` from this execution
environment fails:

```
HTTP/2 403
x-deny-reason: host_not_allowed
Host not in allowlist: registry.npmjs.org. Add this host to your network
egress settings to allow access.
```

This is the environment's own network egress policy (configured when the
Claude Code cloud environment was created), not a transient failure and
not related to any client-side network (e.g. a personal VPN). It must be
resolved (by allowlisting `registry.npmjs.org`, or running from an
environment/session whose network policy permits npm) before Phase 3 can
proceed. See https://code.claude.com/docs/en/claude-code-on-the-web for
how environment network policy is configured.

## Phase 4+ — Not yet scoped

Effects library, social/sharing, accounts, monetization, etc. — see the
"out of scope for MVP" list in `SWIRL_PRODUCT_SPEC.md`. These should each
get their own spec section before being added here as committed phases.
