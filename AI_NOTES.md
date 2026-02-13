# AI Notes

## Overview

This project integrates a Large Language Model (LLM) to convert feature ideas into structured engineering tasks and user stories.

The AI system acts as an intelligent task planning assistant, automating early-stage engineering planning and specification generation.

---

## LLM Provider and Model

**Provider:** OpenRouter  
**Model:** `openrouter/auto`

### Reason for Choosing OpenRouter

- Provides access to multiple modern LLMs through a single API
- Compatible with OpenAI SDK format
- Easy integration with Python and FastAPI backend
- Reliable and production-ready infrastructure
- Flexible model routing and fallback handling

The `openrouter/auto` model dynamically selects the best available model based on availability and performance.

---

## How AI is Used in the System

The AI integration is implemented in the backend service layer.

**File Location:**

```
backend/app/services/llm.py
```

### Responsibilities

- Accept user feature description input
- Construct structured prompts
- Send prompt to LLM via OpenRouter API
- Receive structured engineering task output
- Return processed response to frontend

### Generated Output Includes

- User stories
- Backend implementation tasks
- Frontend implementation tasks
- Database design tasks
- Infrastructure and deployment tasks

---

## Role of AI During Development

AI was used as a development assistant for:

- Backend architecture planning
- FastAPI integration guidance
- React frontend structure recommendations
- Debugging deployment issues
- Deployment configuration suggestions
- Prompt engineering optimization

AI was used as an assistive tool, not as an autonomous system.

---

## Components Implemented and Verified Manually

The following components were fully implemented and verified manually:

- Backend routing and API structure
- Database schema design and persistence logic
- Frontend form handling and state management
- API communication between frontend and backend
- Error handling and validation logic
- Environment variable management
- Production deployment (Render and Vercel)
- Security protections (.env isolation)
- Git version control and repository management

---

## What AI Did NOT Do Automatically

AI did not autonomously perform the following:

- Deploy the application
- Configure production environment variables
- Design database schemas without manual validation
- Resolve deployment and runtime issues without human verification
- Manage infrastructure or hosting configuration

All production integrations were manually verified.

---

## Prompt Engineering Approach

The prompt was carefully designed to guide the LLM to behave as a senior software architect.

### Prompt Design Principles

- Clear role definition ("Act as a senior software architect")
- Structured output format requirements
- Explicit task categorization instructions
- Deterministic and implementation-focused outputs

### Benefits

- Improved output consistency
- Higher quality engineering task generation
- Reduced ambiguity
- Production-useful responses

---

## Safety and Security Considerations

Sensitive credentials such as API keys are handled securely.

### Security Measures Implemented

- API keys stored in environment variables
- `.env` file excluded using `.gitignore`
- No secrets committed to version control
- Backend-only access to AI provider keys
- Secure production deployment configuration

---

## System Architecture Role of AI

The LLM functions as a stateless backend service component responsible for:

- Interpreting natural language feature requests
- Converting them into structured engineering plans
- Assisting developers in implementation planning

The AI does not store state or access the database directly.

---

## Limitations

- Output quality depends on input clarity
- Responses are generated dynamically and may vary slightly
- No deterministic guarantee across model versions
- Currently no streaming support
- No fine-tuned custom model (uses general-purpose LLM)

---

## Future AI Improvements

Planned enhancements include:

- Streaming response generation
- Structured JSON output enforcement
- Prompt versioning system
- Model performance comparison
- Fine-tuned model integration
- Context-aware task generation
- Multi-step planning workflows

---

## Summary

The AI integration enables automated generation of structured engineering specifications from natural language input, significantly accelerating early-stage planning and improving developer productivity.

The system is designed with production-grade architecture, security practices, and modular AI integration.
