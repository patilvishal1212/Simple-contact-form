from flask import Blueprint, request, jsonify
from models.user_model import insert_user, get_all_users

user_bp = Blueprint('user_bp', __name__)


@user_bp.route('/submit', methods=['POST'])
def submit_form():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    phone_number = data.get('phone_number')
    message = data.get('message')

    if not name or not email or not phone_number or not message:
        return jsonify({"error": "All fields are required"}), 400

    insert_user(name, email, phone_number, message)

    return jsonify({"message": "Data saved successfully"})


@user_bp.route('/users', methods=['GET'])
def fetch_users():
    users = get_all_users()
    return jsonify(users)