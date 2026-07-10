const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/subdomains/lookup",
    params: { "domain": bundle.inputData["domain"], "after": bundle.inputData["after"], "before": bundle.inputData["before"], "status": bundle.inputData["status"], "page": bundle.inputData["page"] },
  });
  return response.data;
};

export default {
  key: "get_subdomains_lookup",
  noun: "Domain",
  display: {
    label: "Get subdomains related to the given domain name",
    description: "The Subdomain Lookup API is designed to retrieve subdomains related to the given domain name. It helps you explore subdomains that are available for registration or usage.",
  },
  operation: {
    inputFields: [
      {
        key: "domain",
        label: "Domain",
        type: 'string',
        required: true,
        helpText: "Domain name for availability and suggestions.",
      },
      {
        key: "after",
        label: "After",
        type: 'string',
        required: false,
        helpText: "Filter subdomains seen after this date (format YYYY-MM-DD).",
      },
      {
        key: "before",
        label: "Before",
        type: 'string',
        required: false,
        helpText: "Filter subdomains seen before this date( format YYYY-MM-DD).",
      },
      {
        key: "status",
        label: "Status",
        type: 'string',
        required: false,
        helpText: "Filter subdomains by status (active or inactive).",
        choices: ["active", "inactive"],
      },
      {
        key: "page",
        label: "Page",
        type: 'string',
        required: false,
        helpText: "Page number for paginated results.",
      },
    ],
    perform,
    sample: {
      "domain": "google.com",
      "status": true,
      "query_time": "2026-06-17T11:33:37.892722269",
      "current_page": 1,
      "total_pages": 3,
      "total_records": 299,
      "subdomains": [
        {
          "subdomain": "r2---sn-p5qddn7r.c.pack.google.com",
          "first_seen": "2025-01-17",
          "last_seen": "2026-06-16",
          "inactive_from": "2026-06-16"
        },
        {
          "subdomain": "rr1---sn-p5qlsndk.c.drive.google.com",
          "first_seen": "2025-02-10",
          "last_seen": "2025-10-04"
        },
        {
          "subdomain": "frame.ads-devel.qa.adz.google.com",
          "first_seen": "2025-12-01",
          "last_seen": "2026-04-03"
        },
        {
          "subdomain": "c.drive.google.com",
          "first_seen": "2025-12-09",
          "last_seen": "2026-02-26"
        },
        {
          "subdomain": "da.ext.google.com",
          "first_seen": "2025-12-08",
          "last_seen": "2026-05-07"
        },
        {
          "subdomain": "frame.adwords-canary.qa.adz.google.com",
          "first_seen": "2025-12-01",
          "last_seen": "2026-06-10"
        },
        {
          "subdomain": "datafusion-api-staging.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "c.docs.google.com",
          "first_seen": "2025-12-09",
          "last_seen": "2026-06-01"
        },
        {
          "subdomain": "northamerica-northeast1.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-14"
        },
        {
          "subdomain": "pa.clients6.google.com",
          "first_seen": "2025-11-21",
          "last_seen": "2026-06-14"
        },
        {
          "subdomain": "europe-west9.cloud.google.com",
          "first_seen": "2025-12-02",
          "last_seen": "2026-06-14"
        },
        {
          "subdomain": "test.devsite.corp.google.com",
          "first_seen": "2025-11-25",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "rr4---sn-p5qs7nsr.c.drive.google.com",
          "first_seen": "2025-02-16",
          "last_seen": "2025-09-26",
          "inactive_from": "2025-09-26"
        },
        {
          "subdomain": "ics-devel-east.qa.adz.google.com",
          "first_seen": "2025-12-01",
          "last_seen": "2026-04-03"
        },
        {
          "subdomain": "tbn6-beta.google.com",
          "first_seen": "2025-06-15",
          "last_seen": "2026-02-25"
        },
        {
          "subdomain": "frame.canary.qa.adz.google.com",
          "first_seen": "2025-12-01",
          "last_seen": "2026-04-03"
        },
        {
          "subdomain": "lookerstudio.me-central1.cloud.google.com",
          "first_seen": "2025-02-26",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "us-central2.cloud-run-qual.sandbox.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-12"
        },
        {
          "subdomain": "focus.corp.google.com",
          "first_seen": "2025-05-23",
          "last_seen": "2025-10-01",
          "inactive_from": "2025-10-01"
        },
        {
          "subdomain": "europe-west1.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-13"
        },
        {
          "subdomain": "jules.google.com",
          "first_seen": "2025-06-12",
          "last_seen": "2026-06-15"
        },
        {
          "subdomain": "machinelearningtools-autopush.cloud.google.com",
          "first_seen": "2025-11-23",
          "last_seen": "2026-06-06",
          "inactive_from": "2026-06-06"
        },
        {
          "subdomain": "composer-dev.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "www.aistudio.google.com",
          "first_seen": "2025-10-07",
          "last_seen": "2026-03-29"
        },
        {
          "subdomain": "google-public-dns-b.google.com",
          "first_seen": "2025-10-06",
          "last_seen": "2026-03-29"
        },
        {
          "subdomain": "cse.sandbox.google.com",
          "first_seen": "2025-10-12",
          "last_seen": "2026-03-29"
        },
        {
          "subdomain": "lti.workspace.google.com",
          "first_seen": "2025-10-10",
          "last_seen": "2026-03-29"
        },
        {
          "subdomain": "cider.corp.google.com",
          "first_seen": "2025-02-06",
          "last_seen": "2026-03-02"
        },
        {
          "subdomain": "c.play.google.com",
          "first_seen": "2025-12-09",
          "last_seen": "2026-03-01"
        },
        {
          "subdomain": "us-east5.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "asia-southeast2.cloud.google.com",
          "first_seen": "2025-11-21",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "europe-west3.cloud.google.com",
          "first_seen": "2025-11-28",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "us-west4.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-13"
        },
        {
          "subdomain": "asia-northeast2.cloud.google.com",
          "first_seen": "2025-11-21",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "europe-southwest1.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "me-west1.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "rr5---sn-nja7sner.c.drive.google.com",
          "first_seen": "2025-06-13",
          "last_seen": "2026-05-24",
          "inactive_from": "2026-05-24"
        },
        {
          "subdomain": "europe-west6.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "tensorboard-staging.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "us-central1.cloud.google.com",
          "first_seen": "2025-11-28",
          "last_seen": "2026-06-04"
        },
        {
          "subdomain": "lookerstudio.europe-north1.cloud.google.com",
          "first_seen": "2025-02-26",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "svc-1.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-16"
        },
        {
          "subdomain": "lens.usercontent.google.com",
          "first_seen": "2025-03-19",
          "last_seen": "2026-06-16"
        },
        {
          "subdomain": "works.url.google.com",
          "first_seen": "2025-02-08",
          "last_seen": "2026-06-16"
        },
        {
          "subdomain": "bandwidth.voice.google.com",
          "first_seen": "2025-07-07",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "geminidataanalytics.cloud.google.com",
          "first_seen": "2025-04-29",
          "last_seen": "2026-06-11"
        },
        {
          "subdomain": "pa.sandbox.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-14"
        },
        {
          "subdomain": "lookerstudio.us-east1.cloud.google.com",
          "first_seen": "2025-02-26",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "lookerstudio.asia-south2.cloud.google.com",
          "first_seen": "2025-02-26",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "frame.ads-nightly.qa.adz.google.com",
          "first_seen": "2025-12-01",
          "last_seen": "2026-05-25"
        },
        {
          "subdomain": "lookerstudio.me-central2.cloud.google.com",
          "first_seen": "2025-02-26",
          "last_seen": "2026-06-14"
        },
        {
          "subdomain": "backupdr.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "rr2---sn-p5qlsnrr.c.drive.google.com",
          "first_seen": "2025-02-16",
          "last_seen": "2026-06-05"
        },
        {
          "subdomain": "engineering.google.com",
          "first_seen": "2025-03-06",
          "last_seen": "2025-10-26",
          "inactive_from": "2025-10-26"
        },
        {
          "subdomain": "lookerstudio.southamerica-west1.cloud.google.com",
          "first_seen": "2025-02-26",
          "last_seen": "2026-06-13"
        },
        {
          "subdomain": "rr1---sn-gpv7kn7d.c.drive.google.com",
          "first_seen": "2025-07-11",
          "last_seen": "2026-03-17"
        },
        {
          "subdomain": "us-central2.cloud-run-qual.mtls.sandbox.google.com",
          "first_seen": "2025-05-12",
          "last_seen": "2026-03-17"
        },
        {
          "subdomain": "us-east4.cloud-run-qual.mtls.sandbox.google.com",
          "first_seen": "2025-05-12",
          "last_seen": "2026-03-17"
        },
        {
          "subdomain": "frame.ads-prod.qa.adz.google.com",
          "first_seen": "2025-12-01",
          "last_seen": "2026-04-03"
        },
        {
          "subdomain": "workflows.workspace.google.com",
          "first_seen": "2025-08-05",
          "last_seen": "2026-03-30"
        },
        {
          "subdomain": "tensorboard.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "asia-east2.cloud.google.com",
          "first_seen": "2025-11-21",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "lookerstudio.europe-north2.cloud.google.com",
          "first_seen": "2025-03-31",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "r3---sn-vgqsknek.c.chat.google.com",
          "first_seen": "2025-11-16",
          "last_seen": "2026-03-20"
        },
        {
          "subdomain": "dialogflow.clients6.google.com",
          "first_seen": "2025-11-12",
          "last_seen": "2026-03-20"
        },
        {
          "subdomain": "reportcontent-prestaging.corp.google.com",
          "first_seen": "2025-11-12",
          "last_seen": "2026-03-20"
        },
        {
          "subdomain": "frame.adwords-detours-prod.qa.adz.google.com",
          "first_seen": "2025-12-01",
          "last_seen": "2026-04-03"
        },
        {
          "subdomain": "asia-northeast1.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-04"
        },
        {
          "subdomain": "europe-north1.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "europe-central2.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "machinelearningtools-dev.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "access.workspace.google.com",
          "first_seen": "2025-01-15",
          "last_seen": "2026-03-20"
        },
        {
          "subdomain": "gemini.usercontent.google.com",
          "first_seen": "2025-11-28",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "meet.usercontent.google.com",
          "first_seen": "2025-11-28",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "workspace.usercontent.google.com",
          "first_seen": "2025-11-28",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "southamerica-west1.cloud.google.com",
          "first_seen": "2025-11-21",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "northamerica-northeast2.cloud.google.com",
          "first_seen": "2025-11-28",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "composer-staging.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "composer.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "frame.searchads-canary.qa.adz.google.com",
          "first_seen": "2025-12-01",
          "last_seen": "2026-04-03"
        },
        {
          "subdomain": "lookerstudio.me-west1.cloud.google.com",
          "first_seen": "2025-02-26",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "da-hot-6.da.ext.google.com",
          "first_seen": "2025-04-01",
          "last_seen": "2026-03-17"
        },
        {
          "subdomain": "dataplex.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "frame.ds-next-devel.qa.adz.google.com",
          "first_seen": "2025-12-01",
          "last_seen": "2026-04-03"
        },
        {
          "subdomain": "datafusion-api-dev.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "lookerstudio.us-central1.cloud.google.com",
          "first_seen": "2025-02-26",
          "last_seen": "2026-06-07"
        },
        {
          "subdomain": "www-googletagmanager.l.google.com",
          "first_seen": "2025-03-26",
          "last_seen": "2026-02-25"
        },
        {
          "subdomain": "telus.voice.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-07"
        },
        {
          "subdomain": "lookerstudio.europe-central2.cloud.google.com",
          "first_seen": "2025-02-26",
          "last_seen": "2026-06-09"
        },
        {
          "subdomain": "southamerica-east1.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-08"
        },
        {
          "subdomain": "northamerica-south1.cloud.google.com",
          "first_seen": "2025-11-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "backupdr-dev.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "appsgrowthpromo-pa.clients6.google.com",
          "first_seen": "2025-06-18",
          "last_seen": "2026-06-13"
        },
        {
          "subdomain": "us-west1.cloud-run-qual.mtls.sandbox.google.com",
          "first_seen": "2025-05-12",
          "last_seen": "2026-03-17"
        },
        {
          "subdomain": "c.pack.google.com",
          "first_seen": "2025-12-09",
          "last_seen": "2026-05-18"
        },
        {
          "subdomain": "europe-north2.cloud.google.com",
          "first_seen": "2025-11-21",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "us-west2.cloud.google.com",
          "first_seen": "2025-11-21",
          "last_seen": "2026-06-10"
        },
        {
          "subdomain": "me-central1.cloud.google.com",
          "first_seen": "2025-11-21",
          "last_seen": "2026-06-06"
        },
        {
          "subdomain": "us-south1.cloud.google.com",
          "first_seen": "2025-12-02",
          "last_seen": "2026-06-04"
        },
        {
          "subdomain": "backupdr-staging.cloud.google.com",
          "first_seen": "2025-10-27",
          "last_seen": "2026-06-06"
        }
      ]
    },
  },
};
