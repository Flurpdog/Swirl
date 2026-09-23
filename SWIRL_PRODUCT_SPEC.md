# Swirl — Product Spec (Draft v0.1)

> **Status: DRAFT.** This is the first product spec for Swirl. The repository
> contained no prior product, design, or engineering artifacts before this
> document was written — there is no earlier version to reconcile with.
> Treat every section below as a starting proposal to be corrected,
> not a settled decision.

## 1. One-line description

Swirl is a mobile app for capturing photos and short videos and applying
creative visual effects to them, then sharing the result.

## 2. Problem / opportunity

People want to turn an ordinary phone snapshot into something more
expressive without leaving the camera flow (no round-trip through a
separate editor app). Swirl aims to make the "capture → stylize → share"
loop fast enough to happen in the moment.

## 3. Target platform

- **Mobile only** at launch: iOS and Android via a single React Native
  codebase, built with **Expo** (managed workflow) so the team can ship to
  both stores from one project.
- Camera capture uses Expo's camera module (`expo-camera`). The exact
  package version and API surface are **not yet verified** — see
  `ROADMAP.md` Phase 3 and the note in `package.json`.

## 4. Core user flow (MVP)

1. User opens the app to a live camera viewfinder.
2. User captures a photo or a short (≤15s) video.
3. User picks an effect from a small, curated set (the "swirl" of the
   name — initially a literal swirl/distortion lens, plus a few color
   and motion effects).
4. User previews the result and either re-shoots, re-picks an effect, or
   proceeds to share/export.
5. User shares to the device's native share sheet (Phase 1) or, later,
   to an in-app social feed (post-MVP, not yet scoped).

## 5. MVP feature scope

**In scope for MVP:**
- Live camera preview, photo capture, short video capture.
- A small fixed library of visual effects applied post-capture.
- Local save to camera roll.
- Native OS share sheet integration.
- Basic settings (effect defaults, permissions status).

**Explicitly out of scope for MVP** (candidates for later phases):
- In-app social feed, follows, comments, likes.
- Cloud storage / cross-device sync of captures.
- Real-time (pre-capture) effect preview using GPU shaders.
- User accounts / authentication.
- Monetization (subscriptions, IAP).

Each of the "out of scope" items needs its own design pass before it's
added to the roadmap as committed work — they're listed here only so
they aren't silently forgotten.

## 6. Non-functional requirements (initial)

- Camera permission flows must degrade gracefully (clear messaging when
  camera/microphone/photo-library permission is denied).
- No network dependency for the core capture → effect → save loop — it
  must work fully offline.
- Target both iOS and Android from day one; no platform-specific fork of
  the core flow.

## 7. Open questions (need product/user input, not engineering guesses)

- What is the actual effect library for v1 — how many effects, and which
  ones, beyond a literal "swirl" distortion?
- Is there a social/sharing component in the app itself, or is the
  native share sheet sufficient for MVP?
- Target age range / audience — this affects App Store/Play Store
  content-rating and COPPA analysis in `LEGAL_AND_COMPLIANCE.md`.
- Business model (free, ads, subscription, one-time purchase) — affects
  `PRIVACY_ARCHITECTURE.md` (e.g., whether any analytics/ad SDKs are
  in scope at all).

## 8. Relationship to other docs

- `ROADMAP.md` — phase breakdown and current phase status.
- `PRIVACY_ARCHITECTURE.md` — what data the app touches and how it's
  handled, scoped to what's actually built so far.
- `LEGAL_AND_COMPLIANCE.md` — compliance checklist and open items;
  **not a substitute for actual legal review**.
