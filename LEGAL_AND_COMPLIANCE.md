# Swirl — Legal & Compliance Checklist (Draft v0.1)

> **This is a working checklist, not legal advice, and not a compliance
> certification.** It exists to track what needs review as the app is
> built, so items aren't forgotten. Every unchecked item requires actual
> legal review before Swirl is released publicly — nothing here should be
> treated as "done" just because it's written down.

## 1. Current state

As of this commit, Swirl is documentation plus an empty project scaffold.
No code collects, stores, or transmits user data. This checklist is
being written *ahead of* implementation so privacy/legal constraints
shape the design instead of being retrofitted.

## 2. App store policy checklist

- [ ] **Apple App Store**: camera/microphone/photo-library usage strings
      must accurately describe the actual use (App Review checks this).
      Revisit once Phase 3 implements real capture.
- [ ] **Apple App Tracking Transparency (ATT)**: not applicable yet — no
      cross-app tracking exists in MVP scope. Re-check if any ad/analytics
      SDK is added later.
- [ ] **Google Play Data Safety form**: must be filled out accurately
      before Play Store submission, based on the actual data inventory in
      `PRIVACY_ARCHITECTURE.md` at time of submission.
- [ ] Content rating questionnaires (both stores) — depends on final
      effect library and any social features, neither of which is scoped
      yet (see `SWIRL_PRODUCT_SPEC.md` §7 open questions).

## 3. Privacy law checklist (jurisdictions TBD)

Which laws apply depends on where Swirl is actually offered/sold — that
decision hasn't been made (see `SWIRL_PRODUCT_SPEC.md` §7). Placeholder
checklist assuming at least US + EU distribution, to be narrowed or
widened once that's decided:

- [ ] **GDPR** (if offered in the EU/UK): lawful basis for any processing,
      a real privacy policy, data subject rights process. Low urgency
      while the app is fully on-device with no accounts, but must be
      revisited the moment any server-side or account feature is added.
- [ ] **CCPA/CPRA** (if offered in California / meets thresholds):
      similar — low urgency at current (on-device only) scope.
- [ ] **COPPA** (US, if the app could attract users under 13): depends on
      the target age range decision in `SWIRL_PRODUCT_SPEC.md` §7. Needs
      an explicit answer, not an assumption.
- [ ] A public-facing Privacy Policy document (separate from this
      internal checklist) — required by both app stores regardless of
      which privacy laws apply, and not yet written.
- [ ] Terms of Service — not yet written.

## 4. Camera/media-specific considerations

- [ ] If any effect or feature ever analyzes captured images/video
      on-device or server-side (e.g. for content moderation, face
      detection, etc.), that needs its own privacy and legal review before
      implementation — nothing like this is in MVP scope today.
- [ ] Biometric Information Privacy laws (e.g., Illinois BIPA) become
      relevant only if facial recognition/biometric processing is ever
      added — not applicable to the current MVP scope, flagged here so
      it isn't missed if that scope changes.

## 5. Open decisions blocking real compliance work

These need answers from the product owner, not engineering assumptions:
- Target countries/regions for launch.
- Target age range / whether the app is directed at children.
- Whether any third-party SDK (analytics, crash reporting, ads) will be
  used, even in early betas.

## 6. Review cadence

This document should be re-read and updated at the start of each new
roadmap phase in `ROADMAP.md`, not just once at project start.
