from cgitb import reset
from http import HTTPStatus
from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
from flask_cors import CORS

from util.math import math

app = Flask(__name__)
CORS(app)
api = Api(app)

class Operation(Resource):
    '''
    Perform operation on two integers based on request data.
    '''
    def post(self):
        data = request.get_json()
        result = math(operator=data["operator"], int1=data["int1"], int2=data["int2"])
        if not result:
            abort(404, message="Error processing request.")
        return {
            "result": result
        }, HTTPStatus.OK
        
# Add Resources
api.add_resource(Operation, "/calculate")

# debug = True only in dev, never prod.
if __name__ == "__main__":
    app.run(port=5000, debug=True)