import packageJson from './package.json' with { type: 'json' };
import zapier from 'zapier-platform-core';

import authentication, { includeApiKey } from './authentication.js';
import { removeEmptyParams } from './middleware.js';
import t_pdf_file_list from './triggers/pdf_file_list.js';
import c_get_latest_commodity_prices from './creates/get_latest_commodity_prices.js';
import c_get_historical_commodity_prices from './creates/get_historical_commodity_prices.js';
import c_get_commodity_time_series from './creates/get_commodity_time_series.js';
import c_get_commodity_fluctuation from './creates/get_commodity_fluctuation.js';
import c_get_commodity_symbols from './creates/get_commodity_symbols.js';
import c_get_latest_exchange_rates from './creates/get_latest_exchange_rates.js';
import c_get_historical_exchange_rates from './creates/get_historical_exchange_rates.js';
import c_convert_latest from './creates/convert_latest.js';
import c_convert_historical from './creates/convert_historical.js';
import c_get_time_series from './creates/get_time_series.js';
import c_get_fluctuation from './creates/get_fluctuation.js';
import c_convert_by_ip from './creates/convert_by_ip.js';
import c_get_supported_currencies from './creates/get_supported_currencies.js';
import c_get_currency_symbols from './creates/get_currency_symbols.js';
import c_get_historical_data_limits from './creates/get_historical_data_limits.js';
import c_dns_lookup from './creates/dns_lookup.js';
import c_bulk_dns_lookup from './creates/bulk_dns_lookup.js';
import c_dns_history_lookup from './creates/dns_history_lookup.js';
import c_reverse_dns_lookup from './creates/reverse_dns_lookup.js';
import c_get_domain_availability from './creates/get_domain_availability.js';
import c_post_domain_availability from './creates/post_domain_availability.js';
import c_get_domain_availability_suggestions from './creates/get_domain_availability_suggestions.js';
import c_get_subdomains_lookup from './creates/get_subdomains_lookup.js';
import c_post_email_validation_single from './creates/post_email_validation_single.js';
import c_post_email_validation_bulk from './creates/post_email_validation_bulk.js';
import c_get_credits_usage_info from './creates/get_credits_usage_info.js';
import c_get_geocoder_search from './creates/get_geocoder_search.js';
import c_get_geocoder_reverse from './creates/get_geocoder_reverse.js';
import c_get_countries from './creates/get_countries.js';
import c_get_country_details from './creates/get_country_details.js';
import c_get_geo_regions from './creates/get_geo_regions.js';
import c_get_subregions_by_region from './creates/get_subregions_by_region.js';
import c_get_admin_units from './creates/get_admin_units.js';
import c_get_geo_admin_units from './creates/get_geo_admin_units.js';
import c_get_geo_admin_unit_details from './creates/get_geo_admin_unit_details.js';
import c_get_geo_cities from './creates/get_geo_cities.js';
import c_get_flags_supported from './creates/get_flags_supported.js';
import c_get_flags from './creates/get_flags.js';
import c_get_geolocation_lookup from './creates/get_geolocation_lookup.js';
import c_bulk_ip_lookup from './creates/bulk_ip_lookup.js';
import c_get_ip_security from './creates/get_ip_security.js';
import c_bulk_ip_security_lookup from './creates/bulk_ip_security_lookup.js';
import c_ocr_predict from './creates/ocr_predict.js';
import c_get_geolocation_astronomy from './creates/get_geolocation_astronomy.js';
import c_post_pdf_merge from './creates/post_pdf_merge.js';
import c_post_pdf_remove_pages from './creates/post_pdf_remove_pages.js';
import c_post_pdf_split from './creates/post_pdf_split.js';
import c_post_pdf_rotate from './creates/post_pdf_rotate.js';
import c_post_pdf_compress from './creates/post_pdf_compress.js';
import c_post_pdf_extract_pages from './creates/post_pdf_extract_pages.js';
import c_post_pdf_linearize from './creates/post_pdf_linearize.js';
import c_post_pdf_png from './creates/post_pdf_png.js';
import c_post_pdf_jpg from './creates/post_pdf_jpg.js';
import c_post_pdf_tif from './creates/post_pdf_tif.js';
import c_post_pdf_bmp from './creates/post_pdf_bmp.js';
import c_post_pdf_gif from './creates/post_pdf_gif.js';
import c_post_pdf_resource_upload from './creates/post_pdf_resource_upload.js';
import c_post_pdf_resource_upload_binary from './creates/post_pdf_resource_upload_binary.js';
import c_get_pdf_resource_download from './creates/get_pdf_resource_download.js';
import c_get_pdf_task_status from './creates/get_pdf_task_status.js';
import c_get_pdf_file_status from './creates/get_pdf_file_status.js';
import c_get_pdf_files from './creates/get_pdf_files.js';
import c_post_phone_validation from './creates/post_phone_validation.js';
import c_post_phone_validation_bulk from './creates/post_phone_validation_bulk.js';
import c_perform_scraping from './creates/perform_scraping.js';
import c_website_screenshot from './creates/website_screenshot.js';
import c_bulk_screenshot from './creates/bulk_screenshot.js';
import c_ssl_certificate_lookup from './creates/ssl_certificate_lookup.js';
import c_ssl_certificate_chain_lookup from './creates/ssl_certificate_chain_lookup.js';
import c_get_timezone from './creates/get_timezone.js';
import c_convert_timezone from './creates/convert_timezone.js';
import c_get_user_agent_lookup from './creates/get_user_agent_lookup.js';
import c_post_user_agent_lookup from './creates/post_user_agent_lookup.js';
import c_get_vat_supported_countries from './creates/get_vat_supported_countries.js';
import c_get_vat_rates_ip_address from './creates/get_vat_rates_ip_address.js';
import c_get_vat_rates_country from './creates/get_vat_rates_country.js';
import c_post_vat_rates_country from './creates/post_vat_rates_country.js';
import c_get_vat_validation from './creates/get_vat_validation.js';
import c_get_iban_validation from './creates/get_iban_validation.js';
import c_get_swift_code_finder from './creates/get_swift_code_finder.js';
import c_get_swift_code_lookup from './creates/get_swift_code_lookup.js';
import c_get_current from './creates/get_current.js';
import c_post_current from './creates/post_current.js';
import c_get_forecast from './creates/get_forecast.js';
import c_get_historical from './creates/get_historical.js';
import c_get_time_series_2 from './creates/get_time_series_2.js';
import c_get_marine from './creates/get_marine.js';
import c_get_air_quality from './creates/get_air_quality.js';
import c_get_flood from './creates/get_flood.js';
import c_whois_lookup from './creates/whois_lookup.js';
import c_post_domain_whois_live from './creates/post_domain_whois_live.js';
import c_get_ip_whois_live from './creates/get_ip_whois_live.js';
import c_get_asn_whois_live from './creates/get_asn_whois_live.js';
import c_whois_history_lookup from './creates/whois_history_lookup.js';
import c_get_domain_whois_reverse from './creates/get_domain_whois_reverse.js';
import c_lookup_zip_codes from './creates/lookup_zip_codes.js';
import c_bulklookup_zip_codes_post from './creates/bulklookup_zip_codes_post.js';
import c_search_zip_by_city from './creates/search_zip_by_city.js';
import c_search_zip_by_region from './creates/search_zip_by_region.js';
import c_search_zip_by_radius from './creates/search_zip_by_radius.js';
import c_get_zipcode_distance from './creates/get_zipcode_distance.js';
import c_get_zipcode_distance_match from './creates/get_zipcode_distance_match.js';
import c_get_timezone_v2 from './creates/get_timezone_v2.js';
import c_get_geolocation_astronomy_v2 from './creates/get_geolocation_astronomy_v2.js';
import c_get_geolocation_lookup_v2 from './creates/get_geolocation_lookup_v2.js';
import c_bulk_ip_lookup_v2 from './creates/bulk_ip_lookup_v2.js';
import c_whois_lookup_v2 from './creates/whois_lookup_v2.js';
import c_post_domain_whois_live_v2 from './creates/post_domain_whois_live_v2.js';
import c_grammar_detect from './creates/grammar_detect.js';
import c_grammar_correct from './creates/grammar_correct.js';
import c_weak_words_detect from './creates/weak_words_detect.js';
import c_readability_score from './creates/readability_score.js';

export default {
  version: packageJson.version,
  platformVersion: zapier.version,
  flags: { skipHttpPatch: true, cleanInputData: false },
  authentication,
  beforeRequest: [includeApiKey, removeEmptyParams],
  

  triggers: {
    [t_pdf_file_list.key]: t_pdf_file_list,
  },
  searches: {},
  creates: {
    [c_get_latest_commodity_prices.key]: c_get_latest_commodity_prices,
    [c_get_historical_commodity_prices.key]: c_get_historical_commodity_prices,
    [c_get_commodity_time_series.key]: c_get_commodity_time_series,
    [c_get_commodity_fluctuation.key]: c_get_commodity_fluctuation,
    [c_get_commodity_symbols.key]: c_get_commodity_symbols,
    [c_get_latest_exchange_rates.key]: c_get_latest_exchange_rates,
    [c_get_historical_exchange_rates.key]: c_get_historical_exchange_rates,
    [c_convert_latest.key]: c_convert_latest,
    [c_convert_historical.key]: c_convert_historical,
    [c_get_time_series.key]: c_get_time_series,
    [c_get_fluctuation.key]: c_get_fluctuation,
    [c_convert_by_ip.key]: c_convert_by_ip,
    [c_get_supported_currencies.key]: c_get_supported_currencies,
    [c_get_currency_symbols.key]: c_get_currency_symbols,
    [c_get_historical_data_limits.key]: c_get_historical_data_limits,
    [c_dns_lookup.key]: c_dns_lookup,
    [c_bulk_dns_lookup.key]: c_bulk_dns_lookup,
    [c_dns_history_lookup.key]: c_dns_history_lookup,
    [c_reverse_dns_lookup.key]: c_reverse_dns_lookup,
    [c_get_domain_availability.key]: c_get_domain_availability,
    [c_post_domain_availability.key]: c_post_domain_availability,
    [c_get_domain_availability_suggestions.key]: c_get_domain_availability_suggestions,
    [c_get_subdomains_lookup.key]: c_get_subdomains_lookup,
    [c_post_email_validation_single.key]: c_post_email_validation_single,
    [c_post_email_validation_bulk.key]: c_post_email_validation_bulk,
    [c_get_credits_usage_info.key]: c_get_credits_usage_info,
    [c_get_geocoder_search.key]: c_get_geocoder_search,
    [c_get_geocoder_reverse.key]: c_get_geocoder_reverse,
    [c_get_countries.key]: c_get_countries,
    [c_get_country_details.key]: c_get_country_details,
    [c_get_geo_regions.key]: c_get_geo_regions,
    [c_get_subregions_by_region.key]: c_get_subregions_by_region,
    [c_get_admin_units.key]: c_get_admin_units,
    [c_get_geo_admin_units.key]: c_get_geo_admin_units,
    [c_get_geo_admin_unit_details.key]: c_get_geo_admin_unit_details,
    [c_get_geo_cities.key]: c_get_geo_cities,
    [c_get_flags_supported.key]: c_get_flags_supported,
    [c_get_flags.key]: c_get_flags,
    [c_get_geolocation_lookup.key]: c_get_geolocation_lookup,
    [c_bulk_ip_lookup.key]: c_bulk_ip_lookup,
    [c_get_ip_security.key]: c_get_ip_security,
    [c_bulk_ip_security_lookup.key]: c_bulk_ip_security_lookup,
    [c_ocr_predict.key]: c_ocr_predict,
    [c_get_geolocation_astronomy.key]: c_get_geolocation_astronomy,
    [c_post_pdf_merge.key]: c_post_pdf_merge,
    [c_post_pdf_remove_pages.key]: c_post_pdf_remove_pages,
    [c_post_pdf_split.key]: c_post_pdf_split,
    [c_post_pdf_rotate.key]: c_post_pdf_rotate,
    [c_post_pdf_compress.key]: c_post_pdf_compress,
    [c_post_pdf_extract_pages.key]: c_post_pdf_extract_pages,
    [c_post_pdf_linearize.key]: c_post_pdf_linearize,
    [c_post_pdf_png.key]: c_post_pdf_png,
    [c_post_pdf_jpg.key]: c_post_pdf_jpg,
    [c_post_pdf_tif.key]: c_post_pdf_tif,
    [c_post_pdf_bmp.key]: c_post_pdf_bmp,
    [c_post_pdf_gif.key]: c_post_pdf_gif,
    [c_post_pdf_resource_upload.key]: c_post_pdf_resource_upload,
    [c_post_pdf_resource_upload_binary.key]: c_post_pdf_resource_upload_binary,
    [c_get_pdf_resource_download.key]: c_get_pdf_resource_download,
    [c_get_pdf_task_status.key]: c_get_pdf_task_status,
    [c_get_pdf_file_status.key]: c_get_pdf_file_status,
    [c_get_pdf_files.key]: c_get_pdf_files,
    [c_post_phone_validation.key]: c_post_phone_validation,
    [c_post_phone_validation_bulk.key]: c_post_phone_validation_bulk,
    [c_perform_scraping.key]: c_perform_scraping,
    [c_website_screenshot.key]: c_website_screenshot,
    [c_bulk_screenshot.key]: c_bulk_screenshot,
    [c_ssl_certificate_lookup.key]: c_ssl_certificate_lookup,
    [c_ssl_certificate_chain_lookup.key]: c_ssl_certificate_chain_lookup,
    [c_get_timezone.key]: c_get_timezone,
    [c_convert_timezone.key]: c_convert_timezone,
    [c_get_user_agent_lookup.key]: c_get_user_agent_lookup,
    [c_post_user_agent_lookup.key]: c_post_user_agent_lookup,
    [c_get_vat_supported_countries.key]: c_get_vat_supported_countries,
    [c_get_vat_rates_ip_address.key]: c_get_vat_rates_ip_address,
    [c_get_vat_rates_country.key]: c_get_vat_rates_country,
    [c_post_vat_rates_country.key]: c_post_vat_rates_country,
    [c_get_vat_validation.key]: c_get_vat_validation,
    [c_get_iban_validation.key]: c_get_iban_validation,
    [c_get_swift_code_finder.key]: c_get_swift_code_finder,
    [c_get_swift_code_lookup.key]: c_get_swift_code_lookup,
    [c_get_current.key]: c_get_current,
    [c_post_current.key]: c_post_current,
    [c_get_forecast.key]: c_get_forecast,
    [c_get_historical.key]: c_get_historical,
    [c_get_time_series_2.key]: c_get_time_series_2,
    [c_get_marine.key]: c_get_marine,
    [c_get_air_quality.key]: c_get_air_quality,
    [c_get_flood.key]: c_get_flood,
    [c_whois_lookup.key]: c_whois_lookup,
    [c_post_domain_whois_live.key]: c_post_domain_whois_live,
    [c_get_ip_whois_live.key]: c_get_ip_whois_live,
    [c_get_asn_whois_live.key]: c_get_asn_whois_live,
    [c_whois_history_lookup.key]: c_whois_history_lookup,
    [c_get_domain_whois_reverse.key]: c_get_domain_whois_reverse,
    [c_lookup_zip_codes.key]: c_lookup_zip_codes,
    [c_bulklookup_zip_codes_post.key]: c_bulklookup_zip_codes_post,
    [c_search_zip_by_city.key]: c_search_zip_by_city,
    [c_search_zip_by_region.key]: c_search_zip_by_region,
    [c_search_zip_by_radius.key]: c_search_zip_by_radius,
    [c_get_zipcode_distance.key]: c_get_zipcode_distance,
    [c_get_zipcode_distance_match.key]: c_get_zipcode_distance_match,
    [c_get_timezone_v2.key]: c_get_timezone_v2,
    [c_get_geolocation_astronomy_v2.key]: c_get_geolocation_astronomy_v2,
    [c_get_geolocation_lookup_v2.key]: c_get_geolocation_lookup_v2,
    [c_bulk_ip_lookup_v2.key]: c_bulk_ip_lookup_v2,
    [c_whois_lookup_v2.key]: c_whois_lookup_v2,
    [c_post_domain_whois_live_v2.key]: c_post_domain_whois_live_v2,
    [c_grammar_detect.key]: c_grammar_detect,
    [c_grammar_correct.key]: c_grammar_correct,
    [c_weak_words_detect.key]: c_weak_words_detect,
    [c_readability_score.key]: c_readability_score,
  },
  resources: {},
};
