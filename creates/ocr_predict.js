const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/ocr/predict",
    method: "POST",
    params: { "url": bundle.inputData["url"], "model": bundle.inputData["model"], "page_range": bundle.inputData["page_range"], "zone": bundle.inputData["zone"], "new_line": bundle.inputData["new_line"] },
    body: { "url": bundle.inputData["url"], "model": bundle.inputData["model"], "page_range": bundle.inputData["page_range"], "zone": bundle.inputData["zone"], "new_line": bundle.inputData["new_line"] },
  });
  return response.data;
};

export default {
  key: "ocr_predict",
  noun: "OCR",
  display: {
    label: "Extract Text From Images and PDFs Using OCR",
    description: "Perform Optical Character Recognition (OCR) on images, PDFs, or ZIP archives. Supports two models: `mini-ocr-v1` for CAPTCHA-optimized OCR and `ocr-v1` for general-purpose document text extraction. Supports zonal OCR to extract text from specific regions of an image.\n\n**Notes:**\n- The `zone` query parameter cannot be given with .pdf and .zip types as it can only be applied to single image query.\n- The `page_range` query parameter cannot be given in any other type except .pdf types.\n- PDFs containing images in them are allowed only for processing.\n- The `mini-ocr-v1` model doesn\u2019t support the following query parameters:\n    - `page_range` (.pdf types)\n    - `zone`",
  },
  operation: {
    inputFields: [
      {
        key: "url",
        label: "Url",
        type: 'string',
        required: false,
        helpText: "URL of the image or PDF (required if `file` not provided)",
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
        helpText: "Define OCR zones using coordinates (top:left:height:width). Multiple zones can be defined using commas. Only available for model 'ocr-v1'. **Note:** This parameter cannot be used with .pdf and .zip file types as it can only be applied to single image",
      },
      {
        key: "new_line",
        label: "New Line",
        type: 'string',
        required: false,
        helpText: "Set to 1 to split output text into individual lines (default: 0)",
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
