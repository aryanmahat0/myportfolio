from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import os

app = Flask(__name__)
CORS(app)


# -----------------------------
# Database Connection Function
# -----------------------------
def get_db_connection():
    return mysql.connector.connect(
        host=os.getenv('MYSQL_HOST', 'localhost'),
        user=os.getenv('MYSQL_USER', 'root'),
        password=os.getenv('MYSQL_PASSWORD', 'nepal@123'),  # change if needed
        database=os.getenv('MYSQL_DB', 'portfolio_db')
    )


# -----------------------------
# Initialize Database
# -----------------------------
def init_db():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        # Create projects table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS projects (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                image VARCHAR(500),
                technologies VARCHAR(500),
                link VARCHAR(500),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')

        # Create contacts table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')

        # Insert sample data if empty
        cursor.execute('SELECT COUNT(*) as count FROM projects')
        result = cursor.fetchone()

        if result['count'] == 0:
            sample_projects = [
                (
                    'E-Commerce Platform',
                    'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
                    'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
                    'React, Node.js, MongoDB, Stripe',
                    '#'
                ),
                (
                    'Task Management App',
                    'Collaborative project management tool with real-time updates.',
                    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                    'Vue.js, Firebase, Tailwind',
                    '#'
                ),
                (
                    'Portfolio Website',
                    'Modern portfolio site with smooth animations.',
                    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
                    'React, Flask, MySQL',
                    '#'
                )
            ]

            cursor.executemany(
                'INSERT INTO projects (title, description, image, technologies, link) VALUES (%s, %s, %s, %s, %s)',
                sample_projects
            )

        conn.commit()
        cursor.close()
        conn.close()

        print("✅ Database initialized successfully!")

    except Exception as e:
        print(f"❌ Error initializing database: {e}")


# -----------------------------
# Routes
# -----------------------------

@app.route('/api/projects', methods=['GET'])
def get_projects():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        cursor.execute('SELECT * FROM projects ORDER BY created_at DESC')
        projects = cursor.fetchall()

        cursor.close()
        conn.close()

        return jsonify(projects), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/projects', methods=['POST'])
def create_project():
    try:
        data = request.get_json()

        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute(
            'INSERT INTO projects (title, description, image, technologies, link) VALUES (%s, %s, %s, %s, %s)',
            (data['title'], data['description'], data['image'],
             data['technologies'], data['link'])
        )

        conn.commit()
        project_id = cursor.lastrowid

        cursor.close()
        conn.close()

        return jsonify({'id': project_id, 'message': 'Project created successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        cursor.execute('SELECT * FROM projects WHERE id = %s', (project_id,))
        project = cursor.fetchone()

        cursor.close()
        conn.close()

        if project:
            return jsonify(project), 200

        return jsonify({'error': 'Project not found'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/projects/<int:project_id>', methods=['PUT'])
def update_project(project_id):
    try:
        data = request.get_json()

        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute(
            'UPDATE projects SET title=%s, description=%s, image=%s, technologies=%s, link=%s WHERE id=%s',
            (data['title'], data['description'], data['image'],
             data['technologies'], data['link'], project_id)
        )

        conn.commit()

        cursor.close()
        conn.close()

        return jsonify({'message': 'Project updated successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/projects/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute('DELETE FROM projects WHERE id = %s', (project_id,))
        conn.commit()

        cursor.close()
        conn.close()

        return jsonify({'message': 'Project deleted successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()

        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute(
            'INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)',
            (data['name'], data['email'], data['message'])
        )

        conn.commit()
        contact_id = cursor.lastrowid

        cursor.close()
        conn.close()

        return jsonify({'id': contact_id, 'message': 'Contact submitted successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        cursor.execute('SELECT * FROM contacts ORDER BY created_at DESC')
        contacts = cursor.fetchall()

        cursor.close()
        conn.close()

        return jsonify(contacts), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/')
def home():
    return jsonify({'message': '🚀 Portfolio API is running!'}), 200


if __name__ == '__main__':
    with app.app_context():
        init_db()

    app.run(debug=True, host='0.0.0.0', port=5001)
