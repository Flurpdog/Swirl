# Unverified state — read before touching `package.json` or Phase 3

This repository was scaffolded in an execution environment where
`registry.npmjs.org` is blocked by network egress policy (confirmed via
direct `curl -v`, response: `403 host_not_allowed`). As a result:

- **`npm install` has never been run against this project.**
- Every dependency version in `package.json` is the literal string
  `"UNVERIFIED"` — intentionally invalid, so an accidental `npm install`
  fails loudly instead of silently resolving to arbitrary/outdated
  versions.
- No `expo-camera` code exists anywhere in this repo. Nothing in `App.tsx`
  or elsewhere should be assumed to match any particular Expo SDK's API.

## Before starting Phase 3 (camera capture)

1. From an environment with working npm access, run:
   ```
   npx create-expo-app@latest --template blank-typescript /tmp/swirl-ref
   ```
   or simply `npm install` in this repo after filling in real versions,
   to get actual, current `expo` / `expo-camera` versions.
2. Replace every `"UNVERIFIED"` in `package.json` with the real resolved
   version.
3. Read the installed `expo-camera` package's own TypeScript types/docs
   for its current API before writing any camera code — the API has
   changed across Expo SDK versions (e.g. component vs. hook-based
   camera permission APIs), and this repo's authors did not have network
   access to check which is current as of the time this was written.
4. Delete this file once Phase 3 is underway and `package.json` reflects
   real, installed versions.
