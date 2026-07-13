const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/commodity/symbols",
  });
  return response.data;
};

export default {
  key: "get_commodity_symbols",
  noun: "Commodity",
  display: {
    label: "Get All Supported Commodity Symbols",
    description: "Returns the list of supported commodity symbols with metadata.",
  },
  operation: {
    inputFields: [

    ],
    perform,
    sample: {
      "success": true,
      "symbols": [
        {
          "symbol": "XAU",
          "name": "Gold",
          "category": "Metals",
          "status": "active",
          "updateInterval": "PER_SECOND",
          "currency": {
            "code": "USD",
            "name": "US Dollar",
            "symbol": "$"
          },
          "unit": {
            "symbol": "T.oz",
            "name": "Troy Ounce"
          }
        },
        {
          "symbol": "NG-FUT",
          "name": "Natural Gas Futures",
          "category": "Energy",
          "status": "active",
          "updateInterval": "PER_MINUTE",
          "currency": {
            "code": "USD",
            "name": "US Dollar",
            "symbol": "$"
          },
          "unit": {
            "symbol": "MMBtu",
            "name": "Million British Thermal Units"
          }
        }
      ]
    },
  },
};
