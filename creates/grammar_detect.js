const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/readability/grammar/detect",
    method: "POST",
    body: { "text": bundle.inputData["text"] },
  });
  return response.data;
};

export default {
  key: "grammar_detect",
  noun: "Readability",
  display: {
    label: "Detect Grammar Errors",
    description: "Analyze text for grammar errors and return the exact words flagged as grammatically incorrect with zero-based word positions.",
  },
  operation: {
    inputFields: [
      {
        key: "text",
        label: "Text",
        type: 'string',
        required: true,
        helpText: "Text to analyze for grammar errors",
      },
    ],
    perform,
    sample: {
      "grammar_errors": [
        {
          "word": "is",
          "offset": 3
        },
        {
          "word": "need",
          "offset": 14
        }
      ]
    },
  },
};
