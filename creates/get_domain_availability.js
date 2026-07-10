const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/availability",
    params: { "domain": bundle.inputData["domain"], "source": bundle.inputData["source"] },
  });
  return response.data;
};

export default {
  key: "get_domain_availability",
  noun: "Domain",
  display: {
    label: "Check whether a domain is available for registration or not",
    description: "The Domain Search API is designed to simplify the process of finding available domain names across all top-level domains (TLDs) and second-level domains (SLDs).",
  },
  operation: {
    inputFields: [
      {
        key: "domain",
        label: "Domain",
        type: 'string',
        required: true,
        helpText: "Domain name whose availability is to be checked.",
      },
      {
        key: "source",
        label: "Source",
        type: 'string',
        required: false,
        helpText: "Specify the data source for domain availability checks. Use \"dns\" for DNS-based lookups or \"whois\" for WHOIS-based lookups. By default, \"dns\" is used.",
        choices: ["dns", "whois"],
      },
    ],
    perform,
    sample: {
      "domain": "google.com",
      "domainAvailability": false
    },
  },
};
