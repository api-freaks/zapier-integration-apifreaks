const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/weather/time-series",
    params: { "startDate": bundle.inputData["startDate"], "endDate": bundle.inputData["endDate"], "location": bundle.inputData["location"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "ip": bundle.inputData["ip"], "precision": bundle.inputData["precision"], "timezone": bundle.inputData["timezone"] },
  });
  return response.data;
};

export default {
  key: "get_time_series_2",
  noun: "Weather",
  display: {
    label: "Get historical weather data across a date range",
    description: "Pull historical weather information for date ranges up to 90 days (daily data) or 7 days (hourly data). Get consistent formatting across your specified date range with reliable historical weather patterns.",
  },
  operation: {
    inputFields: [
      {
        key: "startDate",
        label: "Startdate",
        type: 'string',
        required: true,
        helpText: "Starting date for the data in YYYY-MM-DD format. Historical dates must be past dates only. Current or future dates are not allowed for historical data. Data available from 1940 onwards. For precision=daily, the difference between endDate and startDat",
      },
      {
        key: "endDate",
        label: "Enddate",
        type: 'string',
        required: true,
        helpText: "End date for the data in YYYY-MM-DD format. Historical dates must be past dates only. Current or future dates are not allowed for historical data. Data available from 1940 onwards. For precision=daily, the difference between endDate and startDate mus",
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
        helpText: "Precision of the data.",
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
        "2025-08-01": {
          "daily": {
            "timestamp": "2025-08-01",
            "weather_code": 63,
            "temperature_2m_mean": 27.3,
            "temperature_2m_max": 29.8,
            "temperature_2m_min": 26,
            "apparent_temperature_mean": 33.6,
            "apparent_temperature_max": 36,
            "apparent_temperature_min": 31.9,
            "precipitation_sum": 17.8,
            "rain_sum": 17.8,
            "snowfall_sum": 0,
            "wind_speed_10m_max": 12.2,
            "wind_gusts_10m_max": 26.3,
            "wind_speed_10m_mean": 7.4,
            "wind_speed_10m_min": 2.2,
            "wind_gusts_10m_min": 5,
            "wind_gusts_10m_mean": 16.7,
            "wind_direction_10m_dominant": 76,
            "shortwave_radiation_sum": 7.89,
            "et0_fao_evapotranspiration_sum": 1.75,
            "cloud_cover_mean": 99,
            "dew_point_2m_mean": 25.9,
            "dew_point_2m_max": 26.5,
            "dew_point_2m_min": 25.1,
            "relative_humidity_2m_mean": 92,
            "relative_humidity_2m_max": 97,
            "relative_humidity_2m_min": 81,
            "pressure_msl_mean": 999.2,
            "surface_pressure_mean": 974.6
          },
          "astronomy": {
            "date": "2025-08-01",
            "mid_night": "00:09",
            "night_end": "03:47",
            "sunrise": "05:17",
            "sunset": "19:00",
            "night_begin": "20:30",
            "sun_status": "-",
            "solar_noon": "12:08",
            "day_length": "13:43",
            "moon_phase": "FIRST_QUARTER",
            "moonrise": "12:17",
            "moonset": "23:04",
            "moon_status": "-"
          }
        }
      }
    },
  },
};
