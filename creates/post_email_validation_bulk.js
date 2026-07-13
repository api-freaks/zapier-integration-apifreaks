const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/email-validation/bulk",
    method: "POST",
    body: { "emailData": bundle.inputData["emailData"] },
  });
  return response.data;
};

export default {
  key: "post_email_validation_bulk",
  noun: "Email Validation",
  display: {
    label: "Validate Multiple Email Addresses",
    description: "Validates a bulk of email addresses and returns result for each. Maximum `100` email addresses per request.",
  },
  operation: {
    inputFields: [
      {
        key: "emailData",
        label: "Emaildata",
        type: 'string',
        required: true,
        helpText: "Array of email objects for bulk validation",
      },
    ],
    perform,
    sample: {
      "emailValidationResponses": [
        {
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
        {
          "success": false,
          "email": "test@example.com",
          "name": "Example User",
          "validEmail": "unknown",
          "validSyntax": true,
          "reason": "We are unable to determine if email is valid or invalid.",
          "domain": {
            "name": "example.com",
            "disposable": true,
            "spam": false,
            "free": false,
            "validDomain": true,
            "catchAll": false
          },
          "account": {
            "role": false
          },
          "dns": {
            "mxRecords": [
              "."
            ],
            "aRecords": []
          }
        }
      ]
    },
  },
};
