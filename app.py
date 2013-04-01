# -*- encoding: utf-8 -*-
from flask import Flask
from flask import render_template

import utils

app = Flask(__name__)

@app.route('/')
def index():
    return utils.send_page('index.html')

@app.route('/interprete')
def interprete():
    return render_template('interprete.html')
