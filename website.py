import os
from flask import Flask, render_template

website = Flask(__name__)
myport = int(os.environ.get('PORT', 5000))

@website.route('/')
def Landing():
    return render_template('index.html')

@website.route('/about')
def Home():
    return render_template('about.html')

@website.route('/resume')
def Contact():
    return render_template('resume.html')

@website.route('/projects')
def Resume():
    return render_template('projects.html')

if __name__ == '__main__':
    website.run()
