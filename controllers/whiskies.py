from flask import Blueprint
from models.whisky import Whisky, WhiskySchema

whisky_schema = WhiskySchema()
whiskies_schema = WhiskySchema(many=True)

api = Blueprint('whiskies', __name__)

@api.route('/whiskies', methods=['GET'])
def index():
    whiskies = Whisky.query.all()
    return whiskies_schema.jsonify(whiskies)

@api.route('/whiskies/<int:whisky_id>', methods=['GET'])
def show(whisky_id):
    whisky = Whisky.query.get(whisky_id)
    return whisky_schema.jsonify(whisky)
