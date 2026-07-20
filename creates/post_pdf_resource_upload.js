import FormData from 'form-data';

const perform = async (z, bundle) => {
  // Zapier passes file fields as URLs. Support one or more uploaded PDFs.
  const files = bundle.inputData["files"] || [];
  if (!files.length) {
    throw new z.errors.Error(
      "Please provide at least one PDF file to upload.",
      "MissingFile",
      400
    );
  }

  const form = new FormData();
  for (let i = 0; i < files.length; i++) {
    const fileResponse = await z.request({ url: files[i], raw: true });
    // The API expects each file under the "file" form field (array of files).
    form.append("file", fileResponse.body, {
      filename: `document_${i + 1}.pdf`,
      contentType: "application/pdf",
    });
  }

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/resource/upload",
    method: "POST",
    body: form,
    headers: form.getHeaders(),
  });
  return response.data;
};

export default {
  key: "post_pdf_resource_upload",
  noun: "PDF",
  display: {
    label: "Upload Multiple PDFs and Get File IDs",
    description: "This API uploads multiple PDF files to the API Freaks server and generates their unique file IDs.",
  },
  operation: {
    inputFields: [
      {
        key: "files",
        label: "PDF Files",
        type: 'file',
        list: true,
        required: true,
        helpText: "One or more PDF files to upload. Map a file from a previous step, or add multiple files.",
      },
    ],
    perform,
    sample: {
      "files": [
        {
          "fileName": "document.pdf",
          "fileId": "a1b2c3d4-0000-0000-0000-000000000000"
        }
      ]
    },
  },
};