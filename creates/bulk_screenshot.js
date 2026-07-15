const perform = async (z, bundle) => {
  // Accept comma/newline-separated URLs and send them as an array.
  const urls = String(bundle.inputData["urls"] || "")
    .split(/[\n,]+/)
    .map((u) => u.trim())
    .filter(Boolean)
    .map((u) => (/^https?:\/\//i.test(u) ? u : `https://${u}`));

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/screenshot",
    method: "POST",
    body: { urls },
  });
  return response.data;
};

export default {
  key: "bulk_screenshot",
  noun: "Screenshot",
  display: {
    label: "Capture Screenshots of Multiple Websites",
    description: "Our Bulk Screenshot API allows you to capture screenshots of multiple webpages simultaneously, saving you time and effort. Instead of manually capturing each page one by one, you can batch process URLs and receive high-quality screenshots in the format you choose.\n Maximum `50 URLs` per request.",
  },
  operation: {
    inputFields: [
      {
        key: "urls",
        label: "Urls",
        type: "string",
        required: true,
        list: true,
        helpText: "Website URLs to capture (max 50). Add as separate line items, or paste a comma/newline-separated list. Include https:// (added automatically if missing).",
      },
    ],
    perform,
    sample: {
      "status": "success",
      "meta_data": {
        "total_urls": 123,
        "successful_urls": 123,
        "failed_urls": 123
      },
      "results": [
        {
          "status": "active",
          "error_message": "example",
          "url": {
            "screenshot": "https://example.com",
            "extracted_html": "https://example.com",
            "extracted_text": "https://example.com",
            "url": "https://example.com",
            "created_at": "2025-08-18T11:11:57.143Z",
            "file_type": "example",
            "width": "example",
            "height": "example",
            "full_page": "example",
            "fresh": "example",
            "no_cookie_banners": true,
            "block_ads": true,
            "ttl": "2025-08-18T11:11:57.143Z",
            "longitude": -97.822,
            "latitude": 37.751,
            "fail_on_error": true,
            "click_recursion": 12.34,
            "scroll_delay": 12.34,
            "image_quality": 12.34,
            "extract_markdown": true,
            "get_image_urls": true,
            "video": true
          }
        }
      ]
    },
  },
};