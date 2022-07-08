from cgitb import reset
from http import HTTPStatus
from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
from flask_cors import CORS

from util.math import math

app = Flask(__name__)
CORS(app)
api = Api(app)

# Create resource
class Operation(Resource):
    '''
    Perform operation on two integers based on request data.
    '''
    def post(self):
        data = request.get_json()
        result = math(operator=data["operator"], int1=data["int1"], int2=data["int2"])
        if result is None:
            abort(404, message="Error processing request.")
        return {
            "result": result
        }, HTTPStatus.OK
        
# Add Resources
api.add_resource(Operation, "/calculate")

# Normally dont keep debug=True if going to actual production.
if __name__ == "__main__":
    app.run(port=5000, debug=True)