from app import db, ma
from .base import BaseModel, BaseSchema

class Whisky(db.Model, BaseModel):

    __tablename__ = 'whiskies'

    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Int, nullable=True)
