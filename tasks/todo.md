# Website Finish: Polish + Mobile Nav

## Build
- [x] Header: `/#about` → `/about`
- [x] Header: add skip-to-main link
- [x] Header: add mobile hamburger menu (open/close, escape, outside click)
- [x] WorkGrid: wrap Mirror card in `<Link href="/work/mirror">`
- [x] WorkGrid: wrap Apparel card in `<Link href="/work/apparel">`
- [x] Footer: add About link
- [x] page.tsx: add `id="main"` to `<main>`
- [x] sitemap.ts: add `/contact` entry
- [x] privacy/page.tsx: remove unused `Link` import
- [x] contact/action.ts: wrap console.log in dev-only check
- [x] ContactForm.tsx: add `aria-invalid` + `aria-describedby` to all inputs

## Verify
- [x] `npm run lint` — zero warnings
- [x] `npm run build` — clean build, all routes generated
- [ ] Desktop: About header link → /about, Mirror card → /work/mirror, Apparel card → /work/apparel
- [ ] Mobile (375px): hamburger visible, menu opens/closes, all links work
- [ ] Tablet (768px): breakpoint transition behaves correctly
- [ ] Skip-nav: tab into page, first focus shows "Skip to main content"
- [ ] Contact form: submit empty, verify aria-invalid appears on inputs
- [ ] Footer: About link present and working

## Review

### What changed
- **Routing:** Three built pages (`/about`, `/work/mirror`, `/work/apparel`) were unreachable. Header About link pointed to a homepage scroll anchor, and WorkGrid cards were plain divs with hover effects but no links. All are now properly linked.
- **Mobile nav:** Header is now a client component with a hamburger menu. Three animated bars toggle to an X. Dropdown shows Work, About, and Get in touch links. Closes on link click, outside click, or Escape.
- **Accessibility:** Skip-to-main link added as first focusable element. Contact form inputs now have `aria-invalid` and `aria-describedby` for screen reader error reporting.
- **Code cleanup:** Removed unused import, wrapped dev console.log so it doesn't fire in production, added `/contact` to sitemap, added `.mcp.json` to gitignore.
- **Footer:** About link added alongside Privacy and Terms.

### Teaching notes

**Why make Header a client component?** The mobile menu needs `useState` for open/close state. This is the right tradeoff — the header is small, and the interactivity is genuinely needed. The desktop nav links still benefit from Next.js prefetching via `<Link>`.

**Outside click pattern:** The `useEffect` registers `mousedown` and `keydown` listeners only when the menu is open, and cleans them up on close. This avoids permanent global listeners. The `menuRef` on the header element means clicks inside the entire header (including the hamburger button) won't trigger the outside-click handler.

**aria-invalid + aria-describedby:** These attributes connect each input to its error message for screen readers. `aria-invalid` signals the field has an error, and `aria-describedby` points to the error `<p>` by `id`. The error `<p>` only renders when there's an error, which is fine — `aria-describedby` referencing a non-existent ID is silently ignored.

**WorkGrid linking strategy:** Only Mirror and Apparel cards are wrapped in `<Link>` because those are the only case study pages that exist. Calendar, Predictions, and Bros remain as non-clickable cards. When new case study pages are built, wrapping them is a one-line change.

**To extend:** Consider adding an animated slide-down transition on the mobile menu panel (CSS `max-height` transition or `framer-motion`). The current show/hide is instant, which is functional but could feel smoother.
