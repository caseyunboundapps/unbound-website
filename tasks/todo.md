# Contact Form — Todo

## Build
- [x] Install Resend (`npm install resend`)
- [x] Create server action `app/contact/action.ts`
- [x] Create form component `components/ContactForm.tsx`
- [x] Create contact page `app/contact/page.tsx`
- [x] Update `components/Header.tsx` href → `/contact`
- [x] Update `components/Hero.tsx` href → `/contact`
- [x] Update `components/ContactCTA.tsx` href → `/contact`
- [x] Update `.env.example` with `RESEND_API_KEY`
- [x] Update `CLAUDE.md` with new routes and dependency

## Verify
- [x] `npm run build` passes
- [ ] Visit `/contact`, fill and submit form, see console log
- [ ] All three entry points link to `/contact`
- [ ] Validation: empty fields, bad email, long message
- [ ] Responsive at 375px, 768px, 1440px

## Review

### What changed
- **New route:** `/contact` with a form (name, email, message) and server action
- **Server action:** validates inputs server-side, sends via Resend if API key is set, otherwise logs to console
- **Client validation:** inline errors below each field, checked before submission
- **Link updates:** Header nav, Hero CTA, and ContactCTA all now point to `/contact` instead of anchors/mailto
- **Env:** `.env.example` documents `RESEND_API_KEY`
- **CLAUDE.md:** project structure and stack updated

### Teaching notes
**Why a server action instead of an API route?** Server actions are the idiomatic Next.js pattern for form mutations. They work with progressive enhancement (form still works without JS) and `useActionState` gives us pending/error state for free.

**Dual validation:** Client-side validation gives instant feedback; server-side validation is the actual gate. Never trust the client alone — anyone can bypass JS validation.

**Resend fallback:** The `if (apiKey)` check means development works without any env setup. Console logging the submission lets you verify the full flow locally.

**To extend:** When you add a real Resend domain, update the `from` address in `action.ts` from `onboarding@resend.dev` to your verified domain. You may also want rate limiting on the server action for production.
