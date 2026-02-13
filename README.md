# Tasks Generator 

**Live App:**  
https://taskgeneratorai-cecqofcjc-priyansha-bedis-projects.vercel.app

**Backend API Docs:**  
https://taskgenerator-punf.onrender.com/docs

---

## Overview

Tasks Generator is a full-stack AI web application that converts feature ideas into structured engineering tasks and user stories.

It helps developers and product teams quickly transform ideas into actionable implementation plans.

The system uses an LLM via OpenRouter to generate structured outputs based on user input.

---

## Features

### Core Functionality

- Generate engineering tasks from feature ideas
- Generate structured user stories
- Store generated specs in a database
- View last 5 generated specs
- Export generated tasks
- Status indicator showing backend health

### System Features

- Full stack architecture
- Persistent database storage
- Production deployment
- Error handling for invalid input
- Health check endpoint

---

## Architecture

### Frontend

- React
- TypeScript
- Vite
- Hosted on Vercel

### Backend

- FastAPI
- Python
- SQLAlchemy
- SQLite
- Hosted on Render

### AI Integration

- Provider: OpenRouter
- Model: `openrouter/auto`
- OpenAI-compatible SDK

---

## Project Structure

```
Taskgenerator/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   ├── models/
│   │   ├── services/
│   │   └── db/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── README.md
├── AI_NOTES.md
├── ABOUTME.md
└── PROMPTS_USED.md
```

---

## How to Run Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs on:  
http://127.0.0.1:8000

API docs:  
http://127.0.0.1:8000/docs

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:  
http://localhost:5173

---

## Environment Variables

Backend requires:

```
OPENROUTER_API_KEY=your_api_key_here
```

Set this in:

**Local:**  
```
backend/.env
```

**Production:**  
Render → Environment Variables

---

## API Endpoints

### Generate Tasks

```
POST /generate/
```

### Health Check

```
GET /health/
```

### Recent Specs

```
GET /specs/recent
```

---

## Deployment

**Frontend:**  
- Vercel

**Backend:**  
- Render

**Database:**  
- SQLite (persistent)

---

## Input Validation

The system handles:

- Empty input validation
- Backend connection errors
- LLM errors
- Network failures

---

## What is Completed

- Full backend implementation
- Full frontend implementation
- LLM integration
- Database integration
- Production deployment
- Error handling
- Status indicator
- Documentation

---

## Future Improvements

Possible enhancements:

- Authentication
- Editing generated specs
- Delete functionality
- PostgreSQL database migration
- Streaming responses
- Improved UI/UX

---

## Author

**Priyansha Bedi**  
AI Engineer focused on full-stack AI systems, LLM integrations, and backend architecture.

GitHub:  
https://github.com/Tttttt5

---

## Submission Notes

This project satisfies:

- Full stack implementation
- LLM integration
- Production deployment
- Persistent storage
- Status monitoring
- Documentation requirements
