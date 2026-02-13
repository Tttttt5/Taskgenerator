from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Database imports
from app.db.database import engine, Base

# Route imports
from app.routes.generate import router as generate_router
from app.routes.health import router as health_router
from app.routes.specs import router as specs_router


# Create FastAPI app
app = FastAPI(
    title="Tasks Generator API",
    version="1.0.0"
)


# Create database tables
Base.metadata.create_all(bind=engine)


# Allowed frontend origins
origins = [
    "http://localhost:5173",
    "https://taskgeneratorai-cecqofcjc-priyansha-bedis-projects.vercel.app",
]


# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # allow your Vercel frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Register routes
app.include_router(generate_router)
app.include_router(health_router)
app.include_router(specs_router)


# Root endpoint
@app.get("/")
def root():
    return {
        "message": "Tasks Generator API running",
        "status": "ok"
    }


# Health check endpoint
@app.get("/health-check")
def health_check():
    return {
        "backend": "ok"
    }