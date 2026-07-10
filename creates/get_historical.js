const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/weather/historical",
    params: { "date": bundle.inputData["date"], "location": bundle.inputData["location"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "ip": bundle.inputData["ip"], "precision": bundle.inputData["precision"], "timezone": bundle.inputData["timezone"] },
  });
  return response.data;
};

export default {
  key: "get_historical",
  noun: "Weather",
  display: {
    label: "Retrieve past weather data for a specific date and location, co",
    description: "Access past weather conditions for specific dates with records going back to 1940. Retrieve comprehensive historical data with both daily and hourly precision options.",
  },
  operation: {
    inputFields: [
      {
        key: "date",
        label: "Date",
        type: 'string',
        required: true,
        helpText: "Specific date for which to fetch weather data in YYYY-MM-DD format. Historical dates must be past dates only. Current or future dates are not allowed for historical data. Data available from 1940 onwards.",
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
        helpText: "Precision of the historical data. **Note:** 'daily' returns daily aggregates, 'hourly' returns hourly data.",
        choices: ["daily", "hourly"],
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
      "historical": {
        "daily": {
          "timestamp": "1940-10-10",
          "weather_code": 0,
          "temperature_2m_mean": 28.1,
          "temperature_2m_max": 37.8,
          "temperature_2m_min": 20.2,
          "apparent_temperature_mean": 25,
          "apparent_temperature_max": 36.5,
          "apparent_temperature_min": 16.7,
          "precipitation_sum": 0,
          "rain_sum": 0,
          "snowfall_sum": 0,
          "wind_speed_10m_max": 12.8,
          "wind_gusts_10m_max": 25.6,
          "wind_speed_10m_mean": 8.7,
          "wind_speed_10m_min": 3.9,
          "wind_gusts_10m_min": 9,
          "wind_gusts_10m_mean": 16.4,
          "wind_direction_10m_dominant": 80,
          "shortwave_radiation_sum": 20.09,
          "et0_fao_evapotranspiration_sum": 6.31,
          "cloud_cover_mean": 0,
          "dew_point_2m_mean": 0.1,
          "dew_point_2m_max": 5.5,
          "dew_point_2m_min": -3.1,
          "relative_humidity_2m_mean": 18,
          "relative_humidity_2m_max": 26,
          "relative_humidity_2m_min": 8,
          "pressure_msl_mean": 1010.2,
          "surface_pressure_mean": 985.4
        },
        "astronomy": {
          "date": "1940-10-10",
          "mid_night": "00:19",
          "night_end": "05:11",
          "sunrise": "06:30",
          "sunset": "18:08",
          "night_begin": "19:27",
          "sun_status": "-",
          "solar_noon": "12:19",
          "day_length": "11:38",
          "moon_phase": "WAXING_GIBBOUS",
          "moonrise": "14:39",
          "moonset": "01:07",
          "moon_status": "-"
        }
      }
    },
  },
};
