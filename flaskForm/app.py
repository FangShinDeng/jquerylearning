from flask import Flask, request, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

# 單純flask請求表單的方式, 跳轉到user
@app.route('/login', methods = ['POST','GET'])
def login():
    if request.method == 'POST':
        account = request.form['account']
        password = request.form['password']
        if account == 'mark' and password == '1234':
            print('yes')
            return redirect(url_for("user", user=account))
        else:
            return render_template('login.html')
            
    else:
        return render_template('login.html')

@app.route('/user/<user>')
def user(user):
    return render_template('user.html', user = user)

if __name__ == '__main__':
    app.run(debug=True)