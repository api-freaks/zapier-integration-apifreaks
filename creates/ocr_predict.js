import FormData from 'form-data';

const perform = async (z, bundle) => {
  // All OCR options (url, model, page_range, zone, new_line) are QUERY parameters.
  // The request body is used ONLY to carry a binary file when one is uploaded.
  // Sending these options in a JSON body (the previous behaviour) triggered the
  // API's "Please provide data in required format in request body" error, so we
  // send them as query params and leave the body empty for the URL-based flow.
  const params = {
    "url": bundle.inputData["url"],
    "model": bundle.inputData["model"],
    "page_range": bundle.inputData["page_range"],
    "zone": bundle.inputData["zone"],
    "new_line": bundle.inputData["new_line"],
  };

  const file = bundle.inputData["file"];

  if (file) {
    // File upload flow: stream the file into a multipart/form-data body.
    const fileResponse = await z.request({ url: file, raw: true });
    const form = new FormData();
    form.append("file", fileResponse.body, {
      filename: bundle.inputData["file_name"] || "document",
    });

    const response = await z.request({
      url: "https://api.apifreaks.com/v1.0/ocr/predict",
      method: "POST",
      params,
      body: form,
      headers: form.getHeaders(),
    });
    return response.data;
  }

  // URL flow: no request body, options passed as query params.
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/ocr/predict",
    method: "POST",
    params,
  });
  return response.data;
};

export default {
  key: "ocr_predict",
  noun: "OCR",
  display: {
    label: "Extract Text From Images and PDFs Using OCR",
    description: "Perform Optical Character Recognition (OCR) on images, PDFs, or ZIP archives. Supports two models: `mini-ocr-v1` for CAPTCHA-optimized OCR and `ocr-v1` for general-purpose document text extraction. Supports zonal OCR to extract text from specific regions of an image.\n\n**Notes:**\n- Provide either a **Url** or a **File** (not both).\n- The `zone` parameter cannot be given with .pdf and .zip types as it can only be applied to a single image query.\n- The `page_range` parameter cannot be given in any other type except .pdf types.\n- PDFs containing images in them are allowed only for processing.\n- The `mini-ocr-v1` model doesn\u2019t support `page_range` (.pdf types) or `zone`.",
  },
  operation: {
    inputFields: [
      {
        key: "url",
        label: "Url",
        type: 'string',
        required: false,
        helpText: "URL of the image or PDF (required if `File` not provided).",
      },
      {
        key: "file",
        label: "File",
        type: 'file',
        required: false,
        helpText: "Image, PDF, or ZIP file for OCR (required if `Url` not provided). Supported formats: .png, .jpg, .jpeg, .bmp, .tiff, .gif, .pcx, .pdf, .zip.",
      },
      {
        key: "file_name",
        label: "File Name",
        type: 'string',
        required: false,
        helpText: "Optional file name (with extension, e.g. `document.pdf`) used when uploading a File. Helps the API detect the file type.",
      },
      {
        key: "model",
        label: "Model",
        type: 'string',
        required: true,
        helpText: "OCR model to use.",
        choices: ["mini-ocr-v1", "ocr-v1"],
      },
      {
        key: "page_range",
        label: "Page Range",
        type: 'string',
        required: false,
        helpText: "Specify page range for multi-page PDFs (e.g., '1,3,5-10' or 'allpages'). **Note:** This parameter can only be used with .pdf file types.",
      },
      {
        key: "zone",
        label: "Zone",
        type: 'string',
        required: false,
        helpText: "Define OCR zones using coordinates (top:left:height:width). Multiple zones can be defined using commas. Only available for model 'ocr-v1'. **Note:** This parameter cannot be used with .pdf and .zip file types.",
      },
      {
        key: "new_line",
        label: "New Line",
        type: 'integer',
        required: false,
        helpText: "Set to 1 to split output text into individual lines (default: 0).",
        choices: ["0", "1"],
      },
    ],
    perform,
    sample: {
      "OCRText": [
        "Extracted text from the image or document"
      ]
    },
  },
};