from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.llm import generate_tasks
from app.db.database import SessionLocal
from app.models.spec import Spec

router = APIRouter(prefix="/generate", tags=["generate"])


class SpecRequest(BaseModel):
    goal: str
    users: str
    constraints: str = ""
    app_type: str = ""


@router.post("/")
def generate(spec: SpecRequest):

    if not spec.goal or not spec.users:
        raise HTTPException(status_code=400, detail="Missing required fields")

    result = generate_tasks(
        goal=spec.goal,
        users=spec.users,
        constraints=spec.constraints,
        app_type=spec.app_type
    )

    # SAVE TO DATABASE
    db = SessionLocal()

    new_spec = Spec(
        goal=spec.goal,
        users=spec.users,
        constraints=spec.constraints,
        app_type=spec.app_type,
        generated_spec=result
    )

    db.add(new_spec)
    db.commit()
    db.close()

    return {
        "generated_spec": result
    }
