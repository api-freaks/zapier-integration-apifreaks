const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/ssl/live",
    params: { "domainName": bundle.inputData["domainName"], "sslRaw": bundle.inputData["sslRaw"] },
  });
  return response.data;
};

export default {
  key: "ssl_certificate_lookup",
  noun: "SSL",
  display: {
    label: "SSL Certificate Lookup",
    description: "Retrieve comprehensive SSL certificate information without the certificate chain.\nThis endpoint provides detailed information about the SSL certificate including expiry dates, issuer details, and encryption methods.",
  },
  operation: {
    inputFields: [
      {
        key: "domainName",
        label: "Domainname",
        type: 'string',
        required: true,
        helpText: "Domain name or URL whose SSL certificate lookup is required",
      },
      {
        key: "sslRaw",
        label: "Sslraw",
        type: 'string',
        required: false,
        helpText: "Set to true to get the raw openSSL response of the domain",
      },
    ],
    perform,
    sample: {
      "domainName": "google.com",
      "queryTime": "2026-06-06 14:58:44",
      "sslCertificates": [
        {
          "chainOrder": "end-user",
          "authenticationType": "domain",
          "validityStartDate": "2026-05-18 18:35:21 UTC",
          "validityEndDate": "2026-08-10 18:35:20 UTC",
          "serialNumber": "d5:2a:59:68:49:a3:ce:9b:10:64:16:9b:c7:eb:df:4b",
          "signatureAlgorithm": "SHA256-RSA",
          "subject": {
            "commonName": "*.google.com"
          },
          "issuer": {
            "commonName": "WR2",
            "organization": "Google Trust Services",
            "country": "US"
          },
          "publicKey": {
            "keySize": "256 bit",
            "keyAlgorithm": "ECDSA",
            "pemRaw": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErGwQHDlGZHg4bCpvaBQKF07hm4v6puRsRi7O6JQH78GTcBkGAHRZSLqvlH8K+wDBOiTKlDh3sWlmEJDUJDdoKA==\n-----END PUBLIC KEY-----\n"
          },
          "extensions": {
            "authorityKeyIdentifier": "DE:1B:1E:ED:79:15:D4:3E:37:24:C3:21:BB:EC:34:39:6D:42:B2:30",
            "subjectKeyIdentifier": "2E:EC:34:B9:3E:97:83:C3:7E:E5:D0:F4:AB:56:D4:25:99:67:7D:6B",
            "keyUsages": [
              "Digital Signature"
            ],
            "extendedKeyUsages": [
              "TLS Web Server Authentication"
            ],
            "crlDistributionPoints": [
              "http://c.pki.goog/wr2/GSyT1N4PBrg.crl"
            ],
            "authorityInfoAccess": {
              "issuers": [
                "http://i.pki.goog/wr2.crt"
              ],
              "ocsp": [
                "http://o.pki.goog/wr2"
              ]
            },
            "subjectAlternativeNames": {
              "dnsNames": [
                "*.google.com",
                "google.com",
                "youtube.com",
                "*.youtube.com",
                "*.ytimg.com"
              ]
            },
            "certificatePolicies": [
              {
                "policyId": "2.23.140.1.2.1"
              }
            ]
          },
          "pemRaw": "-----BEGIN CERTIFICATE-----\nMIIIdTCCB12gAwIBAgIRANUqWWhJo86bEGQWm8fr30swDQYJKoZIhvcNAQELBQAwOzELMAkGA1UEBhMCVVMxHjAcBgNVBAoTFUdvb2dsZSBUcnVzdCBTZXJ2aWNlczEMMAoGA1UEAxMDV1IyMB4XDTI2MDUxODE4MzUyMVoXDTI2MDgxMDE4MzUyMFowFzEVMBMGA1UEAwwMKi5nb29nbGUuY29tMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErGwQHDlGZHg4bCpvaBQKF07hm4v6puRsRi7O6JQH78GTcBkGAHRZSLqvlH8K+wDBOiTKlDh3sWlmEJDUJDdoKKOCBmEwggZdMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDATAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBQu7DS5PpeDw37l0PSrVtQlmWd9azAfBgNVHSMEGDAWgBTeGx7teRXUPjckwyG77DQ5bUKyMDBYBggrBgEFBQcBAQRMMEowIQYIKwYBBQUHMAGGFWh0dHA6Ly9vLnBraS5nb29nL3dyMjAlBggrBgEFBQcwAoYZaHR0cDovL2kucGtpLmdvb2cvd3IyLmNydDCCBDgGA1UdEQSCBC8wggQrggwqLmdvb2dsZS5jb22CFiouYXBwZW5naW5lLmdvb2dsZS5jb22CCSouYmRuLmRldoIVKi5vcmlnaW4tdGVzdC5iZG4uZGV2ghIqLmNsb3VkLmdvb2dsZS5jb22CGCouY3Jvd2Rzb3VyY2UuZ29vZ2xlLmNvbYIYKi5kYXRhY29tcHV0ZS5nb29nbGUuY29tggsqLmdvb2dsZS5jYYILKi5nb29nbGUuY2yCDiouZ29vZ2xlLmNvLmlugg4qLmdvb2dsZS5jby5qcIIOKi5nb29nbGUuY28udWuCDyouZ29vZ2xlLmNvbS5hcoIPKi5nb29nbGUuY29tLmF1gg8qLmdvb2dsZS5jb20uYnKCDyouZ29vZ2xlLmNvbS5jb4IPKi5nb29nbGUuY29tLm14gg8qLmdvb2dsZS5jb20udHKCDyouZ29vZ2xlLmNvbS52boILKi5nb29nbGUuZGWCCyouZ29vZ2xlLmVzggsqLmdvb2dsZS5mcoILKi5nb29nbGUuaHWCCyouZ29vZ2xlLml0ggsqLmdvb2dsZS5ubIILKi5nb29nbGUucGyCCyouZ29vZ2xlLnB0ghkqLmdlbWluaS5jbG91ZC5nb29nbGUuY29tgg0qLmdzdGF0aWMuY29tghQqLm1ldHJpYy5nc3RhdGljLmNvbYIKKi5ndnQxLmNvbYIRKi5nY3BjZG4uZ3Z0MS5jb22CCiouZ3Z0Mi5jb22CDiouZ2NwLmd2dDIuY29tghAqLnVybC5nb29nbGUuY29tghYqLnlvdXR1YmUtbm9jb29raWUuY29tggsqLnl0aW1nLmNvbYIKYWkuYW5kcm9pZIILYW5kcm9pZC5jb22CDSouYW5kcm9pZC5jb22CEyouZmxhc2guYW5kcm9pZC5jb22CBGcuY28CBDEwLmdvb2dsZS5jb22CEiouZ29vZ2xlLWNhcnRzLmNvbYIKZ29vZ2xlLmNvbYISZ29vZ2xlY29tbWVyY2UuY29tghQqLmdvb2dsZWNvbW1lcmNlLmNvbYIKdXJjaGluLmNvbYIMKi51cmNoaW4uY29tggh5b3V0dS5iZYILeW91dHViZS5jb22CDSoueW91dHViZS5jb22CEW11c2ljLnlvdXR1YmUuY29tghMqLm11c2ljLnlvdXR1YmUuY29tghR5b3V0dWJlZWR1Y2F0aW9uLmNvbYIWKi55b3V0dWJlZWR1Y2F0aW9uLmNvbYIPeW91dHViZWtpZHMuY29tghEqLnlvdXR1YmVraWRzLmNvbYIFeXQuYmWCByoueXQuYmWCGmFuZHJvaWQuY2xpZW50cy5nb29nbGUuY29tghUqLmFpc3R1ZGlvLmdvb2dsZS5jb20wEwYDVR0gBAwwCjAIBgZngQwBAgEwNgYDVR0fBC8wLTAroCmgJ4YlaHR0cDovL2MucGtpLmdvb2cvd3IyL0dTeVQxTjRQQnJnLmNybDCCAQMGCisGAQQB1nkCBAIEgfQEgfEA7wB2AMs49xWJfIShRF9bwd37yW7ymlnNRwppBYWwyxTDFFjnAAABnjyV+/0AAAQDAEcwRQIgCgvqLruYdmtREQIJopZQVZEAux/EdciE9ThPK5WLOIwCIQDJjNYSb4sTv+LnXVHnirnD6kTT5FY8gLI6mKR0WI/m1AB1ANgJVTuUT3r/yBYZb5RPhauw+Pxeh1UmDxXRLnK7RUsUAAABnjyV+8EAAAQDAEYwRAIgQvDSSJRos+D8Lk6bpjH2ZlYxD/N6Gv2TqkFZhUlFKeQCIBq55PPw4e5N89gLgzFC2kp1X+YvFsURPsLrz1LqOAymMA0GCSqGSIb3DQEBCwUAA4IBAQBtZusj1ojCxhZxk5KpZ92eZuTkDVJgJGtDq8gPRehf50mZiu2gDK1JgXIzKRey3tHmgNrCmTon5QJAL9yDyrOGs2GoQsfMkenH0+/hTsLB+n03ni9+9jghfPvE9CZbFimniiqGznhnW5mNOZGy2AnXz79ZfHr4J8AuPh4HVvPc6q/2coyl7Vlxp2XDo6j1eoZARVSske22WvE34U4Yunq+SE0E0a8aKTV7Q7YHeu8/NAsFmG7V6QSSqAyFyxqeEzuz8ylBPxS/cejBk+29tGlfqqrR1JEKdcFLF7EuRyvRWAuQMQBHRA9boa3/lz1f+jEkkUbfqEMrDAnxLthdKKJk\n-----END CERTIFICATE-----\n"
        }
      ]
    },
  },
};
