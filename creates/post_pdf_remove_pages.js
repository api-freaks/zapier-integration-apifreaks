const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/remove-pages",
    method: "POST",
    params: { "file_id": bundle.inputData["file_id"], "destroy": bundle.inputData["destroy"], "output": bundle.inputData["output"], "pages": bundle.inputData["pages"], "webhook_url": bundle.inputData["webhook_url"], "webhook_failure_notification": bundle.inputData["webhook_failure_notification"] },
  });
  return response.data;
};

export default {
  key: "post_pdf_remove_pages",
  noun: "PDF",
  display: {
    label: "Delete Specific Pages From a PDF",
    description: "This API removes a selection or range of pages from a PDF file.",
  },
  operation: {
    inputFields: [
      {
        key: "file_id",
        dynamic: "pdf_file_list.id.name",
        label: "File Id",
        type: 'string',
        required: false,
        helpText: "The unique identifier of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file directly.",
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
        helpText: "The desired name for the output PDF file after pages have been removed. If not provided, a default name will be assigned.",
      },
      {
        key: "pages",
        label: "Pages",
        type: 'string',
        required: true,
        helpText: "Specifies which pages to remove from the PDF. Accepts individual page numbers (e.g., '1,7') and/or ascending page ranges (e.g., '3-5'). Use commas to separate entries and hyphens for ranges. Reverse ranges (e.g., '5-3') are not allowed. Alternatively",
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
