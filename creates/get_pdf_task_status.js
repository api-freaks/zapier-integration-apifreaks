const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/task-status",
    params: { "task_id": bundle.inputData["task_id"] },
  });
  return response.data;
};

export default {
  key: "get_pdf_task_status",
  noun: "PDF",
  display: {
    label: "Check PDF Task Status",
    description: "This API checks the status of a previously initiated PDF processing task using its unique task ID.",
  },
  operation: {
    inputFields: [
      {
        key: "task_id",
        label: "Task Id",
        type: 'string',
        required: true,
        helpText: "The unique ID of the PDF processing task for which the status is requested.",
      },
    ],
    perform,
    sample: {
      "taskId": "example",
      "status": "active",
      "createdAt": "2025-08-18T11:11:57.143Z",
      "zipOutputUrl": "example",
      "zipFileId": "example",
      "outputUrls": [
        "example"
      ],
      "outputIds": [
        "example"
      ],
      "inputIds": [
        "example"
      ],
      "error": "",
      "message": "Success",
      "expiresAt": "2025-08-18T11:11:57.143Z"
    },
  },
};
