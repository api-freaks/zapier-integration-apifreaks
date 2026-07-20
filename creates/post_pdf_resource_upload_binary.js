const perform = async (z, bundle) => {
  const file = bundle.inputData["file"];
  if (!file) {
    throw new z.errors.Error(
      "Please provide a PDF file to upload.",
      "MissingFile",
      400
    );
  }

  // Download the file Zapier gives us (as a URL) and re-send it as a raw
  // binary body. This endpoint expects Content-Type: application/octet-stream
  // and the file name in the "file_name" query parameter.
  const fileResponse = await z.request({ url: file, raw: true });
  const buffer = await fileResponse.buffer();

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/resource/upload-binary",
    method: "POST",
    params: { "file_name": bundle.inputData["file_name"] },
    headers: { "Content-Type": "application/octet-stream" },
    body: buffer,
  });
  return response.data;
};

export default {
  key: "post_pdf_resource_upload_binary",
  noun: "PDF",
  display: {
    label: "Upload a PDF in Binary Format",
    description: "This API uploads PDF files to the API Freaks server in binary format.",
  },
  operation: {
    inputFields: [
      {
        key: "file",
        label: "File",
        type: 'file',
        required: true,
        helpText: "The PDF file to upload. Map a file from a previous step.",
      },
      {
        key: "file_name",
        label: "File Name",
        type: 'string',
        required: true,
        helpText: "The desired name for the uploaded PDF file. This name will be used for storage on the server. **NOTE**: Please ensure file_name has extension `.pdf`.",
      },
    ],
    perform,
    sample: {
      "fileName": "document.pdf",
      "fileId": "a1b2c3d4-0000-0000-0000-000000000000"
    },
  },
};