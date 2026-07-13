const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/phone/validation",
    method: "POST",
    body: { "number": bundle.inputData["number"], "region": bundle.inputData["region"], "dialer_region": bundle.inputData["dialer_region"] },
  });
  return response.data;
};

export default {
  key: "post_phone_validation",
  noun: "Phone Validation",
  display: {
    label: "Validate a Single Phone Number",
    description: "Validates a single phone number and returns detailed metadata including carrier, line type, geolocation, time zones, and standardized formats.",
  },
  operation: {
    inputFields: [
      {
        key: "number",
        label: "Number",
        type: 'string',
        required: true,
        helpText: "Phone number to validate. Accepts international format (+14155552671), local format (4155552671) with region, or IDD format (0014155552671) with dialer_region.",
      },
      {
        key: "region",
        label: "Region",
        type: 'string',
        required: false,
        helpText: "Two-letter ISO country code (e.g., US, GB). Required when number is in local format without + prefix. Cannot be used together with dialer_region.",
      },
      {
        key: "dialer_region",
        label: "Dialer Region",
        type: 'string',
        required: false,
        helpText: "Two-letter ISO country code indicating the country the number is being dialed from. Required when number uses IDD exit code. Cannot be used together with region.",
      },
    ],
    perform,
    sample: {
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
    },
  },
};
