const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/file-status",
    params: { "file_id": bundle.inputData["file_id"] },
  });
  return response.data;
};

export default {
  key: "get_pdf_file_status",
  noun: "PDF",
  display: {
    label: "Check file status",
    description: "This API checks the status of a PDF file using its unique file ID, providing information about its creation and potential deletion time.",
  },
  operation: {
    inputFields: [
      {
        key: "file_id",
        label: "File Id",
        type: 'string',
        required: true,
        helpText: "The unique ID of the file whose status is requested.",
      },
    ],
    perform,
  },
};
