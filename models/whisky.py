from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Whisky(db.Model, BaseModel):

    __tablename__ = 'whiskies'

    name = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(150), nullable=False)
    age = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(500), nullable=False)
    abv = db.Column(db.Float, nullable=False)
    cask = db.Column(db.String(30), nullable=True)
    distillery_id = db.Column(db.Integer, db.ForeignKey('distilleries.id'))
    distillery = db.relationship('Distilleries', backref="whiskies")

class WhiskySchema(ma.ModelSchema, BaseSchema):

    distillery = fields.Nested('DistillerySchema', only=('name', 'country'))

    class Meta:
        model = Whisky
