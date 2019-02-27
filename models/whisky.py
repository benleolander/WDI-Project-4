from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
# pylint: disable=W0611
from .distillery import Distillery
from .user import User

tasted = db.Table(
    'tasted',
    db.Column('whisky_id', db.Integer, db.ForeignKey('whiskies.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)

class Whisky(db.Model, BaseModel):

    __tablename__ = 'whiskies'

    name = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(150), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    age = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(500), nullable=False)
    abv = db.Column(db.Float, nullable=False)
    cask = db.Column(db.String(50), nullable=True)

    distillery_id = db.Column(db.Integer, db.ForeignKey('distilleries.id'))
    distillery = db.relationship('Distillery', backref="whiskies")

    tasted_by = db.relationship('User', secondary=tasted, backref='tasted')

class WhiskySchema(ma.ModelSchema, BaseSchema):

    distillery = fields.Nested('DistillerySchema', only=('name', 'country'))
    tasted_by = fields.Nested('UserSchema', only=('id', 'username'), many=True)

    class Meta:
        model = Whisky
