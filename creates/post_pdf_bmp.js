const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/bmp",
    method: "POST",
    params: { "file_id": bundle.inputData["file_id"], "destroy": bundle.inputData["destroy"], "output": bundle.inputData["output"], "pages": bundle.inputData["pages"], "resolution": bundle.inputData["resolution"], "image_smoothing": bundle.inputData["image_smoothing"], "profile": bundle.inputData["profile"], "webhook_url": bundle.inputData["webhook_url"], "webhook_failure_notification": bundle.inputData["webhook_failure_notification"] },
  });
  return response.data;
};

export default {
  key: "post_pdf_bmp",
  noun: "PDF",
  display: {
    label: "Convert PDF to BMP",
    description: "Converts a PDF file to a BMP image.",
  },
  operation: {
    inputFields: [
      {
        key: "file_id",
        dynamic: "pdf_file_list.id.name",
        label: "File Id",
        type: 'string',
        required: false,
        helpText: "The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.",
      },
      {
        key: "destroy",
        label: "Destroy",
        type: 'string',
        required: false,
        helpText: "If set to `true`, the input file(s) will be permanently deleted from the server immediately after the output PDF is generated.",
      },
      {
        key: "output",
        label: "Output",
        type: 'string',
        required: false,
        helpText: "The desired name for the output unrestricted PDF file. If not provided, a default name will be assigned.",
      },
      {
        key: "pages",
        label: "Pages",
        type: 'string',
        required: false,
        helpText: "Specifies the pages or ranges at which to split the PDF. Accepts individual page numbers (e.g., '1') and/or page ranges (e.g., '4-2', 'last'). Ranges can be ascending or descending. Use commas to separate entries and hyphens for ranges. Alternatively",
      },
      {
        key: "resolution",
        label: "Resolution",
        type: 'string',
        required: false,
        helpText: "Specifies the resolution (in DPI) for the output images. Acceptable Range is from 20 to 1200.",
      },
      {
        key: "image_smoothing",
        label: "Image Smoothing",
        type: 'string',
        required: false,
        helpText: "Determines the smoothing options to apply during image conversion. Valid values are 'none', 'all' or a combination of 'text', 'line', and 'image' (comma-separated).If not provided, no smoothing will be applied.",
      },
      {
        key: "profile",
        label: "Profile",
        type: 'string',
        required: false,
        helpText: "Specifies the color profile for the output PNG images. Acceptable values: bw (1-bit black & white, smallest size, no grayscale or color), gray (8-bit grayscale), rgb (24-bit RGB color, default), rgba (32-bit RGB color with alpha channel for transpare",
        choices: ["bw", "gray", "rgb", "4-bit", "8-bit"],
      },
      {
        key: "webhook_url",
        label: "Webhook Url",
        type: 'string',
        required: false,
        helpText: "The URL to which the webhook notification will be sent after the task is completed.",
      },
      {
        key: "webhook_failure_notification",
        label: "Webhook Failure Notification",
        type: 'string',
        required: false,
        helpText: "If true, a notification will also be sent by email in case the webhook request fails all the retries.  The email notification will be sent to the requesting user or their organization\u2019s admin if part of one.",
      },
    ],
    perform,
    sample: {
      "taskId": "example",
      "inputIds": [
        "example"
      ]
    },
  },
};
