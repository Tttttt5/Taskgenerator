from fastapi import APIRouter

router = APIRouter(prefix="/health", tags=["health"])


@router.get("/")
def health_check():
    return {
        "backend": "ok",
        "database": "not_connected",
        "llm": "not_connected"
    }
