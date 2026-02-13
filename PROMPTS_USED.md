# Prompts Used During Development

This file documents the prompts used to develop and integrate the AI system.

Sensitive information such as API keys is not included.

---

## Prompt 1 — Task generation prompt

Purpose:
Generate engineering tasks from feature ideas.

Prompt structure:

"You are a senior software architect.

Convert the following feature description into structured engineering tasks.

Include:

- User stories
- Backend tasks
- Frontend tasks
- Database tasks
- Infrastructure tasks

Feature:
{goal}

Users:
{users}

Constraints:
{constraints}

App type:
{app_type}
"

---

## Prompt 2 — Architecture guidance

Purpose:
Design backend structure using FastAPI.

Example prompt:

"Design a FastAPI backend structure for an AI task generator with database persistence."

---

## Prompt 3 — Frontend integration

Purpose:
Integrate React frontend with backend API.

Example prompt:

"Create React frontend to send form data to FastAPI backend and display results."

---

## Prompt 4 — Deployment configuration

Purpose:
Deploy backend on Render and frontend on Vercel.

Example prompt:

"Deploy FastAPI backend on Render and React frontend on Vercel with environment variables."

---

## Prompt Design Principles

Prompts were designed to:

- Be explicit
- Provide clear role instructions
- Request structured output
- Minimize ambiguity

---

## Security Note

No API keys or secrets were included in prompts.
