const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/screenshot",
    method: "POST",
    body: { "urls": bundle.inputData["urls"] },
  });
  return response.data;
};

export default {
  key: "bulk_screenshot",
  noun: "Screenshot",
  display: {
    label: "Capture screenshots of multiple websites in a single request",
    description: "Our Bulk Screenshot API allows you to capture screenshots of multiple webpages simultaneously, saving you time and effort. Instead of manually capturing each page one by one, you can batch process URLs and receive high-quality screenshots in the format you choose.\n Maximum `50 URLs` per request.",
  },
  operation: {
    inputFields: [
      {
        key: "urls",
        label: "Urls",
        type: 'string',
        required: true,
        helpText: "List of website URLs to capture screenshots of",
      },
    ],
    perform,
  },
};
