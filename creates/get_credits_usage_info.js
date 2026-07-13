const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/credits/usage/info",
  });
  return response.data;
};

export default {
  key: "get_credits_usage_info",
  noun: "General",
  display: {
    label: "Get Credits Usage Information",
    description: "Returns the remaining and consumed API credits for the authenticated user.",
  },
  operation: {
    inputFields: [

    ],
    perform,
    sample: {
      "apiKey": "your-api-key",
      "userStatus": "active",
      "subActive": true,
      "subStatus": "example",
      "subAllowedCredits": 123,
      "subUsedCredits": 123,
      "subSurchargeStatus": "example",
      "subSurchargeAllowedCredits": 123,
      "subSurchargeUsedCredits": 123,
      "subSurchargeAllowed": true,
      "oneOffCreditsActive": true,
      "oneOffAllowedCredits": 123,
      "oneOffUsedCredits": 123
    },
  },
};
