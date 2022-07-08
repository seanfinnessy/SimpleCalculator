from flask import jsonify
import requests

BASE = "http://127.0.0.1:5000/"

response = requests.post(BASE + "/calculate", json={"operator": "x", "int1": 5, "int2": 4})
print(response.json())
input()
response = requests.post(BASE + "/calculate", json={"operator": "-", "int1": 5, "int2": 43})
print(response.json())