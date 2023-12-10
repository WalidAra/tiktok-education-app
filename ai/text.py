from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Create a text classification pipeline
pipe = pipeline("text-classification", model="badmatr11x/distilroberta-base-offensive-hateful-speech-text-multiclassification")

@app.route('/classify', methods=['POST'])
def classify_text():
    try:
        data = request.get_json()
        text_to_classify = data['text']

        result = pipe(text_to_classify)

        predicted_label = result[0]['label']
        confidence_score = result[0]['score']

        offensive_label = "OFFENSIVE-LANGUAGE" 
        threshold = 0.5  

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