const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/scraping",
    method: "POST",
    params: { "url": bundle.inputData["url"], "text": bundle.inputData["text"], "jsEnabled": bundle.inputData["jsEnabled"], "proxy": bundle.inputData["proxy"], "sslIgnore": bundle.inputData["sslIgnore"], "windowSize": bundle.inputData["windowSize"], "adBlock": bundle.inputData["adBlock"], "captcha": bundle.inputData["captcha"] },
  });
  return response.data;
};

export default {
  key: "perform_scraping",
  noun: "Web Scraping",
  display: {
    label: "Perform Web Scraping With Custom Instructions",
    description: "Execute a series of web scraping instructions on a target URL. \nSupports various operations like form filling, clicking, data extraction, and CAPTCHA solving.",
  },
  operation: {
    inputFields: [
      {
        key: "url",
        label: "Url",
        type: 'string',
        required: true,
        helpText: "Target URL to scrape",
      },
      {
        key: "text",
        label: "Text",
        type: 'string',
        required: false,
        helpText: "Set to `true` to return the data in text format else `false` for data in html format with tags.",
      },
      {
        key: "jsEnabled",
        label: "Jsenabled",
        type: 'string',
        required: false,
        helpText: "Set `true` to enable JavaScript rendering for dynamic pages. Set `false` for static HTML pages.    Default value is `false`.",
      },
      {
        key: "proxy",
        label: "Proxy",
        type: 'string',
        required: false,
        helpText: "Use proxy for requests. Can be `true`/`false`, a proxy URL string, or a proxy configuration object.",
      },
      {
        key: "sslIgnore",
        label: "Sslignore",
        type: 'string',
        required: false,
        helpText: "Ignore SSL certificate errors.    Only works if **jsEnabled** is **true**.",
      },
      {
        key: "windowSize",
        label: "Windowsize",
        type: 'string',
        required: false,
        helpText: "Specify the browser window size in the format 'width,height' (e.g., \"1920w,1080h\"). Default value is the default resolutions provided by web/browser.    Only works if **jsEnabled** is **true**.",
      },
      {
        key: "adBlock",
        label: "Adblock",
        type: 'string',
        required: false,
        helpText: "Set to `true` to apply ad-blocker to the specified URL else false or ignore to not apply.    Only works if **jsEnabled** is **true**.",
      },
      {
        key: "captcha",
        label: "Captcha",
        type: 'string',
        required: false,
        helpText: "if true user can provide captcha instructions in the instructions to solve image captchas.     Only works if **jsEnabled** is **true**.",
      },
    ],
    perform,
    sample: {
      "extractedData": {
        "html": "El nombre de dominio: google.sv se encuentra RegistradoNombre de dominio: google.svEstado: RegistradoContacto Administrativo: Cesar Ulises Trujillo Mart\u00ednezCorreo Electr\u00f3nico: admin@admindotsv.comTel\u00e9fono: 503 2284-8531Fecha Registro: 01-01-2013Fecha de vencimiento: 01-01-2026Fecha de Baja: 01-02-2026"
      }
    },
  },
};
