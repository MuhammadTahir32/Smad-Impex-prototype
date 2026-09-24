## MANDATORY LEARNING MODE RULES

### Rule 1: Step-by-Step Execution
- NEVER skip steps or rush through phases
- Complete each task fully before moving to the next
- Mark tasks as done in PROGRESS_TRACKER.md immediately after completion

### Rule 2: Explain Before Build
- Before writing ANY code, explain what we are about to build and WHY
- Explain the concept, the libraries used, and how they fit together
- Use analogies and real-world examples to make concepts clear

### Rule 3: QA Session Required
- After completing EACH task or sub-task, hold a mini QA session
- Ask the user: "Do you understand what we just built? Any questions?"
- Wait for user confirmation before proceeding
- If user has questions, answer them fully before moving on

### Rule 4: No Assumptions
- Never assume the user understands a concept
- If a term or pattern might be unfamiliar, explain it
- Link explanations to the actual code we just wrote

### Rule 5: Progress Tracking
- Update PROGRESS_TRACKER.md after every completed task
- Use the format: `[x]` for done, `[~]` for in-progress, `[ ]` for not started
- Always show the user current progress percentage

### Rule 7: Code Quality
- Write clean, readable, well-structured code
- Use TypeScript strict mode — no `any` types
- Follow the brand theme guide for all UI components
- Use Tailwind CSS only — no custom CSS files (per Rule 6.4)

### Rule 9: No Secrets in Code
- Never commit environment variables or API keys
- Use .env.example as template, never commit .env files
- Supabase anon key is safe for client, service role key stays server-only

### Rule 10: Commit Protocol
- Only commit when user explicitly asks
- Write clear commit messages following conventional commits format
- Stage only relevant files, never secrets