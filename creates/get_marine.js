const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/weather/marine",
    params: { "startDate": bundle.inputData["startDate"], "endDate": bundle.inputData["endDate"], "location": bundle.inputData["location"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "ip": bundle.inputData["ip"], "precision": bundle.inputData["precision"], "timezone": bundle.inputData["timezone"] },
  });
  return response.data;
};

export default {
  key: "get_marine",
  noun: "Weather",
  display: {
    label: "Dive into detailed marine weather forecasts for coastal and off",
    description: "Provides hourly forecasts of marine conditions including wave heights, wave directions, wave periods, swell info, sea surface temperatures, and ocean currents. Supports multiple geographical points and returns daily max wave statistics for up to 7 days. Ideal for maritime planning, navigation, and coastal activities.",
  },
  operation: {
    inputFields: [
      {
        key: "startDate",
        label: "Startdate",
        type: 'string',
        required: false,
        helpText: "Starting date for marine forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 16 days.",
      },
      {
        key: "endDate",
        label: "Enddate",
        type: 'string',
        required: false,
        helpText: "End date for marine forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 16 days.",
      },
      {
        key: "location",
        label: "Location",
        type: 'string',
        required: false,
        helpText: "City name, place name, or full address.",
      },
      {
        key: "lat",
        label: "Lat",
        type: 'string',
        required: false,
        helpText: "Latitude of the location.",
      },
      {
        key: "long",
        label: "Long",
        type: 'string',
        required: false,
        helpText: "Longitude of the location.",
      },
      {
        key: "ip",
        label: "Ip",
        type: 'string',
        required: false,
        helpText: "IP(v4 or v6) address for location inference.",
      },
      {
        key: "precision",
        label: "Precision",
        type: 'string',
        required: false,
        helpText: "Precision of the marine data.",
        choices: ["daily", "hourly", "minutely"],
      },
      {
        key: "timezone",
        label: "Timezone",
        type: 'string',
        required: false,
        helpText: "Timezone for the results.",
      },
    ],
    perform,
    sample: {
      "location": {
        "continent_code": "AS",
        "continent_name": "Asia",
        "country_code2": "PK",
        "country_code3": "PAK",
        "country_name": "Pakistan",
        "country_name_official": "Islamic Republic of Pakistan",
        "is_eu": false,
        "state_prov": "Punjab",
        "state_code": "PK-PB",
        "district": "Lahore",
        "city": "Lahore",
        "zipcode": "54000",
        "latitude": "31.52037",
        "longitude": "74.35875",
        "locality": "Gulberg",
        "elevation": "",
        "timezone": "Asia/Karachi",
        "timezone_abbreviation": "GMT+5"
      },
      "forecast": {
        "2025-10-01": {
          "daily": {
            "timestamp": "2025-10-01",
            "wave_height_max": null,
            "wave_direction_dominant": null,
            "wave_period_max": null,
            "wind_wave_height_max": null,
            "wind_wave_direction_dominant": null,
            "wind_wave_period_max": null,
            "wind_wave_peak_period_max": null,
            "swell_wave_height_max": null,
            "swell_wave_direction_dominant": null,
            "swell_wave_period_max": null,
            "swell_wave_peak_period_max": null
          }
        }
      }
    },
  },
};
