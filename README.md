# addin-start-stop

This add-in demonstrates an informational display add-in which provides an estimate of fuel savings for vehicles which have stop-start systems. The number of stop/starts, idling time and estimated fuel saved are provided for the previous month and year for the selected vehicle.

## Installation
Add the configuration below to the to the system setting -> add-ins section of the MyGeotab database

```json
{
  "name": "Move EV 2",
  "supportEmail": "support@geotab.com",
  "version": "0.0.1",
  "items": [{
    "url": "https://github.com/stephendrobinson/moveev-test/blob/master/app/moveev.html",
    "path": "EngineMaintenanceLink/",
    "menuName": {
      "en": "Move EV 2"
    },
    "icon": "https://github.com/stephendrobinson/moveev-test/blob/master/app/images/icon.svg"
  }]
}
```