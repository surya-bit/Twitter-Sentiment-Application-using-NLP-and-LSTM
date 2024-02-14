# Twitter-Sentiment-Analysis-Using-LSTM #
## About the Dataset: ##
Welcome to the "Emotions" dataset – a curated collection of English Twitter messages meticulously annotated with six fundamental emotions: anger, fear, joy, love, sadness, and surprise. This dataset serves as a valuable resource for understanding and analyzing the diverse spectrum of emotions expressed in short-form text on social media platforms.

## Dataset Description: ##
Each entry in this dataset consists of a text segment representing a Twitter message and a corresponding label indicating the predominant emotion conveyed. The emotions are classified into six categories: sadness (0), joy (1), love (2), anger (3), fear (4), and surprise (5). Whether you're interested in sentiment analysis, emotion classification, or text mining, this dataset provides a rich foundation for exploring the nuanced emotional landscape within the realm of social media.

## Models Overview: ##
I have developed and experimented with four models for sentiment analysis on this dataset. Here's a brief overview of each model:

1. Decision Tree Classifier (movmiML.ipynb):
   * Utilized classical NLP techniques: text stemming, stopword removal.
   * Vectorized text using TF-IDF vectorizer.
   * Employed a Decision Tree Classifier.
   * Achieved an accuracy of 80%.
   * Identified issues with precision and recall metrics for certain classes due to data imbalance.
       
2. Gradient Boosting Technique (movmiML.ipynb):
   * Implemented a more robust method using Gradient Boosting.
   * Improved accuracy to 81% and enhanced metrics parameters.
   * Addressed some issues related to data imbalance.

3. Balanced Dataset with Undersampling and Oversampling (movmiML.ipynb):
   * Balanced the dataset by undersampling higher instances and oversampling lower instances.
   * Achieved a more balanced dataset but lacked effectiveness in real-world scenarios.
     
4. LSTM Model (movmi-lstm.ipynb):
   * Implemented an LSTM model capable of processing larger input sequences.
   * Utilized tokenization and built a simple LSTM network.
   * Achieved a training accuracy of 93.9% and a testing accuracy of 93.8%.
   * Saved the LSTM model as final_model.h5 for further use.

## Building Application ##

1. app.py
   * Import all the necessary libraries needed. The installation libraries are given below.
   * Initialize the flask application.
   * Load the final_model.h5 and the dataset
   * Define a single POST route ('/') to handle incoming search requests. The search function is executed when a POST request is made to the root endpoint ('/').
   * Pass the user_input and predict the emotion using the model we loaded earlier.

2. app.jsx (Move to sentiment-analysis/src directory to locate this)
   * Import various dependencies and assets, including React hooks (useState, useEffect), icons from react-icons, Axios for making HTTP requests, and a Vite logo image.
   * Do the state management.
   * The useEffect hook is triggered when the query state changes.If the query is not empty, it sends a POST request to the specified API endpoint with the search parameters and updates the results state with the response data.
   * UI rendering and CSS styling is done accordingly.
   * The server communication component communicates with a server located at http://127.0.0.1:5000. It sends a POST request to this server when the user performs a search.

## Installation libraries ##
numpy, pandas, flask , flask_cors , keras , sklearn , python3, node , npm .

## Instructions on how to run the tool locally ##

1. This repo contains sentiment-analysis folder whcih has all the files related to client. The app.py script maintains the server side.
2. Move to the sentiment-analysis folder and run the command : npm i
3. Open a new terminal and move back to the root directory where app.py is located : run python app.py
4. This will start server on port 5000 . (http://localhost:5000)
5. Move to the sentiment-analysis folder again and run the command : npm run dev (Starts client side program)
6. Navigate to http://localhost:5173
7. Please enter the text for which you want to analyse the sentiment .
8. The output is one of the 6 different emotions the model has been trained before . Also included an emoji to enhance user experience .

## Here are few example cases the model has been tested on ##

<img width="798" alt="fear" src="https://github.com/surya-bit/Twitter-Sentiment-Application-using-NLP-and-LSTM/assets/61753483/dfe33f96-f4b7-4f9b-9a76-9a48774b91f3">

<img width="790" alt="joy" src="https://github.com/surya-bit/Twitter-Sentiment-Application-using-NLP-and-LSTM/assets/61753483/13fc9ab6-b306-4a86-ab50-7f3969ef1e2a">

<img width="810" alt="anger" src="https://github.com/surya-bit/Twitter-Sentiment-Application-using-NLP-and-LSTM/assets/61753483/8bfb6146-8c89-49c0-bc1c-859ff54006fc">

