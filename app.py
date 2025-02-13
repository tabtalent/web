import os
import re
from flask import Flask, request, jsonify
from pymongo import MongoClient
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Setup MongoDB client (use environment variable for security)
client = MongoClient(os.getenv('MONGODB_URI', 'mongodb://localhost:27017/'))
db = client['applications_db']

# Directory for saving resumes
UPLOAD_FOLDER = 'uploads'  
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'pdf', 'doc', 'docx'}

def save_resume(file):
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        return filepath
    return None

@app.route('/submit_application', methods=['POST'])
def submit_application():
    data = request.form.to_dict()
    resume = request.files.get('resume')

    # Save resume and get the path
    resume_path = save_resume(resume)
    if resume_path is None:
        return jsonify({"error": "Invalid file type or no file uploaded."}), 400

    data['resume_path'] = resume_path

    # Insert application data into MongoDB
    try:
        db.applications.insert_one(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"message": "Application submitted successfully!"}), 201

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    
    # Simple email validation regex
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    required_fields = ['name', 'company', 'email', 'phone', 'message']
    
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"{field} is required"}), 400

    if not re.match(email_regex, data['email']):
        return jsonify({"error": "Invalid email format."}), 400

    db.contacts.insert_one(data)
    
    return jsonify({"message": "Contact message received!"}), 200

if __name__ == '__main__':
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.run(debug=True)