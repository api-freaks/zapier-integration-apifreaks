const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/merge",
    method: "POST",
    params: { "file_id": bundle.inputData["file_id"], "destroy": bundle.inputData["destroy"], "output": bundle.inputData["output"], "webhook_url": bundle.inputData["webhook_url"], "webhook_failure_notification": bundle.inputData["webhook_failure_notification"] },
  });
  return response.data;
};

export default {
  key: "post_pdf_merge",
  noun: "PDF",
  display: {
    label: "Combine multiple PDF files into one",
    description: "This API merges multiple PDF files into a single PDF, in the order they are provided",
  },
  operation: {
    inputFields: [
      {
        key: "file_id",
        label: "File Id",
        type: 'string',
        required: false,
        helpText: "An array of unique file IDs referencing PDF files previously uploaded to the API Freaks server. Use this parameter to merge existing files without re-uploading them. Provide multiple IDs to merge files in the specified order.",
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
        helpText: "Specifies the desired name for the resulting merged PDF file. If not provided, a default name will be assigned.",
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
