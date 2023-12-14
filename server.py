# FILEPATH: /C:/Users/Bero/OneDrive/Documents/git/skills-copilot-codespaces-vscode/todo-list.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

todos = [{ "id": 3, "text": "Task 3", "completed": False }]

# Middleware to log requests
@app.before_request
def log_request():
    print(f"Received {request.method} request at {request.url}")
    print('Request body:', request.json)

# Middleware to log responses
@app.after_request
def log_response(response):
    print('Response body:', response.json)
    return response

# Get all todos
@app.route('/todos', methods=['GET'])
def get_todos():
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 10))
    start_index = (page - 1) * limit
    end_index = page * limit

    paginated_todos = todos[start_index:end_index]

    return jsonify({
        "total": len(todos),
        "page": page,
        "limit": limit,
        "todos": paginated_todos
    })

# Get a specific todo
@app.route('/todos/<int:id>', methods=['GET'])
def get_todo(id):
    todo = next((todo for todo in todos if todo["id"] == id), None)
    if todo:
        return jsonify(todo)
    else:
        return jsonify({ "error": "Todo not found" }), 404

# Create a new todo
@app.route('/todos', methods=['POST'])
def create_todo():
    todo = request.json
    new_todo = {
        "id": generate_id(), # Generate a unique id
        "text": todo["text"],
        "completed": False # Set completed to false by default
    }
    todos.append(new_todo)
    return jsonify(new_todo), 201

def generate_id():
    # Generate a random id using a library or custom logic
    # For simplicity, let's use a timestamp-based id
    return str(int(time.time() * 1000))

# Update a todo
@app.route('/todos/<int:id>', methods=['PUT'])
def update_todo(id):
    updated_todo = request.json
    index = next((index for index, todo in enumerate(todos) if todo["id"] == id), -1)
    if index != -1:
        todos[index] = updated_todo
        return jsonify(updated_todo)
    else:
        return jsonify({ "error": "Todo not found" }), 404

# Delete a todo
@app.route('/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    index = next((index for index, todo in enumerate(todos) if todo["id"] == id), -1)
    if index != -1:
        deleted_todo = todos.pop(index)
        return jsonify(deleted_todo)
    else:
        return jsonify({ "error": "Todo not found" }), 404

if __name__ == '__main__':
    app.run(port=3000)
