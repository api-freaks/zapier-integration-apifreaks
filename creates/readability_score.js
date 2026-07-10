const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/readability/score",
    method: "POST",
    params: { "target": bundle.inputData["target"], "exclude": bundle.inputData["exclude"] },
    body: { "text": bundle.inputData["text"] },
  });
  return response.data;
};

export default {
  key: "readability_score",
  noun: "Readability",
  display: {
    label: "Calculate readability scores, grade, and sentence-level readabi",
    description: "Analyze text readability using industry-standard formulas including Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog Index, SMOG Index, Coleman-Liau Index, and Automated Readability Index.",
  },
  operation: {
    inputFields: [
      {
        key: "target",
        label: "Target",
        type: 'string',
        required: false,
        helpText: "Target audience used to tune sentence difficulty levels",
        choices: ["general", "professional", "academic", "technical"],
      },
      {
        key: "exclude",
        label: "Exclude",
        type: 'string',
        required: false,
        helpText: "Comma-separated response sections to omit. Possible values are readability_scores, sentence_readability, readability_grade",
      },
      {
        key: "text",
        label: "Text",
        type: 'string',
        required: true,
        helpText: "Text to analyze for readability",
      },
    ],
    perform,
    sample: {
      "readability_scores": {
        "flesch_reading_ease": {
          "score": 51.9903,
          "level": "Fairly Difficult"
        },
        "flesch_kincaid_grade": {
          "score": 9.7755,
          "level": "Grade 10"
        },
        "gunning_fog": {
          "score": 10.4623,
          "level": "Standard"
        },
        "smog_index": {
          "score": 10.8642,
          "level": "Grade 11"
        },
        "coleman_liau_index": {
          "score": 13.033,
          "level": "Grade 13"
        },
        "automated_readability_index": {
          "score": 12.0325,
          "level": "Grade 12"
        }
      },
      "sentence_readability": [
        {
          "sentence": "The global mental is health crisis is now a serious and compelex problem.",
          "readability_grade": 8.9496,
          "readability_level": "Easy"
        }
      ],
      "readability_grade": 11.8783
    },
  },
};
