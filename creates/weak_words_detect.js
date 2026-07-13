const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/readability/weak-words",
    method: "POST",
    body: { "text": bundle.inputData["text"] },
  });
  return response.data;
};

export default {
  key: "weak_words_detect",
  noun: "Readability",
  display: {
    label: "Detect Weak Words",
    description: "Analyze text and return weak, vague, or filler words with zero-based word positions to help writers produce clearer and more concise content.",
  },
  operation: {
    inputFields: [
      {
        key: "text",
        label: "Text",
        type: 'string',
        required: true,
        helpText: "Text to analyze for weak words",
      },
    ],
    perform,
    sample: {
      "weak_words": [
        {
          "word": "cannot",
          "offset": 80
        }
      ]
    },
  },
};
