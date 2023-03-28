from flask import Flask
import json
import os
from api_utils import example

app = Flask(__name__)


@app.route('/')
def index():
    path = example()
    return json.dumps(path)


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000), host='0.0.0.0')