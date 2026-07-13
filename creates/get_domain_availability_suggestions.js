const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/availability/suggestions",
    params: { "domain": bundle.inputData["domain"], "source": bundle.inputData["source"], "count": bundle.inputData["count"] },
  });
  return response.data;
};

export default {
  key: "get_domain_availability_suggestions",
  noun: "Domain",
  display: {
    label: "Domain Availability With Suggestions",
    description: "The Domain Search API is designed to simplify the process of finding available domain names across all top-level domains (TLDs) and second-level domains (SLDs).",
  },
  operation: {
    inputFields: [
      {
        key: "domain",
        label: "Domain",
        type: 'string',
        required: true,
        helpText: "Domain name for availability and suggestions.",
      },
      {
        key: "source",
        label: "Source",
        type: 'string',
        required: false,
        helpText: "Specify the data source for domain availability checks. Use \"dns\" for DNS-based lookups or \"whois\" for WHOIS-based lookups. By default, \"dns\" is used.",
        choices: ["dns", "whois"],
      },
      {
        key: "count",
        label: "Count",
        type: 'string',
        required: false,
        helpText: "Number of suggestions to retrieve.",
      },
    ],
    perform,
    sample: {
      "domain_available_response": [
        {
          "domain": "acme.dev",
          "domainAvailability": true
        },
        {
          "domain": "acme.org",
          "domainAvailability": true
        },
        {
          "domain": "acme.info",
          "domainAvailability": true
        },
        {
          "domain": "acme.net",
          "domainAvailability": true
        },
        {
          "domain": "acme.com",
          "domainAvailability": false
        }
      ]
    },
  },
};
