const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/extract-pages",
    method: "POST",
    params: { "file_id": bundle.inputData["file_id"], "destroy": bundle.inputData["destroy"], "output": bundle.inputData["output"], "pages": bundle.inputData["pages"], "separated": bundle.inputData["separated"], "webhook_url": bundle.inputData["webhook_url"], "webhook_failure_notification": bundle.inputData["webhook_failure_notification"] },
  });
  return response.data;
};

export default {
  key: "post_pdf_extract_pages",
  noun: "PDF",
  display: {
    label: "Extract pages from a PDF",
    description: "This API extracts specific pages or page ranges from a PDF file and returns them as a new PDF.",
  },
  operation: {
    inputFields: [
      {
        key: "file_id",
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
        helpText: "The desired name for the output PDF file after pages have been extracted. If not provided, a default name will be assigned.",
      },
      {
        key: "pages",
        label: "Pages",
        type: 'string',
        required: true,
        helpText: "Specifies which pages to extract from the PDF. You can provide individual page numbers (e.g., '2') and/or page ranges in any order, including descending (e.g., '9-5', '16-last'). Use commas to separate entries and hyphens for ranges. You may alternat",
      },
      {
        key: "separated",
        label: "Separated",
        type: 'string',
        required: false,
        helpText: "If set to `true`, each of the specified pages will be extracted and returned as a separate PDF file.",
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
  },
};
