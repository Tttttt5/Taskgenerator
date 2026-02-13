from fastapi import APIRouter
from app.db.database import SessionLocal
from app.models.spec import Spec

router = APIRouter(prefix="/specs", tags=["specs"])


@router.get("/recent")
def get_recent_specs():

    db = SessionLocal()

    specs = db.query(Spec).order_by(Spec.created_at.desc()).limit(5).all()

    db.close()

    return specs
