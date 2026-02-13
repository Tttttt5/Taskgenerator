from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from app.db.database import Base


class Spec(Base):

    __tablename__ = "specs"

    id = Column(Integer, primary_key=True, index=True)

    goal = Column(String, nullable=False)

    users = Column(String, nullable=False)

    constraints = Column(String)

    app_type = Column(String)

    generated_spec = Column(Text)

    created_at = Column(DateTime, default=datetime.utcnow)
