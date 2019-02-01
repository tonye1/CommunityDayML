# Create API of ML model using flask

'''
This code takes the JSON data while POST request an performs the prediction using loaded model and returns
the results in JSON format.
'''

# Import libraries
import os
import json
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pickle

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Get hostname
cf_app_env = os.getenv('VCAP_APPLICATION')
if cf_app_env is not None:
   host = json.loads(cf_app_env)['application_uris'][0]
else:
   host = 'localhost'


# Load the model
model = pickle.load(open('model.pkl','rb'))

@app.route('/api',methods=['POST'])
@cross_origin()
def predict():
    # Get the data from the POST request.
    data = request.get_json(force=True)

    # Make prediction using model loaded from disk as per the data.
    prediction = model.predict([[np.array(data['post'])]])

    # Take the first value of prediction
    output = prediction[0]

    return jsonify(output)

# run app
if __name__ == "__main__":
    if os.environ.get('VCAP_SERVICES') is None: # running locally
        PORT = 8080
        DEBUG = True
    else:                                       # running on CF
        PORT = int(os.getenv("PORT"))
        DEBUG = False

app.run(host='0.0.0.0', port=PORT, debug=DEBUG)
