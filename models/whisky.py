from app import db, ma
from .base import BaseModel, BaseSchema

class Whisky(db.Model, BaseModel):

    __tablename__ = 'whiskies'

    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Int, nullable=True)
    description = db.Column(db.String(500), nullable=False)
    abv = db.Column(db.Float, nullable=False)
    cask = db.Column(db.String(30), nullable=True)

class WhiskySchema(ma.ModelSchema, BaseSchema):
    class Meta:
        model = Whisky
