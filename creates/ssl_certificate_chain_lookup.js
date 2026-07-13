const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/ssl/live/chain",
    params: { "domainName": bundle.inputData["domainName"], "sslRaw": bundle.inputData["sslRaw"] },
  });
  return response.data;
};

export default {
  key: "ssl_certificate_chain_lookup",
  noun: "SSL",
  display: {
    label: "SSL Certificate Chain Lookup",
    description: "Retrieve the complete SSL certificate chain from root Certificate Authority (CA) to end-user certificate.\nThis endpoint provides comprehensive information about each certificate in the chain.",
  },
  operation: {
    inputFields: [
      {
        key: "domainName",
        label: "Domainname",
        type: 'string',
        required: true,
        helpText: "Domain name or URL whose SSL certificate chain lookup is required",
      },
      {
        key: "sslRaw",
        label: "Sslraw",
        type: 'string',
        required: false,
        helpText: "Set to true to get the raw openSSL response for each certificate in the chain",
      },
    ],
    perform,
    sample: {
      "domainName": "google.com",
      "queryTime": "2026-06-06 14:58:45",
      "sslCertificates": [
        {
          "chainOrder": "end-user",
          "authenticationType": "domain",
          "validityStartDate": "2026-06-2 06:23:03 UTC",
          "validityEndDate": "2026-08-31 07:21:11 UTC",
          "serialNumber": "7b:75:1c:fe:fb:bb:95:33:0e:e2:a1:6b:9e:89:e1:b7",
          "signatureAlgorithm": "ECDSA-SHA256",
          "subject": {
            "commonName": "*.google.com"
          },
          "issuer": {
            "commonName": "WE1",
            "organization": "Google Trust Services",
            "country": "US"
          },
          "publicKey": {
            "keySize": "256 bit",
            "keyAlgorithm": "ECDSA",
            "pemRaw": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAELD2RK4J04b+CkgML4RrJmWd482WIxr61Nq21HpA9c9G5ou6PsaIEhrESlu6xMHM+ucHh/0jQArZwnb8F0YwXZw==\n-----END PUBLIC KEY-----\n"
          },
          "extensions": {
            "authorityKeyIdentifier": "90:77:92:35:67:C4:FF:A8:CC:A9:E6:7B:D9:80:79:7B:CC:93:F9:38",
            "subjectKeyIdentifier": "6D:E0:94:E7:A4:F4:43:F1:20:17:0E:81:FC:C4:91:4D:18:A0:C9:2F",
            "keyUsages": [
              "Digital Signature"
            ],
            "extendedKeyUsages": [
              "TLS Web Server Authentication"
            ],
            "crlDistributionPoints": [
              "http://c.pki.goog/we1/R7LgAnKD4Lk.crl"
            ],
            "authorityInfoAccess": {
              "issuers": [
                "http://i.pki.goog/we1.crt"
              ],
              "ocsp": [
                "http://o.pki.goog/s/we1/e3U"
              ]
            },
            "subjectAlternativeNames": {
              "dnsNames": [
                "*.google.com",
                "google.com"
              ]
            },
            "certificatePolicies": [
              {
                "policyId": "2.23.140.1.2.1"
              }
            ]
          },
          "pemRaw": "-----BEGIN CERTIFICATE-----\nMIIDpDCCA0mgAwIBAgIQe3Uc/vu7lTMO4qFrnonhtzAKBggqhkjOPQQDAjA7MQswCQYDVQQGEwJVUzEeMBwGA1UEChMVR29vZ2xlIFRydXN0IFNlcnZpY2VzMQwwCgYDVQQDEwNXRTEwHhcNMjYwNjAyMDYyMzAzWhcNMjYwODMxMDcyMTExWjAWMRQwEgYDVQQDEwtqZnJlYWtzLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABCw9kSuCdOG/gpIDC+EayZlnePNliMa+tTattR6QPXPRuaLuj7GiBIaxEpbusTBzPrnB4f9I0AK2cJ2/BdGMF2ejggJSMIICTjAOBgNVHQ8BAf8EBAMCB4AwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQUbeCU56T0Q/EgFw6B/MSRTRigyS8wHwYDVR0jBBgwFoAUkHeSNWfE/6jMqeZ72YB5e8yT+TgwXgYIKwYBBQUHAQEEUjBQMCcGCCsGAQUFBzABhhtodHRwOi8vby5wa2kuZ29vZy9zL3dlMS9lM1UwJQYIKwYBBQUHMAKGGWh0dHA6Ly9pLnBraS5nb29nL3dlMS5jcnQwJQYDVR0RBB4wHIILamZyZWFrcy5jb22CDSouamZyZWFrcy5jb20wEwYDVR0gBAwwCjAIBgZngQwBAgEwNgYDVR0fBC8wLTAroCmgJ4YlaHR0cDovL2MucGtpLmdvb2cvd2UxL1I3TGdBbktENExrLmNybDCCAQMGCisGAQQB1nkCBAIEgfQEgfEA7wB2AJROQ4f67MHvgfMZJCaoGGUBx9NfOAIBP3JnfVU3LhnYAAABnoc27FIAAAQDAEcwRQIhAN5bVfN6osVhMW6F32m52+fRsNf6yDQIhXfHZ3S0DXK7AiBdVp3hQqIjM/TpSynLnZJ5W6Ng4Pd5WjRZtZP8wtNBmAB1ANgJVTuUT3r/yBYZb5RPhauw+Pxeh1UmDxXRLnK7RUsUAAABnoc27IUAAAQDAEYwRAIgZ4Hn/21EyS31ZoYWNiIbIbfnSWvnTTzMBGUzkPXa7E4CIChvO8tx+1vcNhmO2/qpE5pwLTIpeqwKH9+OvGdfoa4pMAoGCCqGSM49BAMCA0kAMEYCIQDL0J1LBJszJdu9uQJi5roRavn8KzuiC0caVQ9KxB1LzQIhAL16BeuNfUXnQ0JxUMiVXIWmKz7QoiLImDBS1+b+ZvJP\n-----END CERTIFICATE-----\n"
        },
        {
          "chainOrder": "intermediate",
          "authenticationType": "organization",
          "validityStartDate": "2023-12-13 09:00:00 UTC",
          "validityEndDate": "2029-02-20 14:00:00 UTC",
          "serialNumber": "7f:f3:19:77:97:2c:22:4a:76:15:5d:13:b6:d6:85:e3",
          "signatureAlgorithm": "ECDSA-SHA2384",
          "subject": {
            "commonName": "WE1",
            "organization": "Google Trust Services",
            "country": "US"
          },
          "issuer": {
            "commonName": "GTS Root R4",
            "organization": "Google Trust Services LLC",
            "country": "US"
          },
          "publicKey": {
            "keySize": "256 bit",
            "keyAlgorithm": "ECDSA",
            "pemRaw": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEb806/mdXR0whA4VAwkddu1hHD0DBXBeFxhk359V87YZLm4HZ1xoTpQoD+JjExuie/xBZjywmmPXmJiW7DwL6Vg==\n-----END PUBLIC KEY-----\n"
          },
          "extensions": {
            "authorityKeyIdentifier": "80:4C:D6:EB:74:FF:49:36:A3:D5:D8:FC:B5:3E:C5:6A:F0:94:1D:8C",
            "subjectKeyIdentifier": "90:77:92:35:67:C4:FF:A8:CC:A9:E6:7B:D9:80:79:7B:CC:93:F9:38",
            "keyUsages": [
              "CRL Sign",
              "Digital Signature",
              "Certificate Sign"
            ],
            "extendedKeyUsages": [
              "TLS Web Server Authentication",
              "TLS Web Client Authentication"
            ],
            "crlDistributionPoints": [
              "http://c.pki.goog/r/r4.crl"
            ],
            "authorityInfoAccess": {
              "issuers": [
                "http://i.pki.goog/r4.crt"
              ]
            },
            "certificatePolicies": [
              {
                "policyId": "2.23.140.1.2.1"
              }
            ]
          },
          "pemRaw": "-----BEGIN CERTIFICATE-----\nMIICnzCCAiWgAwIBAgIQf/MZd5csIkp2FV0TttaF4zAKBggqhkjOPQQDAzBHMQswCQYDVQQGEwJVUzEiMCAGA1UEChMZR29vZ2xlIFRydXN0IFNlcnZpY2VzIExMQzEUMBIGA1UEAxMLR1RTIFJvb3QgUjQwHhcNMjMxMjEzMDkwMDAwWhcNMjkwMjIwMTQwMDAwWjA7MQswCQYDVQQGEwJVUzEeMBwGA1UEChMVR29vZ2xlIFRydXN0IFNlcnZpY2VzMQwwCgYDVQQDEwNXRTEwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAARvzTr+Z1dHTCEDhUDCR127WEcPQMFcF4XGGTfn1XzthkubgdnXGhOlCgP4mMTG6J7/EFmPLCaY9eYmJbsPAvpWo4H+MIH7MA4GA1UdDwEB/wQEAwIBhjAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUkHeSNWfE/6jMqeZ72YB5e8yT+TgwHwYDVR0jBBgwFoAUgEzW63T/STaj1dj8tT7FavCUHYwwNAYIKwYBBQUHAQEEKDAmMCQGCCsGAQUFBzAChhhodHRwOi8vaS5wa2kuZ29vZy9yNC5jcnQwKwYDVR0fBCQwIjAgoB6gHIYaaHR0cDovL2MucGtpLmdvb2cvci9yNC5jcmwwEwYDVR0gBAwwCjAIBgZngQwBAgEwCgYIKoZIzj0EAwMDaAAwZQIxAOcCq1HW90OVznX+0RGU1cxAQXomvtgM8zItPZCuFQ8jSBJSjz5keROv9aYsAm5VsQIwJonMaAFi54mrfhfoFNZEfuNMSQ6/bIBiNLiyoX46FohQvKeIoJ99cx7sUkFN7uJW\n-----END CERTIFICATE-----\n"
        },
        {
          "chainOrder": "intermediate",
          "authenticationType": "organization",
          "validityStartDate": "2023-11-15 03:43:21 UTC",
          "validityEndDate": "2028-01-28 00:00:42 UTC",
          "serialNumber": "7f:e5:30:bf:33:13:43:be:dd:82:16:10:49:3d:8a:1b",
          "signatureAlgorithm": "SHA256-RSA",
          "subject": {
            "commonName": "GTS Root R4",
            "organization": "Google Trust Services LLC",
            "country": "US"
          },
          "issuer": {
            "commonName": "GlobalSign Root CA",
            "organization": "GlobalSign nv-sa",
            "organizationalUnit": "Root CA",
            "country": "BE"
          },
          "publicKey": {
            "keySize": "384 bit",
            "keyAlgorithm": "ECDSA",
            "pemRaw": "-----BEGIN PUBLIC KEY-----\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE83Rzp2iLYK5DuDXFgTB7S0md+8FhzubeRr1r1WEYNa5A3XP3iZEwWus87oV8okB2O6nGuEfYKueSkWpz6bFyOZ8pn6KY019eWIZlD6GEZQbR3IvJx3PIjGov5cSr0R2K\n-----END PUBLIC KEY-----\n"
          },
          "extensions": {
            "authorityKeyIdentifier": "60:7B:66:1A:45:0D:97:CA:89:50:2F:7D:04:CD:34:A8:FF:FC:FD:4B",
            "subjectKeyIdentifier": "80:4C:D6:EB:74:FF:49:36:A3:D5:D8:FC:B5:3E:C5:6A:F0:94:1D:8C",
            "keyUsages": [
              "CRL Sign",
              "Digital Signature",
              "Certificate Sign"
            ],
            "extendedKeyUsages": [
              "TLS Web Server Authentication",
              "TLS Web Client Authentication"
            ],
            "crlDistributionPoints": [
              "http://c.pki.goog/r/gsr1.crl"
            ],
            "authorityInfoAccess": {
              "issuers": [
                "http://i.pki.goog/gsr1.crt"
              ]
            },
            "certificatePolicies": [
              {
                "policyId": "2.23.140.1.2.1"
              }
            ]
          },
          "pemRaw": "-----BEGIN CERTIFICATE-----\nMIIDejCCAmKgAwIBAgIQf+UwvzMTQ77dghYQST2KGzANBgkqhkiG9w0BAQsFADBXMQswCQYDVQQGEwJCRTEZMBcGA1UEChMQR2xvYmFsU2lnbiBudi1zYTEQMA4GA1UECxMHUm9vdCBDQTEbMBkGA1UEAxMSR2xvYmFsU2lnbiBSb290IENBMB4XDTIzMTExNTAzNDMyMVoXDTI4MDEyODAwMDA0MlowRzELMAkGA1UEBhMCVVMxIjAgBgNVBAoTGUdvb2dsZSBUcnVzdCBTZXJ2aWNlcyBMTEMxFDASBgNVBAMTC0dUUyBSb290IFI0MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE83Rzp2iLYK5DuDXFgTB7S0md+8FhzubeRr1r1WEYNa5A3XP3iZEwWus87oV8okB2O6nGuEfYKueSkWpz6bFyOZ8pn6KY019eWIZlD6GEZQbR3IvJx3PIjGov5cSr0R2Ko4H/MIH8MA4GA1UdDwEB/wQEAwIBhjAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUgEzW63T/STaj1dj8tT7FavCUHYwwHwYDVR0jBBgwFoAUYHtmGkUNl8qJUC99BM00qP/8/UswNgYIKwYBBQUHAQEEKjAoMCYGCCsGAQUFBzAChhpodHRwOi8vaS5wa2kuZ29vZy9nc3IxLmNydDAtBgNVHR8EJjAkMCKgIKAehhxodHRwOi8vYy5wa2kuZ29vZy9yL2dzcjEuY3JsMBMGA1UdIAQMMAowCAYGZ4EMAQIBMA0GCSqGSIb3DQEBCwUAA4IBAQAYQrsPBtYDh5bjP2OBDwmkoWhIDDkic574y04tfzHpn+cJodI2D4SseesQ6bDrarZ7C30ddLibZatoKiws3UL9xnELz4ct92vID24FfVbiI1hY+SW6FoVHkNeWIP0GCbaM4C6uVdF5dTUsMVs/ZbzNnIdCp5Gxmx5ejvEau8otR/CskGN+hr/W5GvT1tMBjgWKZ1i4//emhA1JG1BbPzoLJQvyEotc03lXjTaCzv8mEbep8RqZ7a2CPsgRbuvTPBwcOMBBmuFeU88+FSBX6+7iP0il8b4Z0QFqIwwMHfs/L6K1vepuoxtGzi4CZ68zJpiq1UvSqTbFJjtbD4seiMHl\n-----END CERTIFICATE-----\n"
        },
        {
          "chainOrder": "root",
          "authenticationType": "self-signed-ca",
          "validityStartDate": "2011-09-22 11:22:02 UTC",
          "validityEndDate": "2030-09-22 11:22:02 UTC",
          "serialNumber": "Signature Algorithm: sha256WithRSAEncryption",
          "signatureAlgorithm": "SHA256-RSA",
          "subject": {
            "commonName": "Actalis Authentication Root CA",
            "organization": "Actalis S.p.A./03358520967",
            "locality": "Milan",
            "country": "IT"
          },
          "issuer": {
            "commonName": "Actalis Authentication Root CA",
            "organization": "Actalis S.p.A./03358520967",
            "locality": "Milan",
            "country": "IT"
          },
          "publicKey": {
            "keySize": "4096 bit",
            "keyAlgorithm": "RSA",
            "pemRaw": "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp8bEpSmkLO/lGMWwUKNvUTufClrJwkg4CsIcoBh/kbWHuUA/3R1oHwiD1S0eiKD4j1aPbZkCkpAW1V8IbInX4ay8IMKx4INRimlNAJZaby/ARH6jDuSRzVju3PvHHkVH3Se5CAGfpiEd9UEtL0z9KK3giq0itFZljoZUj5NDKd45RnijMCO6zfB9E1fAXdKDa0hMxKufgFpbOr3JpyI/gCczWw63igxdBzcIy2zSekciRDXFzMwujt0q7bd9Zg1fYVEiVRvjRuPjPdA1YprbrxTIW6HMiRvhMCb8oJsfgadHHwTrozmSBp+Z07/T6k9QnBn+locePGX2oxgkg4YQ51Q+qDp2JE+BIcXjDwL4k5RHILv+1A7TaLndxHqEguNTVHnd25zS8gebLra8Pu2Fbe8lEfKXGkJh90qX6IuxEAf6ZYGyojnP9zz/GPvG8VqLWeICrHuS0E4UT1lF9gxeKF+w6D9Fz8+vm2/7hNN3WpVvrJSEnu68wEqPSpP4RCHiMUVhUE4Q2OM1fEwZtN4Fv6MGn8i1zeQf1xcGDXqVdFUNaBr8EBtiZJ1t4JWgw5QHVw0U5r0F+7if5t+L4sbnfpb2U8WANFAoWPASUHEXMLrmeGO89LKtmyuy/uE5jF66CyCU3nuDuP/jVo23Eek7jPKxwV2dpAtMK9myGPW1n0sCAwEAAQ==\n-----END PUBLIC KEY-----\n"
          },
          "extensions": {
            "authorityKeyIdentifier": "52:D8:88:3A:C8:9F:78:66:ED:89:F3:7B:38:70:94:C9:02:02:36:D0",
            "subjectKeyIdentifier": "52:D8:88:3A:C8:9F:78:66:ED:89:F3:7B:38:70:94:C9:02:02:36:D0",
            "keyUsages": [
              "CRL Sign",
              "Certificate Sign"
            ]
          },
          "pemRaw": "-----BEGIN CERTIFICATE-----\nMIIFuzCCA6OgAwIBAgIIVwoRl0LE48wwDQYJKoZIhvcNAQELBQAwazELMAkGA1UEBhMCSVQxDjAMBgNVBAcMBU1pbGFuMSMwIQYDVQQKDBpBY3RhbGlzIFMucC5BLi8wMzM1ODUyMDk2NzEnMCUGA1UEAwweQWN0YWxpcyBBdXRoZW50aWNhdGlvbiBSb290IENBMB4XDTExMDkyMjExMjIwMloXDTMwMDkyMjExMjIwMlowazELMAkGA1UEBhMCSVQxDjAMBgNVBAcMBU1pbGFuMSMwIQYDVQQKDBpBY3RhbGlzIFMucC5BLi8wMzM1ODUyMDk2NzEnMCUGA1UEAwweQWN0YWxpcyBBdXRoZW50aWNhdGlvbiBSb290IENBMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp8bEpSmkLO/lGMWwUKNvUTufClrJwkg4CsIcoBh/kbWHuUA/3R1oHwiD1S0eiKD4j1aPbZkCkpAW1V8IbInX4ay8IMKx4INRimlNAJZaby/ARH6jDuSRzVju3PvHHkVH3Se5CAGfpiEd9UEtL0z9KK3giq0itFZljoZUj5NDKd45RnijMCO6zfB9E1fAXdKDa0hMxKufgFpbOr3JpyI/gCczWw63igxdBzcIy2zSekciRDXFzMwujt0q7bd9Zg1fYVEiVRvjRuPjPdA1YprbrxTIW6HMiRvhMCb8oJsfgadHHwTrozmSBp+Z07/T6k9QnBn+locePGX2oxgkg4YQ51Q+qDp2JE+BIcXjDwL4k5RHILv+1A7TaLndxHqEguNTVHnd25zS8gebLra8Pu2Fbe8lEfKXGkJh90qX6IuxEAf6ZYGyojnP9zz/GPvG8VqLWeICrHuS0E4UT1lF9gxeKF+w6D9Fz8+vm2/7hNN3WpVvrJSEnu68wEqPSpP4RCHiMUVhUE4Q2OM1fEwZtN4Fv6MGn8i1zeQf1xcGDXqVdFUNaBr8EBtiZJ1t4JWgw5QHVw0U5r0F+7if5t+L4sbnfpb2U8WANFAoWPASUHEXMLrmeGO89LKtmyuy/uE5jF66CyCU3nuDuP/jVo23Eek7jPKxwV2dpAtMK9myGPW1n0sCAwEAAQaNjMGEwHQYDVR0OBBYEFFLYiDrIn3hm7YnzezhwlMkCAjbQMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAUUtiIOsifeGbtifN7OHCUyQICNtAwDgYDVR0PAQH/BAQDAgEGMA0GCSqGSIb3DQEBCwUAA4ICAQALe3KHwGCmSUyIWOYdiPcUZEim2FgKDk8TNd81HdTtBjHIgT5q1d07GjLukD0R0i70jsNjLiNmsGe+b7bAEzlgqqI0JZN1Ut6nna0Oh4lScWoWPBkdg/iaKWW+9D+a2fDzWochcYBNy+A4mz+7+uAwTc+G02UQGRjRlwKxK3JCaKygvU5a2hi/a5iB0P2avl4VSM0RFbnAKVy06Ij3Pjaut2L9HmLecHgQHEhb2rykOLpn7VU+Xlff1ANATIGk0k9jpwlCCRT8AKnCgHNPLsBA2RF7SOp6AsDT6ygBJlh0wcBzIm2Tlf05fbsq4/aC4yyXX04fkZT6/iyj2HYauE2yOE+b+h1IYHkm4vP9qdCa6HCPSXrW5b0KDtst842/6+OkfcvHlXHo2qN8xcL4dJIEG4aspCJTQLas/kx2z/uUMsA1n3Y/buWQbqCmJqK4LL7RK4X9p2jIugErsWx0Hbhzlefut8cl8ABMALJ+tguLHPPAUJ4lueAI3jZm/zel0btUZCzJJ7VLkn5l/9Mt4blOvH+kQSGQQXemOR/qnuOf0GZvBeyqdn6/axag67XH/JJULysRJyU3eExRarDzzFhdFPFqSBX/wge2sY0PjlxQRrM9vwGYT7JZVEc+NHt4bVaTLnPqZih4zR0Uv6CPLy64Lo7yFIrM6bV8+2ydDKXhl\n-----END CERTIFICATE-----\n"
        }
      ]
    },
  },
};
