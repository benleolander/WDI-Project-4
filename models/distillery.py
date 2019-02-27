from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Distillery(db.Model, BaseModel):

    __tablename__ = 'distilleries'

    name = db.Column(db.String(100), nullable=False)
    founded = db.Column(db.Int, nullable=True)
    town = db.Column(db.String(50), nullable=True)
    country = db.Column(db.String(50), nullable=True)

class DistillerySchema(ma.ModelSchema, BaseSchema):

    whiskies = fields.Nested('WhiskySchema', only=('name', ))

    class Meta:
        model = Distillery
