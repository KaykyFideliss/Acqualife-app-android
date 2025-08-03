from flask import Blueprint, request, jsonify
from app.models import User
from app import db

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    
    # Validação
    if not data or not all(k in data for k in ['name', 'email', 'phone', 'password']):
        return jsonify({'error': 'Dados incompletos'}), 400
    
    # Verifica se usuário já existe
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email já cadastrado'}), 409
    if User.query.filter_by(phone=data['phone']).first():
        return jsonify({'error': 'Telefone já cadastrado'}), 409
    
    
    
    # Cria usuário
    user = User(
        name=data['name'],
        email=data['email'],
        phone=data['phone']
    )
    user.set_password(data['password'])  # Senha hasheada
    
    db.session.add(user)
    db.session.commit()
    
    return jsonify({'success': 'Cadastro realizado!'}), 201