const perform = async (z, bundle) => {
  const resourceId = bundle.inputData["resource_id"];
  return {
    id: resourceId,
    resource_id: resourceId,
    file: `https://api.apifreaks.com/v1.0/pdf/resource/download?resource_id=${resourceId}&apiKey=${bundle.authData.apiKey}`,
    file_name: `${resourceId}.pdf`,
    file_type: "pdf",
  };
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
        type: "string",
        required: true,
        dynamic: "pdf_file_list.id.name",
        helpText: "The unique identifier of the file or ZIP archive to download. Pick an uploaded/generated file, or map a ZIP archive ID from a previous PDF task step.",
      },
    ],
    perform,
    sample: {
      id: "a1b2c3d4-0000-0000-0000-000000000000",
      resource_id: "a1b2c3d4-0000-0000-0000-000000000000",
      file: "https://api.apifreaks.com/v1.0/pdf/resource/download?resource_id=a1b2c3d4",
      file_name: "document.pdf",
      file_type: "pdf",
    },
  },
};