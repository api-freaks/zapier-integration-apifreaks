const perform = async (z, bundle) => {
  // The /v1.0/flags endpoint returns a BINARY image (png / webp / svg), not JSON,
  // so response.data is undefined -> Zapier's "non-object result (undefined)" error.
  // Fetch it raw, stash it as a Zapier-hosted file, and return an object
  // (Zapier creates must return an object).
  const filePromise = z.request({
    url: "https://api.apifreaks.com/v1.0/flags",
    params: {
      name: bundle.inputData.name,
      shape: bundle.inputData.shape,
      size: bundle.inputData.size,
      type: bundle.inputData.type,
      format: bundle.inputData.format,
    },
    raw: true,
  });

  // z.stashFile infers filename + content-type from the response headers and
  // returns a stable Zapier file URL usable by downstream steps.
  const file = await z.stashFile(filePromise);

  return {
    file,
    name: bundle.inputData.name,
    shape: bundle.inputData.shape,
    size: bundle.inputData.size || null,
    type: bundle.inputData.type,
    format: bundle.inputData.format || "png",
  };
};

export default {
  key: "get_flags",
  noun: "GeoDB",
  display: {
    label: "Get Flag for Country",
    description: "Retrieve the flag for a specific country",
  },
  operation: {
    inputFields: [
      {
        key: "name",
        label: "Name",
        type: "string",
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format.",
      },
      {
        key: "shape",
        label: "Shape",
        type: "string",
        required: true,
        helpText: "Flag shape. One of: `'flat'` or `'round'`.",
        choices: ["flat", "round"],
      },
      {
        key: "format",
        label: "Format",
        type: "string",
        required: false,
        helpText:
          "Flag image format. One of: `png`, `webp`, or `svg`. Default is `png`.",
        choices: ["png", "webp", "svg"],
      },
      {
        key: "size",
        label: "Size",
        type: "string",
        required: false,
        helpText:
          "Flag size in pixels. Valid options: `16px`, `24px`, `32px`, `48px`, `64px`. Applicable only for PNG or WEBP formats.",
        choices: ["16px", "24px", "32px", "48px", "64px"],
      },
      {
        key: "type",
        label: "Type",
        type: "string",
        required: true,
        helpText: "Type of flag. One of: `country` or `organization`.",
        choices: ["country", "organization"],
      },
    ],
    perform,
    sample: {
      "file": "https://zapier-dev-files.s3.amazonaws.com/cli-platform/flags/us-flat.png",
      "name": "US",
      "shape": "flat",
      "size": null,
      "type": "country",
      "format": "png",
    },
  },
};