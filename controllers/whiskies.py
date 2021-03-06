from flask import Blueprint, request, jsonify, g
from models.whisky import Whisky, WhiskySchema
from models.distillery import Distillery, DistillerySchema
from lib.secure_route import secure_route

whisky_schema = WhiskySchema()
whiskies_schema = WhiskySchema(many=True)

distillery_schema = DistillerySchema()

api = Blueprint('whiskies', __name__)

@api.route('/whiskies', methods=['GET'])
def index():
    whiskies = Whisky.query.all()
    return whiskies_schema.jsonify(whiskies)

@api.route('/whiskies', methods=['POST'])
@secure_route
def create():
    whisky, errors = whisky_schema.load(request.get_json())
    # whisky.creator = g.current_user

    if errors:
        return jsonify(errors), 422

    whisky.save()

    return whisky_schema.jsonify(whisky), 201

@api.route('/whiskies/<int:whisky_id>', methods=['GET'])
def show(whisky_id):
    whisky = Whisky.query.get(whisky_id)
    return whisky_schema.jsonify(whisky)

@api.route('/whiskies/<int:whisky_id>', methods=['PUT'])
@secure_route
def update(whisky_id):

    whisky = Whisky.query.get(whisky_id)

    whisky, errors = whisky_schema.load(request.get_json(), instance=whisky)

    if errors:
        return jsonify(errors), 422

    whisky.save()

    return whisky_schema.jsonify(whisky), 200

@api.route('/whiskies/<int:whisky_id>/taste', methods=['GET'])
@secure_route
def taste(whisky_id):

    whisky = Whisky.query.get(whisky_id)
    user = g.current_user

    whisky.tasted_by.append(user)

    whisky.save()

    return whisky_schema.jsonify(whisky), 200

@api.route('/whiskies/<int:whisky_id>', methods=['DELETE'])
@secure_route
def delete(whisky_id):
    whisky = Whisky.query.get(whisky_id)
    whisky.remove()
    return '', 204

@api.route('/recommendation', methods=['GET'])
@secure_route
def recommend():
    def filter_likes(whisky):
        if len(whisky.tasted_by) > 0:
            return True
        return False

    def filter_uniques(whisky):
        if (whisky.tasted_by.count(g.current_user)) > 0:
            return False
        return True

    def get_length(whisky):
        return len(whisky.tasted_by)

    whiskies = Whisky.query.all()
    liked_whiskies = filter(filter_likes, whiskies)
    unique_likes = filter(filter_uniques, liked_whiskies)
    sorted_uniques = sorted(unique_likes, key=get_length, reverse=True)

    return whisky_schema.jsonify(sorted_uniques[0])
