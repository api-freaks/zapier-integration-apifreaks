const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/resource/upload-binary",
    method: "POST",
    params: { "file_name": bundle.inputData["file_name"] },
  });
  return response.data;
};

export default {
  key: "post_pdf_resource_upload_binary",
  noun: "PDF",
  display: {
    label: "Upload a PDF in binary format",
    description: "This API uploads PDF files to the API Freaks server in binary format.",
  },
  operation: {
    inputFields: [
      {
        key: "file_name",
        label: "File Name",
        type: 'string',
        required: true,
        helpText: "The desired name for the uploaded PDF file. This name will be used for storage on the server.    **NOTE**: Please ensure file_name has extension `.pdf`.",
      },
    ],
    perform,
  },
};
