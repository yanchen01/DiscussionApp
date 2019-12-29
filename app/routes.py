from app import app, mongo
from flask import render_template, url_for, request, session, redirect
from app.forms import LoginForm, RegisterForm
from flask_bcrypt import bcrypt

@app.route('/')
def index():
    if 'username' in session:
        return 'You are logged in as ' + session['username']
    return render_template('index.html', title = 'Home')

@app.route('/login', methods = ['POST'])
def login():
    users = mongo.db.users
    login_user = users.find_one({'name' : request.form['username']})

    if login_user:
            if bcrypt.hashpw(request.form['pass'].encode('utf-8'), login_user['password'].encode('utf-8')) == login_user['password'].encode('utf-8'):
                session['username'] = request.form['username']
                return redirect(url_for('index'))

    return 'Invalid username/password combination'

@app.route('/regiser', methods = ['POST', 'GET'])
def register():
    form = RegisterForm()
    
    # if registering
    if form.validate_on_submit():
        # create a user
        users = mongo.db.users
        
        # see if user already registered
        existing_user = users.find_one({'name' : request.form['username']})

        # if user doesn't exist, register the user
        if existing_user is None:
            # hash the password 
            hashpass = bcrypt.hashpw(request.form['pass'].encode('utf-8'), bcrypt.gensalt())
            # insert new user data fields into database
            users.insert({'name' : request.form['username'], 'password' : hashpass})
            session['username'] = request.form['username']
            return redirect(url_for('index'))

        return "That username already exists!"
    return render_template('register.html')