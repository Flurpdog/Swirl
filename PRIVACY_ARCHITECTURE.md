# Swirl — Privacy Architecture (Draft v0.1)

> **Status: DRAFT, scoped to what exists today.** As of this writing the
> repository contains only documentation and a bare project scaffold — no
> camera code, no networking code, no analytics or third-party SDKs have
> been added. This document describes the *intended* architecture for the
> MVP described in `SWIRL_PRODUCT_SPEC.md` and must be revisited as each
> phase actually lands. It is not a substitute for legal/privacy counsel —
> see `LEGAL_AND_COMPLIANCE.md`.

## 1. Data inventory (MVP scope)

| Data | Source | Where it lives | Leaves the device? |
|---|---|---|---|
| Camera preview frames | Device camera | Volatile, on-device only | No |
| Captured photos/video | Device camera | Device camera roll / app sandbox storage | No (MVP has no upload path) |
| Effect selection | User input | In-memory, app state only | No |
| Permission status (camera/mic/photo library) | OS | OS-managed | No |

No user accounts, no analytics SDK, and no crash-reporting SDK are in the
MVP scope defined in `SWIRL_PRODUCT_SPEC.md`. If any of those are added
later, this table and the sections below must be updated **before** the
feature ships, not after.

## 2. Design principle: on-device by default

The MVP capture → effect → save loop is designed to work fully offline
and store output only on the device (camera roll / app sandbox). This is
a product requirement (`SWIRL_PRODUCT_SPEC.md` §6) as much as a privacy
one: no server-side component exists yet, so there is nothing to send
data to.

## 3. Permissions

Swirl will request, at time of use (not at first launch):
- Camera access — required for the core flow.
- Microphone access — required only if/when video capture with audio is
  implemented.
- Photo library "add only" access — to save output without needing full
  read access to the user's existing library, if the platform API
  supports scoping the permission that way.

Each permission request must have a clear, honest purpose string (iOS
`Info.plist` usage descriptions / Android runtime permission rationale),
and the app must handle "denied" and "denied forever" states without
crashing or blocking unrelated functionality.

## 4. Third-party SDKs

None are included as of this commit. Any future addition (crash
reporting, analytics, ad network, etc.) needs:
1. An entry added to the data inventory table above.
2. A check against `LEGAL_AND_COMPLIANCE.md` (e.g., does it require a
   privacy policy update, a consent flow, an App Tracking Transparency
   prompt on iOS, etc.).
3. Sign-off that it's actually necessary for the feature it supports.

## 5. Open questions

- If cloud sync or social sharing is added later (see "out of scope" in
  `SWIRL_PRODUCT_SPEC.md`), this document needs a new section covering:
  transport security, server-side storage/retention, and account data
  handling. None of that exists yet, so it isn't speculated on here.
- Minimum supported OS versions affect which permission APIs are
  available (e.g., scoped photo library access) — TBD once Phase 3
  verifies the actual `expo`/`expo-camera` versions in use.
