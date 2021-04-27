from flask import Flask, render_template, jsonify
import pandas as pd
import json
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

# 處理路段清單資料回傳
@app.route('/process')
def process():
    
    df = pd.read_csv('台灣路段清單.csv')
    result = df.to_json(orient = "records")
    parsed = json.loads(result)
    return jsonify(parsed)

if __name__ == "__main__":
    app.run(debug=True)