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
    label: "Get credits usage information",
    description: "Returns the remaining and consumed API credits for the authenticated user.",
  },
  operation: {
    inputFields: [

    ],
    perform,
  },
};
