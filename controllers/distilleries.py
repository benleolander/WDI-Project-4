from flask import Blueprint, request, jsonify
from models.distillery import Distillery, DistillerySchema
from lib.secure_route import secure_route


distillery_schema = DistillerySchema()
distilleries_schema = DistillerySchema(many=True)

api = Blueprint('distilleries', __name__)

@api.route('/distilleries', methods=['GET'])
def index():
    distilleries = Distillery.query.all()
    return distilleries_schema.jsonify(distilleries)

@api.route('/distilleries', methods=['POST'])
@secure_route
def create():
    distillery, errors = distillery_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    distillery.save()

    return distillery_schema.jsonify(distillery), 201

@api.route('/distilleries/<int:distillery_id>', methods=['GET'])
def show(distillery_id):
    distillery = Distillery.query.get(distillery_id)
    return distillery_schema.jsonify(distillery)

@api.route('/distilleries/<int:distillery_id>', methods=['PUT'])
@secure_route
def update(distillery_id):

    distillery = Distillery.query.get(distillery_id)

    distillery, errors = distillery_schema.load(request.get_json(), instance=distillery)

    if errors:
        return jsonify(errors), 422

    distillery.save()

    return distillery_schema.jsonify(distillery), 200

@api.route('/distilleries/<int:distillery_id>', methods=['DELETE'])
@secure_route
def delete(distillery_id):
    distillery = Distillery.query.get(distillery_id)
    distillery.remove()
    
