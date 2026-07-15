const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/phone/validation/bulk",
    method: "POST",
    body: { "numbers": bundle.inputData["numbers"] },
  });
  // API returns a bare array; wrap it so this create outputs an object
  // (Zapier creates must return an object, not a top-level array).
  return Array.isArray(response.data) ? { results: response.data } : response.data;
};

export default {
  key: "post_phone_validation_bulk",
  noun: "Phone Validation",
  display: {
    label: "Bulk Validate Phone Numbers",
    description: "Validates up to 100 phone numbers in a single request. Each number is processed independently \u2014 invalid entries return per-number errors without affecting the rest of the batch.",
  },
  operation: {
    inputFields: [
      {
        key: "numbers",
        label: "Numbers",
        type: 'string',
        required: true,
        helpText: "Array of phone number objects. Maximum 100 per request.",
      },
    ],
    perform,
    sample: {
      "results": [
        {
      "raw_input": {
        "number": "+14155552671"
      },
      "possible": true,
      "valid": true,
      "country_prefix": 1,
      "national_number": 4155552671,
      "country_code": "US",
      "location": "San Francisco, CA",
      "time_zones": [
        "America/Los_Angeles"
      ],
      "line_type": "FIXED_LINE_OR_MOBILE",
      "formats": {
        "E164": "+14155552671",
        "International": "+1 415-555-2671",
        "National": "(415) 555-2671",
        "RFC3966": "tel:+1-415-555-2671"
      },
      "area_code_length": 3,
      "ndc_length": 3,
      "can_be_internationally_dialled": true
    }
      ]
    },
  },
};
