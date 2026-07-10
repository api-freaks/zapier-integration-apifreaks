const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/availability",
    method: "POST",
    params: { "source": bundle.inputData["source"] },
    body: { "domainNames": bundle.inputData["domainNames"] },
  });
  return response.data;
};

export default {
  key: "post_domain_availability",
  noun: "Domain",
  display: {
    label: "Check the availability of multiple domains in a single request",
    description: "Perform Bulk Domain Availability checks using a list of domains. Supports upto `100 Domains Per Request`.",
  },
  operation: {
    inputFields: [
      {
        key: "source",
        label: "Source",
        type: 'string',
        required: false,
        helpText: "Specify the data source for domain availability checks. Use \"dns\" for DNS-based lookups or \"whois\" for WHOIS-based lookups. By default, \"dns\" is used.",
        choices: ["dns", "whois"],
      },
      {
        key: "domainNames",
        label: "Domainnames",
        type: 'string',
        required: true,
        helpText: "List of domain names to check.",
      },
    ],
    perform,
    sample: {
      "bulk_domain_availability_response": [
        {
          "domain": "bannu.in",
          "domainAvailability": false,
          "status": true
        },
        {
          "domain": "techguruss.com",
          "domainAvailability": true,
          "status": true
        }
      ]
    },
  },
};
