const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/iban/validation",
    params: { "iban": bundle.inputData["iban"] },
  });
  return response.data;
};

export default {
  key: "get_iban_validation",
  noun: "Financial",
  display: {
    label: "Validate IBAN",
    description: "Checks an IBAN for structural validity, checksum accuracy, and bank metadata.",
  },
  operation: {
    inputFields: [
      {
        key: "iban",
        label: "Iban",
        type: 'string',
        required: true,
        helpText: "IBAN to validate.",
      },
    ],
    perform,
    sample: {
      "valid": true,
      "iban": "GB49NWBK08609000000003",
      "validation": {
        "is_alpha_numeric": true,
        "is_iban_supported_country": true,
        "is_valid_length": true,
        "is_valid_structure": true,
        "is_iban_check_digit_valid": true,
        "bban": "valid"
      },
      "bank_data": {
        "bic": "NWBKGB2LBHM",
        "bank": "NATIONAL WESTMINSTER BANK PLC",
        "bank_code": "NWBK",
        "branch_code": "086090",
        "country": "United Kingdom",
        "country_iso2": "GB",
        "city": "BIRMINGHAM",
        "address": "6 BRINDLEY PLACE",
        "account": "00000003",
        "sepa": true
      }
    },
  },
};
