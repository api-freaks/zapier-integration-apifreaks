const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/email-validation/single",
    method: "POST",
    body: { "email": bundle.inputData["email"], "name": bundle.inputData["name"], "ip": bundle.inputData["ip"] },
  });
  return response.data;
};

export default {
  key: "post_email_validation_single",
  noun: "Email Validation",
  display: {
    label: "Validate a Single Email",
    description: "Validates a single email address and returns result.",
  },
  operation: {
    inputFields: [
      {
        key: "email",
        label: "Email",
        type: 'string',
        required: false,
        helpText: "Email address to validate",
      },
      {
        key: "name",
        label: "Name",
        type: 'string',
        required: false,
        helpText: "Name of the email address",
      },
      {
        key: "ip",
        label: "Ip",
        type: 'string',
        required: false,
        helpText: "IP address of the email address",
      },
    ],
    perform,
    sample: {
      "success": true,
      "email": "abc.def@gmail.com",
      "name": "Test User",
      "validEmail": "valid",
      "validSyntax": true,
      "domain": {
        "name": "gmail.com",
        "disposable": false,
        "spam": false,
        "free": true,
        "validDomain": true,
        "catchAll": false
      },
      "account": {
        "role": false,
        "fullMailBox": false
      },
      "dns": {
        "mxRecords": [
          "gmail-smtp-in.l.google.com.",
          "alt1.gmail-smtp-in.l.google.com.",
          "alt2.gmail-smtp-in.l.google.com.",
          "alt3.gmail-smtp-in.l.google.com.",
          "alt4.gmail-smtp-in.l.google.com."
        ],
        "aRecords": [
          "142.250.80.5"
        ]
      }
    },
  },
};
