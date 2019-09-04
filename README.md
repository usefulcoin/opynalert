# Opyn Offset Alert Generating Script 

Instructions for configuring the Opyn Offset Alert Generating Script ("**opynalert**") are summarized below.

## REST API Calls

Use the node-fetch module to make REST API calls and qs to format the URI.

Add them to the list of dependencies by issuing the following command:

```bash
npm install --save node-fetch
npm install --save qs
```

## SMS Notifications

Use the aws-sdk node module to enable SMS notifications.

```bash
npm install --save aws-sdk
```
