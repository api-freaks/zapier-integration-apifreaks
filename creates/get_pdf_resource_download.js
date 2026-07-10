const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/resource/download",
    params: { "resource_id": bundle.inputData["resource_id"] },
  });
  return response.data;
};

export default {
  key: "get_pdf_resource_download",
  noun: "PDF",
  display: {
    label: "Download PDF resource",
    description: "This API downloads PDF files or ZIP archives from the server using their unique resource ID.",
  },
  operation: {
    inputFields: [
      {
        key: "resource_id",
        label: "Resource Id",
        type: 'string',
        required: true,
        helpText: "The unique identifier of the file or ZIP archive to download.",
      },
    ],
    perform,
  },
};
