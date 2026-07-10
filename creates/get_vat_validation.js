const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/vat/validation",
    params: { "vatNumber": bundle.inputData["vatNumber"], "requesterVatNumber": bundle.inputData["requesterVatNumber"] },
  });
  return response.data;
};

export default {
  key: "get_vat_validation",
  noun: "Financial",
  display: {
    label: "Validate EU and UK VAT number",
    description: "Validates an EU or UK VAT number and returns registration status details.",
  },
  operation: {
    inputFields: [
      {
        key: "vatNumber",
        label: "Vatnumber",
        type: 'string',
        required: true,
        helpText: "EU or UK VAT number to validate.",
      },
      {
        key: "requesterVatNumber",
        label: "Requestervatnumber",
        type: 'string',
        required: false,
        helpText: "Requester EU or UK VAT number.",
      },
    ],
    perform,
    sample: {
      "country_code": "GB",
      "vat_number": "289111588",
      "requester_country_code": "GB",
      "requester_vat_number": "288305674",
      "requested_at": "2026-04-14T13:51:32.000Z",
      "validation": {
        "is_valid": true,
        "consultation_number": "KNN-ARL-LTK",
        "consultation_authority": "HMRC"
      },
      "company": {
        "company_name": "EVENTURED LTD",
        "company_address": "SUITE 10, BEAUFORT COURT, ADMIRALS WAY, LONDON, E14 9XL, GB"
      }
    },
  },
};
