const perform = async (z, bundle) => {
  // This is a POST endpoint. The scraping options (url, jsEnabled, ...) go in the
  // QUERY STRING, but the endpoint still tries to JSON-parse the request BODY.
  // Sending a POST with no body -> "Invalid or malformed JSON". So we must always
  // send a valid JSON body. The body carries the "instructions" array (and
  // optionally cookies / blockUrl for jsEnabled=true).
  const parseJson = (val, label) => {
    if (val === undefined || val === null || val === "") return undefined;
    if (typeof val !== "string") return val; // already parsed object/array
    try {
      return JSON.parse(val);
    } catch (e) {
      throw new z.errors.Error(
        `The "${label}" field must be valid JSON. ${e.message}`,
        "InvalidData",
        400
      );
    }
  };

  const body = {};
  const instructions = parseJson(bundle.inputData.instructions, "Instructions");
  if (instructions !== undefined) body.instructions = instructions;

  const cookies = parseJson(bundle.inputData.cookies, "Cookies");
  if (cookies !== undefined) body.cookies = cookies;

  const blockUrl = parseJson(bundle.inputData.blockUrl, "Block URL");
  if (blockUrl !== undefined) body.blockUrl = blockUrl;

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/scraping",
    method: "POST",
    params: {
      url: bundle.inputData.url,
      text: bundle.inputData.text,
      jsEnabled: bundle.inputData.jsEnabled,
      proxy: bundle.inputData.proxy,
      sslIgnore: bundle.inputData.sslIgnore,
      windowSize: bundle.inputData.windowSize,
      adBlock: bundle.inputData.adBlock,
      captcha: bundle.inputData.captcha,
    },
    // Always send valid JSON (defaults to {}) so the body parser never fails.
    body,
  });
  return response.data;
};

export default {
  key: "perform_scraping",
  noun: "Web Scraping",
  display: {
    label: "Perform Web Scraping With Custom Instructions",
    description:
      "Execute a series of web scraping instructions on a target URL. \nSupports various operations like form filling, clicking, data extraction, and CAPTCHA solving.",
  },
  operation: {
    inputFields: [
      {
        key: "url",
        label: "Url",
        type: "string",
        required: true,
        helpText: "Target URL to scrape",
      },
      {
        key: "instructions",
        label: "Instructions",
        type: "text",
        required: false,
        helpText:
          'Ordered scraping steps as a JSON array. You need an "extract" step to return data. ' +
          'Example: [{"extract":{"html":"/html/body"}}] or [{"extract":{"text":"//h1/text()"}}]. ' +
          "Leave blank to load the page without interaction.",
      },
      {
        key: "text",
        label: "Text",
        type: "boolean",
        required: false,
        helpText:
          "Set to `true` to return the data in text format, else `false` for HTML with tags.",
      },
      {
        key: "jsEnabled",
        label: "Jsenabled",
        type: "boolean",
        required: false,
        helpText:
          "Set `true` to enable JavaScript rendering for dynamic pages. Set `false` for static HTML pages. Default is `false`.",
      },
      {
        key: "proxy",
        label: "Proxy",
        type: "string",
        required: false,
        helpText:
          "Use proxy for requests. Can be `true`/`false`, a proxy URL string, or a proxy configuration object.",
      },
      {
        key: "sslIgnore",
        label: "Sslignore",
        type: "boolean",
        required: false,
        helpText: "Ignore SSL certificate errors. Only works if **jsEnabled** is **true**.",
      },
      {
        key: "windowSize",
        label: "Windowsize",
        type: "string",
        required: false,
        helpText:
          'Browser window size as "width,height" (e.g., "1920w,1080h"). Only works if **jsEnabled** is **true**.',
      },
      {
        key: "adBlock",
        label: "Adblock",
        type: "boolean",
        required: false,
        helpText:
          "Set to `true` to apply an ad-blocker to the URL. Only works if **jsEnabled** is **true**.",
      },
      {
        key: "captcha",
        label: "Captcha",
        type: "boolean",
        required: false,
        helpText:
          "If true, you can provide captcha instructions to solve image captchas. Only works if **jsEnabled** is **true**.",
      },
      {
        key: "cookies",
        label: "Cookies",
        type: "text",
        required: false,
        helpText:
          'Optional JSON array of cookies to set (jsEnabled=true only). Example: [{"name":"sessionid","value":"abc"}].',
      },
      {
        key: "blockUrl",
        label: "Block URL",
        type: "text",
        required: false,
        helpText:
          'Optional JSON array of URL/script patterns to block (jsEnabled=true only). Example: ["*.png","ads.js"].',
      },
    ],
    perform,
    sample: {
      "extractedData": {
        "html": "El nombre de dominio: google.sv se encuentra Registrado"
      }
    },
  },
};