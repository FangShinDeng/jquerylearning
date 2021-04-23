from flask import Flask,jsonify, request
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

users = [
    {'name': 'mark', 'email': 'test@gmail.com'},
    {'name': 'Tim'},
    {'name': 'Merry'}
]

class User(Resource):
    # parser參數物件
    parser = reqparse.RequestParser()
    parser.add_argument('email', required=True, help='Email is required')
    parser.add_argument('password', required=True, help='Password is required')

    def get(self, name):
        find = [user for user in users if user['name'] == name]
        # 如果輸入空字串
        if len(find) == 0:
            return {'Message':'No user'}, 403
        user = find[0]
        # 若使用者不存在
        if user not in users:
            return {'Message':'No user'}, 403
        else:
            return {'Message':'','user':user}

    def post(self, name):
        arg = self.parser.parse_args()
        user = {
            'name': name,
            'email': arg['email'],
            'password': arg['password']
        }
        global users
        users.append(user)
        return {'Message':'Insert new user success', 'user':user}

    def put(self, name):
        arg = self.parser.parse_args()
        find = [user for user in users if user['name'] == name]
        if len(find) == 0:
            return {
                'message': 'username not exist!'
            }, 403
        user = find[0]
        user['email'] = arg['email']
        user['password'] = arg['password']
        return {
            'message': 'Update user success',
            'user': user
        }

    def delete(self, name):
        global users
        users = [user for user in users if user['name'] != name]
        return {'Message':'delete done'}

api.add_resource(User, "/user/<string:name>")

if __name__ == "__main__":
    app.run(debug=True)