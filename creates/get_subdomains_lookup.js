const perform = async (z, bundle) => {
  // Build params with only the fields that have values.
  // Sending empty optional params (after=&before=&status=&page=) causes the API's
  // "Unable to process Request ... For input string: \"\"" 400 (empty page can't parse to a number).
  const params = { domain: bundle.inputData.domain };
  ["after", "before", "status", "page"].forEach((key) => {
    const value = bundle.inputData[key];
    if (value !== undefined && value !== null && value !== "") {
      params[key] = value;
    }
  });

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/subdomains/lookup",
    params,
  });
  return response.data;
};

export default {
  key: "get_subdomains_lookup",
  noun: "Domain",
  display: {
    label: "Subdomains Lookup",
    description:
      "The Subdomain Lookup API is designed to retrieve subdomains related to the given domain name. It helps you explore subdomains that are available for registration or usage.",
  },
  operation: {
    inputFields: [
      {
        key: "domain",
        label: "Domain",
        type: "string",
        required: true,
        helpText: "Domain name for availability and suggestions.",
      },
      {
        key: "after",
        label: "After",
        type: "string",
        required: false,
        helpText: "Filter subdomains seen after this date (format YYYY-MM-DD).",
      },
      {
        key: "before",
        label: "Before",
        type: "string",
        required: false,
        helpText: "Filter subdomains seen before this date (format YYYY-MM-DD).",
      },
      {
        key: "status",
        label: "Status",
        type: "string",
        required: false,
        helpText: "Filter subdomains by status (active or inactive).",
        choices: ["active", "inactive"],
      },
      {
        key: "page",
        label: "Page",
        type: "integer",
        required: false,
        helpText: "Page number for paginated results.",
      },
    ],
    perform,
    sample: {
      "domain": "google.com",
      "status": true,
      "query_time": "2026-06-17T11:33:37.892722269",
      "current_page": 1,
      "total_pages": 3,
      "total_records": 299,
      "subdomains": [
        {
          "subdomain": "r2---sn-p5qddn7r.c.pack.google.com",
          "first_seen": "2025-01-17",
          "last_seen": "2026-06-16",
          "inactive_from": "2026-06-16"
        },
        {
          "subdomain": "rr1---sn-p5qlsndk.c.drive.google.com",
          "first_seen": "2025-02-10",
          "last_seen": "2025-10-04"
        },
        {
          "subdomain": "jules.google.com",
          "first_seen": "2025-06-12",
          "last_seen": "2026-06-15"
        }
      ]
    },
  },
};