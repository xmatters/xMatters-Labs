<img src="media/_Final_xM_Octo-Logo-01.png" width="200" height="200" align="right">

# xMatters-Labs
Welcome to xMatters Labs, the official/unofficial Research and Development wing of xMatters, inc., and home to the most cutting-edge integrations on offer.

This is a curated list of useful in-progress integrations, interesting code samples, and other experiments, and as such we can provide only limited support. If you run into any problems, open an issue here on GitHub and we'll see what we can do. 

For a full list of our current integrations, head over to [xmatters.com/integrations](https://www.xmatters.com/integrations). 

To join the discussion on all things related to xMatters integrations, check out our user forums at https://support.xmatters.com/hc/en-us/community/topics/200330486-Integrations-Q-A

This list is based on the awesome framework of [awesome-cisco](https://github.com/CiscoDevNet/awesome-ciscospark) and [awesome-go](https://github.com/avelino/awesome-go).

# Contributing

## Getting started - Build an integration
When thinking about deisgning an integration, remember that there are really three types of integrations with the xMatters platform:
* **Data Source** - Getting group, user, or device data in or out of xMatters.
  * *Example*: None yet. Contribute one!
* **Event Triggers** - Initate events. These events do not necessarily need to notify people.
  * *Example*: [Chef](#chef), ServiceNow [Inform with xMatters](#inform-with-xmatters)
  * *One way*: Start here: https://support.xmatters.com/hc/en-us/articles/115001230823
  * *Closed-loop*: Start here: https://support.xmatters.com/hc/en-us/articles/211526223
* **Enrichment** - Intended to be tacked on to an existing integration, these provide enrichment or enhancement functionality.
  * *Example*: [StatusPage](#statuspage)
  * *Getting started*: https://support.xmatters.com/hc/en-us/articles/214627943

**Other Links**
* [xMatters Help](http://help.xmatters.com/)
* [xMatters API doc](http://help.xmatters.com/xmAPI/)

## Getting started - Post the repo
Once you've completed the integration, it's time to post the artifacts to github.

1. Head over to the [template](https://github.com/xmatters/xm-labs-template) for detailed instructions on how to get started.
2. After all changes have been made, open an [issue](https://github.com/xmatters/xMatters-Labs/issues) and we'll add it to the list. We might fork the repo to keep it "in house". 

# Contents
- [Alertus](#alertus)
- [Atlassian](#atlassian)
  - [Bitbucket Pipeline](#bitbucket-pipeline)
  - [StatusPage](#statuspage)
- [BMC](#bmc)
  - [Remedy 9 - On Premise](#remedy-9---on-premise)
  - [Remedy - On Demand](#remedy---on-demand)
- [Chef](#chef)
  - [Chef Server](#chef-server)
  - [Chef Automate - Compliance](#chef-automate---compliance)
  - [Chef Automate - Generic Webhook](#chef-automate---generic-webhook)
- [Dynatrace](#dynatrace)
  - [Dynatrace](#dynatrace)
  - [Application Monitoring](#appmon)
- [Jenkins](#jenkins)
- [Loggly](#loggly)
- [Logz.io](#logzio)
- [Nagios](#nagios)
- [OverOps](#overops)
- [SalesForce](#salesforce)
- [SolarWinds](#solarwinds)
  - [Librato](#librato)
  - [Papertrail](#papertrail)
- [Stackdriver](#stackdriver)
- [ServiceNow](#servicenow)
  - [Inform with xMatters](#inform-with-xmatters)
  - [CI Support Groups on Engage form](#ci-support-groups-on-engage-form)
- [Slack](#slack)
- [Unified Infrastructure Manager](#unified-infrastructure-Manager)
- [Zabbix](#zabbix)


# Integrations
## Alertus
The Alertus integration allows xMatters to make limited desktop notifications. (The integration targets a group or organizational unit in Alertus; it does not add desktop notifications as a device type.)
* [One-way integration with Alertus](https://github.com/xmatters/xm-labs-alertus)

## Atlassian
### Bitbucket Pipelines
Pipelines are a powerful way to kick off build scripts from Bitbucket repos. Be notified and drive workflow on failed builds. 
* [Failed Builds alerts integration with Pipelines](https://github.com/xmatters/xm-labs-bitbucket-pipeline)

### StatusPage
Integration for posting to StatusPage.io. This integration allows recipients to create, update, and resolve incidents in StatusPage using the response options in the notifications.
* [Create new incidents in StatusPage](https://github.com/xmatters/xm-labs-statuspage)

## BMC
### Remedy 9 - On Premise
Labs integration to Remedy 9 On Premise. This is the Remedy 8 integration available [here](https://support.xmatters.com/hc/en-us/articles/204282225), but for Remedy 9. Our engineering team has not officially validated this integration for Remedy 9, but this has been used several times in the field for Remedy 9. 
* [Closed loop Remedy 9 - On Premise integration with data sync](https://github.com/xmatters/xm-labs-bmc-remedy-9)

### Remedy - On Demand
Remedy On Demand is the cloud based solution for the Remedy ITSM platform. This itegration features notifications as well as response options that take action in Remedy. 
* [Closed loop integration to Remedy On Demand](https://github.com/xmatters/xm-labs-remedyondemand)

## Chef
### Chef Server
Whether you have five or five thousand servers, Chef lets you manage them all by turning infrastructure into code. This integration lets you integrate xMatters and Chef Server at the Recipe level.
* [Integration with Chef Server](https://github.com/xmatters/xm-labs-chef-server)

### Chef Automate - Compliance
This specific integration provides details on integrating with Chef Automate Compliance.
* [Chef Automate Compliance integration](https://github.com/xmatters/xm-labs-chef-automate-compliance-webhook)

### Chef Automate - Generic Webhook
This specific integration provides details on integrating with Chef Automate Generic Webhook. 
* [Chef Automate - Generic Webhook](https://github.com/xmatters/Chef-Automate-Generic-Webhook)

## Dynatrace
### Dynatrace
Dynatrace is a leading performance and application monitoring application. This integration extends the alerting capabilities to use xMatters.
* [Closed loop integration with Dynatrace](https://github.com/xmatters/xm-labs-dynatrace)

### AppMon
Dynatrace Application Monitoring provides all performance metrics in real time and detects and diagnoses problems automatically.
* [Dynatrace AppMon](https://github.com/xmatters/xm-labs-dynatrace-appmon)

## Jenkins
Jenkins is the leading automation server. This integration allows recipients to respond to notifications from xMatters and update their builds in Jenkins.
* [Closed-loop integration with Jenkins](https://github.com/xmatters/xm-labs-jenkins)

## Loggly
Loggly is a SaaS solution for log data management. This one-way integration will notify recipients about trends that Loggly notices in log files.
* [One-way integration with Loggly](https://github.com/xmatters/xm-labs-loggly)

## Logz.io
[Logz.io](https://logz.io/) is a cloud based implementation of the ELK stack. Using a Logz.io trial instance, this integration demonstrates the ease of passing log alerts into xMatters.
* [One-way integration with Logz.io](https://github.com/xmatters/xm-labs-logz.io-elk)

## Nagios
Nagios is the tried and true monitoring application in use far and wide. This integration expands the notifications to leverage xMatters.
* [One-way integration with Nagios](https://github.com/xmatters/xm-labs-nagios)

## OverOps
OverOps is a leading monitoring solution that provides direct insight into code level issues. This one-way integration sends events into xMatters using the Webhook alerts feature in OverOps.
* [One-way integration for OverOps](https://github.com/xmatters/xm-labs-overops)

## SalesForce
SalesForce is ... well, it's SalesForce. With this integration, you can find out who is on call in xMatters to handle a new case whenever one is created.
* [Who's On Call for SalesForce Case Management](https://github.com/xmatters/xm-labs-salesforce)

## SolarWinds
### Librato
Librato provides real time monitoring dashboards to easily see and be alerted to any anomalous behavior. 
* [One-way integration to Librato](https://github.com/xmatters/xm-labs-librato)

### Papertrail
Papertrail is a cloud-hosted log management for faster troubleshooting of infrastructure and application issues.
* [Alerts from Papertrail](https://github.com/xmatters/xm-labs-Papertrail)

## Stackdriver
Google Cloud's monitoring, logging and alerting platform gets the xMatters treatment. Use this one-way integration to send Stackdriver alerts to recipients via xMatters.
* [One-way integration to Stackdriver](https://github.com/xmatters/xm-labs-stackdriver)

## ServiceNow
Our integration with ServiceNow is available via the ServiceNow store (see our [Support site](https://support.xmatters.com/hc/en-us/articles/213078983) for full details), but we're still working on making it better, and we have a couple of cool enhancements already. 

### Inform with xMatters
* [Inform with xMatters](https://github.com/xmatters/xm-labs-snow-inform) - An "add-on" for ad-hoc FYI type notifications from ServiceNow. 

### CI Support Groups on Engage form
* [CI Support Groups](https://github.com/xmatters/xm-labs-snow-ci-groups) - An "add-on" for including the upstream and downstream CI groups to the Engage with xMatters form. 

## Slack
Slack is a fantastic chat application that's insanely - and deservedly - popular. We've put together a script library for use with the xMatters Integration Builder to help you interact easily with the Slack API hooks and endpoints.
* [Shared library for Slack](https://github.com/xmatters/xm-labs-slack)

## CA Unified Infrastructure Manager
CA UIM is a network management solution that monitoring availability and performance. This is a closed-loop integration that sends events into xMatters using a UIM probe, and sends response information back to the originating UIM ticket.
* [Closed-loop integration for CA UIM](https://github.com/xmatters/xm-labs-ca-uim) 

## Zabbix
Zabbix is an open-source network monitoring solution. This integration extends the alerting capabilities to use xMatters, and sends response comments back to Zabbix.
* [Complete integration with Zabbix](https://github.com/xmatters/xm-labs-zabbix)
