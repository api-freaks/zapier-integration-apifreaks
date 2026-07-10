const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/resource/upload",
    method: "POST",
  });
  return response.data;
};

export default {
  key: "post_pdf_resource_upload",
  noun: "PDF",
  display: {
    label: "Upload multiple PDFs and get file IDs",
    description: "This API uploads multiple PDF files to the API Freaks server and generates their unique file IDs.",
  },
  operation: {
    inputFields: [

    ],
    perform,
  },
};
