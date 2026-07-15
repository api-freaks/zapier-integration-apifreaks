const test = async (z, bundle) => {
  // Account-scoped call so the connection can be validated AND labelled with
  // real account data (credits/status), which requires a variable in the label.
  const response = await z.request({
    url: 'https://api.apifreaks.com/v1.0/currency/supported-currencies',
  });
  return response.data;
};

export const includeApiKey = (request, z, bundle) => {
  if (bundle.authData.api_key) {
    request.headers['X-apiKey'] = bundle.authData.api_key;
    request.params = { ...request.params, apiKey: bundle.authData.api_key };
  }
  return request;
};

export default {
  type: 'custom',
  test,
  // Connection label must contain at least one variable so multiple connected
  // APIFreaks accounts are distinguishable in the Zap editor.
  connectionLabel:
    'APIFreaks ({{userStatus}}) — {{subUsedCredits}}/{{subAllowedCredits}} credits used',
  fields: [
    {
      key: 'api_key',
      label: 'API Key',
      required: true,
      type: 'string',
      helpText: 'Your APIFreaks API key from https://apifreaks.com (dashboard).',
    },
  ],
};
