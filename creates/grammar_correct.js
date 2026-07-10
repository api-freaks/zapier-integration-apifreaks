const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/readability/grammar/correct",
    method: "POST",
    body: { "text": bundle.inputData["text"] },
  });
  return response.data;
};

export default {
  key: "grammar_correct",
  noun: "Readability",
  display: {
    label: "Automatically correct grammar and return corrected text",
    description: "Submit text with grammatical issues and receive a clean grammar-corrected result for proofreading and content workflows.",
  },
  operation: {
    inputFields: [
      {
        key: "text",
        label: "Text",
        type: 'string',
        required: true,
        helpText: "Text to correct",
      },
    ],
    perform,
    sample: {
      "grammar_correction": "The global mental health crisis is now a serious and complex problem. It needs quick and ongoing action from policymakers, healthcare workers, and the whole society."
    },
  },
};
