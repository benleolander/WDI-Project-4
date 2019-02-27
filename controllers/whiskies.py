from flask import Blueprint, request, jsonify, g
from models.whisky import Whisky, WhiskySchema
from models.distillery import Distillery, DistillerySchema

whisky_schema = WhiskySchema()
whiskies_schema = WhiskySchema(many=True)

distillery_schema = DistillerySchema()

api = Blueprint('whiskies', __name__)

@api.route('/whiskies', methods=['GET'])
def index():
    whiskies = Whisky.query.all()
    return whiskies_schema.jsonify(whiskies)

@api.route('/whiskies', methods=['POST'])
def create():
    whisky, errors = whisky_schema.load(request.get_json())
    # whisky.creator = g.current_user

    # This line is for development use only, will break in production
    whisky.distillery = Distillery.query.get(1)

    if errors:
        return jsonify(errors), 422

    whisky.save()

    return whisky_schema.jsonify(whisky), 201

@api.route('/whiskies/<int:whisky_id>', methods=['GET'])
def show(whisky_id):
    whisky = Whisky.query.get(whisky_id)
    return whisky_schema.jsonify(whisky)

@api.route('/whiskies/<int:whisky_id>', methods=['DELETE'])
def delete(whisky_id):
    whisky = Whisky.query.get(whisky_id)
    whisky.remove()
    return '', 204
