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
    label: "Download PDF Resource",
    description: "This API downloads PDF files or ZIP archives from the server using their unique resource ID.",
  },
  operation: {
    inputFields: [
      {
        key: "resource_id",
        label: "Resource Id",
        type: 'string',
        required: true,
        dynamic: "pdf_file_list.id.name",
        helpText: "The unique identifier of the file or ZIP archive to download. Pick an uploaded/generated file, or map a ZIP archive ID from a previous PDF task step.",
      },
    ],
    perform,
    sample: {
      "file": "https://api.apifreaks.com/v1.0/pdf/resource/download?resource_id=a1b2c3d4",
      "resource_id": "a1b2c3d4-0000-0000-0000-000000000000",
      "file_name": "document.pdf",
      "file_type": "pdf"
    },
  },
};