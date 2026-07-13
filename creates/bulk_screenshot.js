const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/screenshot",
    method: "POST",
    body: { "urls": bundle.inputData["urls"] },
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
        type: 'string',
        required: true,
        helpText: "List of website URLs to capture screenshots of",
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
            "enable_caching": "example",
            "block_ads": true,
            "block_chat_widgets": "example",
            "extract_text": "example",
            "extract_html": "example",
            "destroy_screenshot": "example",
            "lazy_load": "example",
            "retina": "example",
            "dark_mode": "example",
            "block_tracking": "example",
            "enable_incognito": "example",
            "omit_background": "example",
            "thumbnail_width": "example",
            "adjust_top": "example",
            "wait_for_event": "example",
            "grayscale": "example",
            "delay": "example",
            "timeout": "example",
            "ttl": "2025-08-18T11:11:57.143Z",
            "clip": {
              "x": "example",
              "y": "example",
              "width": "example",
              "height": "example"
            },
            "css_url": "example",
            "css": "example",
            "js_url": "example",
            "js": "example",
            "block_js": "example",
            "block_stylesheets": "example",
            "block_images": "example",
            "block_media": "example",
            "block_font": "example",
            "block_text_track": "example",
            "block_xhr": "example",
            "block_fetch": "example",
            "block_event_source": "example",
            "block_web_socket": "example",
            "block_manifest": "example",
            "blur_selector": "example",
            "remove_selector": "example",
            "result_file_name": "example",
            "format": "example",
            "sizes": "example",
            "fail_on_error": true,
            "longitude": -97.822,
            "latitude": 37.751,
            "proxy": "example",
            "headers": "example",
            "cookies": "example",
            "scroll_to_element": "example",
            "selector": "example",
            "selector_to_click": "example",
            "click_recursion": 12.34,
            "user_agent": "example",
            "accept_languages": "example",
            "scroll_delay": 12.34,
            "custom_html": "example",
            "image_quality": 12.34,
            "extract_markdown": true,
            "get_image_urls": true,
            "video": true,
            "multiple_scrolling": "example",
            "scrolling_screenshot": "example"
          }
        }
      ]
    },
  },
};
