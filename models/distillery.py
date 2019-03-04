from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .user import User

visited = db.Table(
    'visited',
    db.Column('distillery_id', db.Integer, db.ForeignKey('distilleries.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)

class Distillery(db.Model, BaseModel):

    __tablename__ = 'distilleries'

    name = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(150), nullable=False)
    founded = db.Column(db.Integer, nullable=True)
    town = db.Column(db.String(50), nullable=True)
    country = db.Column(db.String(50), nullable=True)
    lat = db.Column(db.Float, nullable=True)
    lng = db.Column(db.Float, nullable=True)

    visited_by = db.relationship('User', secondary=visited, backref='visited')

class DistillerySchema(ma.ModelSchema, BaseSchema):

    whiskies = fields.Nested('WhiskySchema', only=('name', 'price', 'id', 'image'), many=True)
    visited_by = fields.Nested('UserSchema', only=('id', 'username'), many=True)

    class Meta:
        model = Distillery
