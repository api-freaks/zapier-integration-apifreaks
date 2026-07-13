const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/pdf/files",
  });
  const data = response.data;
  // The endpoint may return an array, an object wrapping a list, or a single object.
  let files = [];
  if (Array.isArray(data)) {
    files = data;
  } else if (data && Array.isArray(data.files)) {
    files = data.files;
  } else if (data && Array.isArray(data.data)) {
    files = data.data;
  } else if (data && (data.fileId || data.file_id)) {
    files = [data];
  }
  return files.map((f) => {
    const id = f.fileId || f.file_id || f.id;
    const fileName = f.fileName || f.file_name || id;
    return { id, name: fileName };
  });
};

export default {
  key: "pdf_file_list",
  noun: "PDF File",
  display: {
    label: "List PDF Files",
    description:
      "Internal trigger that lists your uploaded PDF files to power file pickers. Hidden from the Zap editor.",
    hidden: true,
  },
  operation: {
    perform,
    sample: {
      id: "a1b2c3d4-0000-0000-0000-000000000000",
      name: "document.pdf",
    },
  },
};
