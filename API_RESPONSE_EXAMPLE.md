# Filtered PSI API Response Structure

The API now returns a focused response with only performance issues:

## Response Format

\`\`\`json
{
  "summary": {
    "url": "https://example.com",
    "performanceScore": 0.64,
    "labData": {
      "LCP": "11.2 s",
      "FCP": "3.0 s",
      "CLS": "0",
      "TBT": "90 ms",
      "SI": "6.3 s"
    },
    "fieldData": {
      "LCP": "FAST (1395ms)",
      "FCP": "FAST (1370ms)",
      "CLS": "FAST (6)",
      "INP": "FAST (195ms)"
    },
    "topIssues": [
      {
        "title": "Reduce unused JavaScript",
        "impact": "Est savings of 170 KiB"
      },
      {
        "title": "Reduce unused CSS",
        "impact": "Est savings of 28 KiB"
      },
      {
        "title": "Avoid serving legacy JavaScript to modern browsers",
        "impact": "Est savings of 10 KiB"
      }
    ],
    "totalIssues": 6
  },
  "id": "https://example.com",
  "requestedUrl": "https://example.com",
  "finalUrl": "https://example.com",
  "performanceScore": 0.64,
  "metrics": {
    "LCP": {
      "score": 0,
      "value": 11185.123056454948,
      "displayValue": "11.2 s",
      "unit": "millisecond"
    },
    "FCP": {
      "score": 0.49,
      "value": 3009.3883932691097,
      "displayValue": "3.0 s",
      "unit": "millisecond"
    },
    "CLS": {
      "score": 1,
      "value": 0,
      "displayValue": "0",
      "unit": "unitless"
    },
    "TBT": {
      "score": 0.99,
      "value": 86,
      "displayValue": "90 ms",
      "unit": "millisecond"
    },
    "SI": {
      "score": 0.42,
      "value": 6294.895087360535,
      "displayValue": "6.3 s",
      "unit": "millisecond"
    },
    "TTI": {
      "score": 0.19,
      "value": 11312.623148766106,
      "displayValue": "11.3 s",
      "unit": "millisecond"
    }
  },
  "failures": [
    {
      "id": "unused-javascript",
      "title": "Reduce unused JavaScript",
      "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity.",
      "score": 0,
      "displayValue": "Est savings of 170 KiB",
      "details": {
        "type": "opportunity",
        "items": [
          {
            "wastedBytes": 59225,
            "url": "https://www.googletagmanager.com/gtag/js?id=G-38PQ9B6HDT",
            "wastedPercent": 39.22613149215495,
            "totalBytes": 150983
          },
          // More items...
        ]
      },
      "metricSavings": {
        "LCP": 800,
        "FCP": 0
      }
    },
    {
      "id": "unused-css-rules",
      "title": "Reduce unused CSS",
      "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity.",
      "score": 0,
      "displayValue": "Est savings of 28 KiB",
      "details": {
        "items": [
          {
            "wastedBytes": 15601,
            "url": "https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwpBsxsF3eY665Ye/styles__ltr.css",
            "wastedPercent": 100,
            "totalBytes": 15601
          },
          // More items...
        ]
      },
      "metricSavings": {
        "LCP": 150,
        "FCP": 0
      }
    },
    // More failures...
  ],
  "lcpElement": {
    "id": "largest-contentful-paint-element",
    "title": "Largest Contentful Paint element",
    "description": "This is the largest contentful element painted within the viewport.",
    "score": 0,
    "scoreDisplayMode": "metricSavings",
    "displayValue": "11,190 ms",
    "metricSavings": {
      "LCP": 8700
    },
    "details": {
      "type": "list",
      "items": [
        {
          "items": [
            {
              "node": {
                "boundingRect": {
                  "height": 6115,
                  "left": 0,
                  "bottom": 6285,
                  "right": 412,
                  "width": 412,
                  "top": 170
                },
                "snippet": "<div id=\"content\" class=\"site-content\">",
                "type": "node",
                "selector": "body.home > div#page > div#content",
                "nodeLabel": " Recipes for on and off the grill with plenty of personal tips so you can recre…"
              }
            }
          ]
        },
        {
          "headings": [
            {
              "valueType": "text",
              "label": "Phase",
              "key": "phase"
            },
            {
              "key": "percent",
              "valueType": "text",
              "label": "% of LCP"
            },
            {
              "valueType": "ms",
              "key": "timing",
              "label": "Timing"
            }
          ],
          "items": [
            {
              "phase": "TTFB",
              "percent": "5%",
              "timing": 601
            },
            {
              "percent": "0%",
              "phase": "Load Delay",
              "timing": 0
            },
            {
              "timing": 351.07075027922974,
              "phase": "Load Time",
              "percent": "3%"
            },
            {
              "timing": 10233.052306175718,
              "percent": "91%",
              "phase": "Render Delay"
            }
          ]
        }
      ]
    }
  },
  "fieldData": {
    "id": "https://example.com",
    "metrics": {
      "LARGEST_CONTENTFUL_PAINT_MS": {
        "percentile": 1395,
        "category": "FAST"
      },
      "FIRST_CONTENTFUL_PAINT_MS": {
        "percentile": 1370,
        "category": "FAST"
      },
      "CUMULATIVE_LAYOUT_SHIFT_SCORE": {
        "percentile": 6,
        "category": "FAST"
      },
      "INTERACTION_TO_NEXT_PAINT": {
        "percentile": 195,
        "category": "FAST"
      }
    },
    "overall_category": "FAST"
  },
  "analysisUTCTimestamp": "2025-06-16T17:12:15.236Z",
  "fromCache": false,
  "fetchTimestamp": 1750093955748
}
\`\`\`

## Key Features

1. **Summary Section**: Quick overview of performance metrics and top issues
2. **Core Metrics**: All core web vitals with scores and values
3. **Failed Audits**: Only includes audits that failed or have warnings
4. **LCP Element Details**: Always includes details about the LCP element
5. **Field Data**: Real user metrics from Chrome UX Report
6. **Sorted Issues**: Issues sorted by impact on LCP for prioritization
