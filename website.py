from flask import Flask, render_template

website = Flask(__name__)

@website.route('/')
def Landing():
    return render_template('LandingPage.html')

@website.route('/About')
def Home():
    return render_template('About.html')

@website.route('/Resume')
def Contact():
    return render_template('Resume.html')

@website.route('/Projects')
def Projects():
    return render_template('Projects.html')

if __name__ == '__main__':
    website.run(debug=True)
