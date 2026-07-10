# APIFreaks for Zapier

Connect **APIFreaks** to 8,000+ apps with Zapier and pull real-time data — IP geolocation, domain & DNS intelligence, email/phone validation, currency and commodity rates, weather, geocoding, and more — straight into your automated workflows. No code required.

---

## What you can do

With the APIFreaks integration you can add data-enrichment steps to any Zap. For example:

- Look up the **geolocation** of an IP address the moment it hits your app.
- **Validate an email or phone number** before adding a lead to your CRM.
- Pull **WHOIS / DNS** details for a domain and log them to a spreadsheet.
- Fetch **live currency exchange rates** or **commodity prices** on a schedule.
- **Geocode** an address into coordinates for mapping or routing.
- Check **VAT / IBAN / SWIFT** details during customer onboarding.

Every APIFreaks endpoint appears as a Zapier **action** — a step that runs inside your Zap and returns data you can use in later steps.

---

## Before you start

You'll need two things:

1. **A Zapier account** — free or paid. Sign up at [zapier.com](https://zapier.com).
2. **An APIFreaks API key** — this authorizes your requests and tracks usage.

### Getting your APIFreaks API key

1. Sign in to your dashboard at [apifreaks.com](https://apifreaks.com).
2. Open the **API Keys** (or **Dashboard**) section.
3. Copy your key. Keep it private — anyone with it can use your credits.

> New to APIFreaks? Create a free account first; your key and starter credits are generated automatically.

---

## Accessing the integration in Zapier

**While the integration is in invite-only / beta:**
Open the invite link shared by APIFreaks (or request one from [support@apifreaks.com](mailto:support@apifreaks.com)). Accepting the invite adds APIFreaks to the app list in your Zap editor.

**Once the integration is public:**
Search **"APIFreaks"** directly in the Zap editor's app picker, or find it in the [Zapier App Directory](https://zapier.com/apps).

---

## Connecting your APIFreaks account

You only need to do this once; the connection is then reusable across all your Zaps.

1. In the [Zap editor](https://zapier.com/app/zaps), add a step and search for **APIFreaks**.
2. Pick any APIFreaks action (for example, **Find IP Geolocation**).
3. On the **Account** step, click **Sign in** / **Connect a new account**.
4. Paste your **API key** into the field and click **Yes, Continue**.
5. Zapier verifies the key. If it's valid, the connection is saved and ready to use.

If the key is rejected, double-check you copied it exactly, with no extra spaces, and that your APIFreaks account is active with available credits.

---

## Using an APIFreaks action in a Zap

1. **Start with a trigger** — the event that kicks off your Zap (a new form entry, a schedule, a new CRM contact, etc.).
2. **Add an action step** and select **APIFreaks**.
3. **Choose the action** you need (e.g. *Validate Email*, *Domain WHOIS Lookup*).
4. **Fill in the inputs.** You can type a value directly or map a field from an earlier step (e.g. use the email captured by your trigger).
5. **Test the step.** Zapier runs the action live and shows the returned data.
6. **Use the results downstream** — map any field APIFreaks returns (country, validity, rate, coordinates, etc.) into later steps like Google Sheets, Slack, or your CRM.
7. **Turn the Zap on.** It now runs automatically.

---

## Available actions

APIFreaks exposes a wide range of lookup actions, grouped by category:

- **IP Intelligence** — IP geolocation, IP security/threat data, astronomy by IP, bulk IP lookup.
- **Domains & DNS** — WHOIS lookup, WHOIS history, reverse WHOIS, DNS lookup, reverse DNS, subdomains, domain availability & suggestions, SSL certificate details.
- **Validation** — email validation, phone number validation, VAT number validation, IBAN validation, SWIFT/BIC lookup.
- **Location & Geo** — geocoding (address → coordinates), reverse geocoding, countries, regions, cities, administrative units, ZIP/postal code lookup and distance.
- **Finance** — live & historical currency exchange rates, currency conversion, supported currencies, commodity prices and time series.
- **Weather** — current conditions, forecast, historical, marine, air quality, and flood data.
- **Time** — timezone lookup and time conversion.
- **Readability & Text** — grammar detection and correction, weak-word detection, readability scoring.
- **Utilities** — user-agent parsing, web page data extraction.

> The exact action names appear in the Zap editor when you select APIFreaks. Availability may vary as new endpoints are added.

---

## Usage & credits

Each action call consumes credits from your APIFreaks plan. Some options (such as extended security or threat data on the geolocation action) may cost additional credits. Monitor your usage and plan in the [APIFreaks dashboard](https://apifreaks.com), and top up or upgrade if you hit your limit — a depleted balance will cause actions to fail.

---

## Troubleshooting

- **"Please provide apiKey" / connection fails** — your API key wasn't accepted. Reconnect your account and paste the key again, with no leading/trailing spaces.
- **401 / invalid key** — the key is wrong or the account is inactive. Copy a fresh key from your dashboard.
- **Action returns an error about credits** — your balance is exhausted; add credits or upgrade your plan.
- **A field isn't showing up to map** — run **Test step** once so Zapier pulls a live sample of the output fields.

---

## Support

- **APIFreaks help & docs:** [apifreaks.com](https://apifreaks.com)
- **APIFreaks support:** [support@apifreaks.com](mailto:support@apifreaks.com)
- **Zapier help:** [help.zapier.com](https://help.zapier.com)

---

*APIFreaks provides data-lookup actions for use in your Zapier workflows. You are responsible for using the returned data in compliance with applicable laws and the terms of any third-party sources.*