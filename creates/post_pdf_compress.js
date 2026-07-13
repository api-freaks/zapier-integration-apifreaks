const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/compress",
    method: "POST",
    params: { "file_id": bundle.inputData["file_id"], "output": bundle.inputData["output"], "compression_level": bundle.inputData["compression_level"], "destroy": bundle.inputData["destroy"], "webhook_url": bundle.inputData["webhook_url"], "webhook_failure_notification": bundle.inputData["webhook_failure_notification"] },
  });
  return response.data;
};

export default {
  key: "post_pdf_compress",
  noun: "PDF",
  display: {
    label: "Compress a PDF File",
    description: "This API compresses a given PDF file to reduce its file size.",
  },
  operation: {
    inputFields: [
      {
        key: "file_id",
        dynamic: "pdf_file_list.id.name",
        label: "File Id",
        type: 'string',
        required: false,
        helpText: "The unique ID of a PDF file already uploaded to the API Freaks server. Use this as an alternative to uploading a new file.",
      },
      {
        key: "output",
        label: "Output",
        type: 'string',
        required: false,
        helpText: "Name of the output PDF.",
      },
      {
        key: "compression_level",
        label: "Compression Level",
        type: 'string',
        required: true,
        helpText: "Controls how aggressively the PDF is compressed. Lower levels preserve more quality, while higher levels reduce file size more.",
        choices: ["low", "balanced", "high", "extreme"],
      },
      {
        key: "destroy",
        label: "Destroy",
        type: 'string',
        required: false,
        helpText: "If set to true, the input file(s) will be deleted from the server immediately after the output is generated.",
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
