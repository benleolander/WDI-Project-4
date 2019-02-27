from flask import Blueprint
from models.distillery import Distillery, DistillerySchema

distillery_schema = DistillerySchema()
distilleries_schema = DistillerySchema(many=True)

api = Blueprint('distilleries', __name__)

@api.route('/distilleries', methods=['GET'])
def index():
    distilleries = Distillery.query.all()
    return distilleries_schema.jsonify(distilleries)

@api.route('/distilleries/<int:distillery_id>', methods=['GET'])
def show(distillery_id):
    distillery = Distillery.query.get(distillery_id)
    return distillery_schema.jsonify(distillery)
