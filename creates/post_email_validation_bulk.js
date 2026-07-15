const perform = async (z, bundle) => {
  // The body must be { emailData: [ { email, name?, ip? }, ... ] } — an ARRAY of
  // OBJECTS, each with a required "email". Sending a bare string causes the
  // "Please provide data in required format in request body" 400.
  let emailData = bundle.inputData.emailData;

  // If provided as a raw JSON string, parse it. If that fails, fall back to
  // treating it as a comma/newline separated list of plain email addresses.
  if (typeof emailData === "string") {
    const s = emailData.trim();
    try {
      emailData = JSON.parse(s);
    } catch (e) {
      emailData = s
        .split(/[\n,]+/)
        .map((x) => x.trim())
        .filter(Boolean)
        .map((email) => ({ email }));
    }
  }

  if (!Array.isArray(emailData)) emailData = emailData ? [emailData] : [];

  // Normalize each row into an object and drop empty optional fields.
  emailData = emailData
    .map((item) => {
      if (item == null) return null;
      if (typeof item === "string") {
        const email = item.trim();
        return email ? { email } : null;
      }
      if (!item.email) return null;
      const obj = { email: String(item.email).trim() };
      if (item.name) obj.name = item.name;
      if (item.ip) obj.ip = item.ip;
      return obj;
    })
    .filter(Boolean);

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/email-validation/bulk",
    method: "POST",
    params: { format: bundle.inputData.format },
    body: { emailData },
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
        label: "Email Data",
        required: true,
        children: [
          {
            key: "email",
            label: "Email",
            type: "string",
            required: true,
            helpText: "Email address to validate.",
          },
          {
            key: "name",
            label: "Name",
            type: "string",
            required: false,
            helpText: "Optional name associated with the email address.",
          },
          {
            key: "ip",
            label: "IP",
            type: "string",
            required: false,
            helpText: "Optional IP address associated with the email address.",
          },
        ],
      },
      {
        key: "format",
        label: "Format",
        type: "string",
        required: false,
        helpText: "Optional response format override. Leave blank for the default.",
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
              "alt1.gmail-smtp-in.l.google.com."
            ],
            "aRecords": [
              "142.250.80.5"
            ]
          }
        }
      ]
    },
  },
};