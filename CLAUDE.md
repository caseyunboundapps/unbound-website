# My name is Casey
This file provides guidance to Claude Code when working with this repository.

## Workflow Requirements
- Update CLAUDE.md before every git commit
- Always ask clarifying questions in planning mode

## Development Workflow
1. First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.
2. The plan should have a list of todo items that you can check off as you complete them, and for each todo include a short note about the quick checks you will run (view the page, test the form, check mobile view, etc.).
3. Before you begin working, check in with me and I will verify the plan.
4. **Build:** follow the plan exactly. For each todo, begin by running the quick checks you wrote into the plan, make the smallest change needed, then re-run those checks to confirm behavior.
5. Please every step of the way just give me a high level explanation of what changes you made.
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. **Verify:** after Build, perform a quick review. Check for console errors, test interactive elements, verify responsive design on mobile/tablet/desktop widths. If anything blocks verification (broken functionality, errors), report the failures and the minimal fix before pushing.
8. **Review & Teach:** add a review section in todo.md summarizing what changed, what was tested, and any follow-ups. Then include a teaching section written in the style of a senior engineer that explains: why changes were made, how the components work together, important design tradeoffs, how to test and extend the work, and any recommendations for improvements.
9. **Git Push:** push the verified changes and include the review notes in the commit message.

## Environment File Management
**⚠️ CRITICAL RULE**: Claude Code must NEVER directly modify or overwrite .env files.

### Environment Files
- `.env.local` - Active environment (gitignored)
- `.env.example` - Template with placeholder values

### Workflow for Environment Changes
1. **Never run `cp .env.* .env.local`** or any command that overwrites .env.local
2. When environment changes are needed:
   - Stop and explain what needs to change
   - Provide exact instructions for Casey to update the file
   - Wait for confirmation before proceeding

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Quick Testing Checklist
Before marking work complete, verify:
- [ ] Page loads without console errors
- [ ] All interactive elements work (forms, buttons, links)
- [ ] Responsive design works on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Forms validate correctly and show error states
- [ ] Images and assets load properly
- [ ] Page performance is reasonable (check Network tab)

## 🔒 Security Guidelines

### Critical Rules
- **Never commit API keys or secrets** - Use environment variables
- **Validate all form inputs** - Client-side AND server-side
- **Sanitize user-generated content** - Prevent XSS attacks
- **Use HTTPS in production** - No mixed content warnings

### Form Handling
- Always validate email format
- Limit text input lengths
- Show clear error messages
- Never trust client-side validation alone

### Environment Variables
- Keep `.env.local` in `.gitignore`
- Use `VITE_` prefix for public variables only
- Never expose API secrets to the client
- Document all required variables in `.env.example`

## Pre-Production Checklist
- [ ] All forms have proper validation
- [ ] Error states are user-friendly
- [ ] No console errors or warnings
- [ ] Mobile experience is smooth
- [ ] All environment variables documented
- [ ] Images optimized for web
- [ ] Accessibility basics covered (alt text, semantic HTML, keyboard navigation)