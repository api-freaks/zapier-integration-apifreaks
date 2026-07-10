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
    label: "Check PDF task status",
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
  },
};
