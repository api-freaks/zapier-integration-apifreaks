const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/timezone/converter",
    params: { "time": bundle.inputData["time"], "tz_from": bundle.inputData["tz_from"], "tz_to": bundle.inputData["tz_to"], "lat_from": bundle.inputData["lat_from"], "long_from": bundle.inputData["long_from"], "lat_to": bundle.inputData["lat_to"], "long_to": bundle.inputData["long_to"], "location_from": bundle.inputData["location_from"], "location_to": bundle.inputData["location_to"], "iata_from": bundle.inputData["iata_from"], "iata_to": bundle.inputData["iata_to"], "icao_from": bundle.inputData["icao_from"], "icao_to": bundle.inputData["icao_to"], "locode_from": bundle.inputData["locode_from"], "locode_to": bundle.inputData["locode_to"] },
  });
  return response.data;
};

export default {
  key: "convert_timezone",
  noun: "Timezone",
  display: {
    label: "Convert Time Between Timezones",
    description: "Converts a given time from one timezone to another using various input types like timezone name, coordinates, location, or codes.",
  },
  operation: {
    inputFields: [
      {
        key: "time",
        label: "Time",
        type: 'string',
        required: false,
        helpText: "Time to convert in `yyyy-MM-dd HH:mm` or `yyyy-MM-dd HH:mm:ss` format.",
      },
      {
        key: "tz_from",
        label: "Tz From",
        type: 'string',
        required: false,
        helpText: "Source timezone name (e.g., `Asia/Kolkata`).",
      },
      {
        key: "tz_to",
        label: "Tz To",
        type: 'string',
        required: false,
        helpText: "Target timezone name (e.g., `America/New_York`).",
      },
      {
        key: "lat_from",
        label: "Lat From",
        type: 'string',
        required: false,
        helpText: "Latitude of source location.",
      },
      {
        key: "long_from",
        label: "Long From",
        type: 'string',
        required: false,
        helpText: "Longitude of source location.",
      },
      {
        key: "lat_to",
        label: "Lat To",
        type: 'string',
        required: false,
        helpText: "Latitude of target location.",
      },
      {
        key: "long_to",
        label: "Long To",
        type: 'string',
        required: false,
        helpText: "Longitude of target location.",
      },
      {
        key: "location_from",
        label: "Location From",
        type: 'string',
        required: false,
        helpText: "From location (city/country).",
      },
      {
        key: "location_to",
        label: "Location To",
        type: 'string',
        required: false,
        helpText: "To location (city/country).",
      },
      {
        key: "iata_from",
        label: "Iata From",
        type: 'string',
        required: false,
        helpText: "From IATA airport code (e.g., JFK).",
      },
      {
        key: "iata_to",
        label: "Iata To",
        type: 'string',
        required: false,
        helpText: "To IATA airport code.",
      },
      {
        key: "icao_from",
        label: "Icao From",
        type: 'string',
        required: false,
        helpText: "From ICAO airport code (e.g., KJFK).",
      },
      {
        key: "icao_to",
        label: "Icao To",
        type: 'string',
        required: false,
        helpText: "To ICAO airport code.",
      },
      {
        key: "locode_from",
        label: "Locode From",
        type: 'string',
        required: false,
        helpText: "From UN/LO CODE.",
      },
      {
        key: "locode_to",
        label: "Locode To",
        type: 'string',
        required: false,
        helpText: "To UN/LO CODE.",
      },
    ],
    perform,
    sample: {
      "original_time": "2024-09-01 00:00:00",
      "converted_time": "2024-09-01 09:00:00",
      "diff_hour": 9,
      "diff_min": 540
    },
  },
};
