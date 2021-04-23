from flask import Flask, request, render_template, url_for, redirect, jsonify
import time
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/ajaxform')
def ajaxform():
    return render_template("ajaxform.html")

@app.route('/process', methods = ['POST'])
def process():

    nameList = ['mark','merry','tim']
    name = request.form['name']
    
    newname = name[::-1]

    if name in nameList:
        return jsonify({'Message': 'yes, 這裡有這個人', 'data' : newname})
    else:
        return jsonify({'Message': 'error, 沒這個人', 'data': 'No this person'})

@app.route('/ajax')
def ajax():
    return render_template('ajax.html')

# 單純flask請求表單的方式, 跳轉到user
# @app.route('/login', methods = ['POST','GET'])
# def login():
#     # if request.method == 'POST':
#     #     account = request.form['account']
#     #     password = request.form['password']
#     #     if account == 'mark' and password == '1234':
#     #         print('yes')    
#     #         return redirect(url_for("user", user=account))
#     #     else:
#     #         return render_template('login.html')
            
#     # else:
#     return render_template('login.html')

# @app.route('/user/<user>')
# def user(user):
#     return render_template('user.html', user = user)

if __name__ == '__main__':
    app.run(debug=True, port = 3000)