from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/drinks')
def drinks():
    return render_template('drinks.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/locations')
def locations():
    return render_template('locations.html')

@app.route('/food')
def food():
    return render_template('food.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)