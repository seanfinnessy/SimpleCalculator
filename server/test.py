from flask import jsonify
import requests

BASE = "http://127.0.0.1:5000/"

response = requests.get(BASE + "/calculate", json={"operator": "multiply", "int1": 5, "int2": 4})
print(response.json())
input()
response = requests.get(BASE + "/calculate", json={"operator": "sdf", "int1": 5, "int2": 43})
print(response.json())