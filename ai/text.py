from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Create a text classification pipeline
pipe = pipeline("text-classification", model="badmatr11x/distilroberta-base-offensive-hateful-speech-text-multiclassification")

@app.route('/classify', methods=['POST'])
def classify_text():
    try:
        # Get the text to classify from the request data
        data = request.get_json()
        text_to_classify = data['text']

        # Use the pipeline to classify the text
        result = pipe(text_to_classify)

        # Extract the predicted label and confidence score
        predicted_label = result[0]['label']
        confidence_score = result[0]['score']

        # Check if the predicted label is associated with offensive content
        offensive_label = "OFFENSIVE-LANGUAGE"  # Adjust this based on the specific labels used by the model

        # Set a threshold for considering a text offensive
        threshold = 0.5  # You can adjust this threshold based on your needs

        # Check if the predicted label is offensive and the confidence score is above the threshold
        if predicted_label == offensive_label and confidence_score > threshold:
            response = {
                'result': 'offensive',
                'confidence': confidence_score
            }
        else:
            response = {
                'result': 'not offensive',
                'predicted_label': predicted_label
            }

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
