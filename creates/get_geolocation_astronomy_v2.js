const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v2.0/geolocation/astronomy",
    params: { "location": bundle.inputData["location"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "ip": bundle.inputData["ip"], "lang": bundle.inputData["lang"], "date": bundle.inputData["date"], "elevation": bundle.inputData["elevation"], "time_zone": bundle.inputData["time_zone"] },
  });
  return response.data;
};

export default {
  key: "get_geolocation_astronomy_v2",
  noun: "Other",
  display: {
    label: "Astronomy Lookup (V2.0)",
    description: "Retrieve sunrise and sunset times, current position of the moon, and other related information by specifying a location address, location coordinates, IP address, or using the client IP address if no parameter is passed. - v2.0 response format.",
  },
  operation: {
    inputFields: [
      {
        key: "location",
        label: "Location",
        type: 'string',
        required: false,
        helpText: "Extract astronomy information using location (preferably city)",
      },
      {
        key: "lat",
        label: "Lat",
        type: 'string',
        required: false,
        helpText: "Latitude to extract astronomy information using location coordinates",
      },
      {
        key: "long",
        label: "Long",
        type: 'string',
        required: false,
        helpText: "Longitude to extract astronomy information using location coordinates",
      },
      {
        key: "ip",
        label: "Ip",
        type: 'string',
        required: false,
        helpText: "IPv4 or IPv6 address to extract astronomy information using IP address",
      },
      {
        key: "lang",
        label: "Lang",
        type: 'string',
        required: false,
        helpText: "Response language of \"location\" field in case of lookup through IP address only.",
        choices: ["en", "de", "ru", "ja", "fr", "cn", "es", "cs", "it", "ko", "fa", "pt"],
      },
      {
        key: "date",
        label: "Date",
        type: 'string',
        required: false,
        helpText: "Specific date (format YYYY-MM-DD) for which astronomy data is required",
      },
      {
        key: "elevation",
        label: "Elevation",
        type: 'string',
        required: false,
        helpText: "Elevation above sea level at the location, in meters. The value should be between 0 meter and a maximum value of 10,000 meters. Negative value is set to 0.",
      },
      {
        key: "time_zone",
        label: "Time Zone",
        type: 'string',
        required: false,
        helpText: "Time zone to receive all time-based data in your preferred local time.",
      },
    ],
    perform,
    sample: {
      "location": {
        "location_string": "New York, US",
        "country_name": "United States",
        "state_prov": "New York",
        "city": "New York",
        "locality": "Clinton",
        "latitude": "40.76473",
        "longitude": "-74.00084",
        "elevation": "9"
      },
      "astronomy": {
        "date": "2026-06-04",
        "current_time": "06:02:14.117",
        "mid_night": "00:54",
        "night_end": "03:23",
        "morning": {
          "astronomical_twilight_begin": "03:23",
          "astronomical_twilight_end": "04:11",
          "nautical_twilight_begin": "04:11",
          "nautical_twilight_end": "04:53",
          "civil_twilight_begin": "04:53",
          "civil_twilight_end": "05:25"
        },
        "sunrise": "05:25",
        "sun_transit": "12:53",
        "sunset": "20:21",
        "evening": {
          "civil_twilight_begin": "20:21",
          "civil_twilight_end": "20:53",
          "nautical_twilight_begin": "20:53",
          "nautical_twilight_end": "21:35",
          "astronomical_twilight_begin": "21:35",
          "astronomical_twilight_end": "22:23"
        },
        "golden_hour": {
          "golden_hour_begin": "05:25",
          "golden_hour_end": "06:24",
          "golden_hour_evening_begin": "19:23",
          "golden_hour_evening_end": "20:21"
        },
        "blue_hour": {
          "blue_hour_morning_begin": "04:53",
          "blue_hour_morning_end": "05:25",
          "blue_hour_evening_begin": "20:21",
          "blue_hour_evening_end": "20:53"
        },
        "day_length": "14:55:36",
        "day_length_seconds": 53736,
        "sun_distance": "151854887.930",
        "sun_distance_km": "151854887.930",
        "sun_azimuth": "73.73",
        "sun_altitude": "3.24",
        "sun_parallactic_angle": "41.05",
        "moon": {
          "moon_phase": "Waning Crescent",
          "moon_phase_fraction": "0.04",
          "moon_illumination_percentage": "4",
          "moonrise": "04:15",
          "moonset": "19:17",
          "moon_transit": "11:43",
          "moon_distance": "369278.723",
          "moon_distance_km": "369278.723",
          "moon_azimuth": "62.36",
          "moon_altitude": "0.61",
          "moon_parallactic_angle": "44.36",
          "next_full_moon": "2026-06-29",
          "next_full_moon_utc": "2026-06-29T04:57:00",
          "next_new_moon": "2026-07-13",
          "next_new_moon_utc": "2026-07-13T10:44:00",
          "moon_days": "27.78"
        }
      }
    },
  },
};
