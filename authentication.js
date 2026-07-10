const test = async (z, bundle) => {
  const response = await z.request({
    url: 'https://api.apifreaks.com/v1.0/geolocation/lookup',
    params: { ip: '8.8.8.8' },
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
  connectionLabel: 'APIFreaks Account',
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