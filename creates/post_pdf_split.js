const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/split",
    method: "POST",
    params: { "file_id": bundle.inputData["file_id"], "destroy": bundle.inputData["destroy"], "output": bundle.inputData["output"], "pages": bundle.inputData["pages"], "webhook_url": bundle.inputData["webhook_url"], "webhook_failure_notification": bundle.inputData["webhook_failure_notification"] },
  });
  return response.data;
};

export default {
  key: "post_pdf_split",
  noun: "PDF",
  display: {
    label: "Split a PDF into smaller files",
    description: "This API splits a PDF into multiple parts based on specified page numbers or ranges.",
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
        helpText: "The desired base name for the output PDF files after splitting. If not provided, a default naming convention will be used.",
      },
      {
        key: "pages",
        label: "Pages",
        type: 'string',
        required: false,
        helpText: "Defines the page numbers or ranges where the PDF should be split. Provide individual pages and/or ranges in any order (for example: \"1-4,9-5,16-last\"). Separate entries with commas and use hyphens for ranges.  Special keywords (use alone):  \u2022 `even` ",
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
