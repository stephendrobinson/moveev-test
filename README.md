# addin-start-stop

This add-in demonstrates an informational display add-in which provides an estimate of fuel savings for vehicles which have stop-start systems. The number of stop/starts, idling time and estimated fuel saved are provided for the previous month and year for the selected vehicle.

## Installation
Add the configuration below to the to the system setting -> add-ins section of the MyGeotab database

```json
{
  "name": "Move EV",
  "supportEmail": "support@moveev.com",
  "version": "0.0.1",
  "items": [{
    "url": "https://move-ev-test.s3.us-west-2.amazonaws.com/app/moveev.html",
    "path": "GettingStartedLink/",
    "menuName": {
      "en": "MoveEV Calculator"
    },
    "icon": "https://move-ev-test.s3.us-west-2.amazonaws.com/app/images/icon.svg"
  }]
}
```