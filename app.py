# -*- coding: utf-8 -*-
"""
Created on Wed Nov 22 12:27:30 2023

@author: Patron
"""
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from sklearn.model_selection import train_test_split
from keras.models import load_model

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

model = load_model('final_model.h5')

data = pd.read_csv("emotions.csv")

# Split the data into training and testing sets
train_texts, test_texts, train_labels, test_labels = train_test_split(data['text'], data['label'], test_size=0.2, random_state=42)

# Tokenize the texts
max_features = 10000  # Number of words to consider as features
max_len = 100  # Maximum length of texts
tokenizer = Tokenizer(num_words=max_features)
tokenizer.fit_on_texts(train_texts)

@app.route('/', methods=['POST'])
def search():
    

    data = request.get_json()
    user_input = data['key1']
    # Example: Search by category (assuming you have a function called search_by_category)
    if not user_input == None:
        test_case_sequence = tokenizer.texts_to_sequences([user_input])
        test_case_data = pad_sequences(test_case_sequence, maxlen=max_len)

        # Make prediction for the test case
        predicted_prob = model.predict(test_case_data)
        predicted_class = np.argmax(predicted_prob)
        return jsonify(str(predicted_class))
    else:
        return jsonify({"message": "No sentiment detected."})
        
if __name__ == '__main__':
    app.run(debug=True)
