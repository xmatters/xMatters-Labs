<img src="media/_Final_xM_Octo-Logo-01.png" width="200" height="200" align="right">

# xMatters-Labs
Welcome to xMatters Labs, the official/unofficial Research and Development wing of xMatters, inc., and home to the most cutting-edge integrations on offer.

These are full integrations, for the xM Labs Steps repo, cruise over [here](https://github.com/xmatters/xMatters-Labs-Flow-Steps)

---------

<kbd>
  <img src="https://github.com/xmatters/xMatters-Labs/raw/master/media/disclaimer.png">
</kbd>

---------

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
  - [Bitbucket Pipelines](#bitbucket-pipelines)
- [AWS](#aws)
   - [Amazon CloudWatch](#amazon-cloudwatch)
   - [EBS Resize](#ebs-resize)
- [BMC](#bmc)
  - [Control - M v9](#control---m-v9)
  - [Remedy Helix](#remedy-helix)
  - [Truesight](#truesight)
- [CA](#CA)
  - [Agile Central](#agile-central)
  - [Unified Infrastructure Manager](#unified-infrastructure-manager)
- [Chef](#chef)
  - [Chef Server](#chef-server)
  - [Chef Automate - Compliance](#chef-automate---compliance)
  - [Chef Automate - Generic Webhook](#chef-automate---generic-webhook)
- [CircleCi](#circleci)
- [Cisco](#cisco)
  - [Prime](#prime)
- [EasyVista](#easyvista)
- [Grafana](#grafana)
- [Graylog](#graylog)
- [HashiCorp](#hashicorp)
  - [Consul](#consul)
  - [Terraform](#terraform)
- [Honeycomb.io](#honeycombio)
- [HP](#hp)
  - [NNMi](#nnmi)
  - [OMi](#omi)
  - [SiteScope](#sitescope)
- [Ivanti](#ivanti)
- [Jenkins](#jenkins)
- [Kiali](#kiali)
- [Lightstep](#lightstep)
- [Loggly](#loggly)
- [LogicMonitor](#logicmonitor)
- [Logz.io](#logzio)
- [ManageEngine](#manageengine)
- [Microsoft](#microsoft)
   - [Azure](#azure)
   - [DevOps Boards](#devops-boards)
   - [DevOps Pipelines](#devops-pipelines)
- [Nagios Core](#nagios-core)
- [Nagios XI](#nagios-xi)
- [Oracle Cloud Control](#oracle-cloud-control)
- [OverOps](#overops)
- [Palo Alto Networks](#palo-alto-networks)
   - [XSOAR](#xsoar)
- [pgDash](#pgdash)
- [Postman](#postman)
- [Prometheus](#prometheus)
- [SalesForce](#salesforce)
- [Sematext](#sematext)
- [Sentry.io](#sentry-io)
- [ServiceNow](#servicenow)
  - [CI Support Groups on Engage form](#ci-support-groups-on-engage-form)
  - [Engage: Problem Management](#engage-problem-management)
  - [Engage: Post to Chat](#engage-post-to-chat)
  - [Event log](#event-log)
  - [Integration Hub](#integration-hub)
  - [Inform with xMatters](#inform-with-xmatters)
  - [Linc](#linc)
  - [Major Incident Module](#major-incident-module)
  - [Service Portal Widget](#service-portal-widget)
- [SignalFx](#signalfx)
- [Site24x7](#site24x7)
- [Slack](#slack)
- [SolarWinds](#solarwinds)
  - [AppOptics](#appoptics)
  - [Librato](#librato)
  - [Papertrail](#papertrail)
- [Spinnaker](#spinnaker) 
- [Splunk](#splunk)
  - [Custom Messages](#custom-messages)
- [Sysdig](#sysdig)  
- [ThousandEyes](#thousandeyes)
- [TravisCI](#travisci)
- [xMatters](#xmatters)
  - [Copy Group](#copy-group)
  - [Clone Event](#clone-event)
  - [Dummy Event Generator](#dummy-event-generator)
  - [Email Parser](#email-parser)
  - [IA-Heartbeat](#ia-heartbeat)
  - [Incomplete Groups](#incomplete-groups)
  - [Initiate by phone](#initiate-by-phone)
  - [JWT](#jwt)
  - [Mass Administer Users](#mass-administer-users)
  - [Post Event Report](#post-event-report)
  - [Post Daily On-call to ChatOps](#post-daily-on-call)
  - [Shift Gaps](#shift-gaps)
  - [Translator](#translator)
  - [Who is on call now?](#who-is-on-call-now)
  - [xAgent Dockerfile](#xagent-dockerfile)
  - [xAgent on Kubernetes](#xagent-on-kubernetes)
  - [xM SOAP](#xm-soap)
  - [xMtoolbox Quick Start](#xmtoolbox-quick-start)
- [Zabbix](#zabbix)

- [Libraries](#libraries)
   - [xmtoolbox](#xmtoolbox-for-nodejs)
   - [python SDK](#python-sdk)


# Integrations
## Alertus
The Alertus integration allows xMatters to make limited desktop notifications. (The integration targets a group or organizational unit in Alertus; it does not add desktop notifications as a device type.)
* [One-way integration with Alertus](https://github.com/xmatters/xm-labs-alertus)

## Atlassian
### Bitbucket Pipelines
Pipelines are a powerful way to kick off build scripts from Bitbucket repos. Be notified and drive workflow on failed builds. 
* [Failed Builds alerts integration with Pipelines](https://github.com/xmatters/xm-labs-bitbucket-pipeline)

# AWS 
## Amazon CloudWatch
CloudWatch is Amazon's monitoring arm for the AWS infrastructure. This is a one way integration to be notified of any alerts from CloudWatch.
* [One-way integration with CloudWatch](https://github.com/xmatters/xm-labs-awscloudwatch)

## EBS Resize
Block storage is a major component of many applications and sometimes it fills up. This workflow submitted to the community uses the Flow Designer to resize the volumes when they fill up. 
* [AWS EBS Resize](https://github.com/linaro-its/xm-labs-aws-ebs-resize)
   
## BMC
### Control - M v9
xM Labs closed loop integration for Control-M 9. For an engineering approved integration to Control-M v8, see [here](https://support.xmatters.com/hc/en-us/articles/202025245). 
* [Closed loop with Control-M 9](https://github.com/xmatters/xm-labs-control-m-9)

### Remedy Helix
Helix is the new framework for working with the BMC tools such as Remedy. This is a new closed loop integration for sending targeted notifications and sending responses. 
* [Closed loop with Remedy Helix](https://github.com/xmatters/xm-labs-remedy-helix-onprem-ondemand)

### Truesight
This integration is for BMC's Truesight, formerly known as BPPM, and extends Truesight with the power and flexibility of the xMatters notification and collaboration platform.
* [Truesight integration](https://github.com/xmatters/xm-labs-bmc-bppm-truesight)

## CA
### Agile Central
Agile Central, formerly known as Rally, provides a hub for teams to collaboratively plan, prioritize and track work on a synchronized cadence.
* [CA Agile Central](https://github.com/xmatters/xm-labs-CA-Agile-Central-Rally)

### Unified Infrastructure Manager
CA UIM is a network management solution that monitoring availability and performance. This is a closed-loop integration that sends events into xMatters using a UIM probe, and sends response information back to the originating UIM ticket.
* [Closed-loop integration for CA UIM](https://github.com/xmatters/xm-labs-ca-uim) 

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

## CircleCi
CircleCi is a CI/CD platform for building anything. This integration adds xMatters notifications to the build pipeline
* [CircleCI - Notifications](https://github.com/xmatters/xm-labs-circleci-orb)

## Cisco
### Prime
This integration polls Prime for new Alarms and will generate events in xMatters for each one. 
* [Cisco Prime closed loop integration](https://github.com/xmatters/xm-labs-cisco-prime)

## EasyVista
Closed loop integration to EasyVista Incidents
* [EasyVista](https://github.com/xmatters/xm-labs-easyvista)

## Grafana
Get xMatters notifications for all metrics in Grafana. 
* [Grafana closed loop integration](https://github.com/xmatters/xm-labs-grafana)

## Graylog
Aggregate logs and trigger alerts into xMatters.
* [Trigger alerts](https://github.com/xmatters/xm-labs-graylog)

## HashiCorp
### Consul
Consul by Hashicorp is a service networking solution to automate network configurations, discover services, and enable secure connectivity across any cloud or runtime.
* [Consul Health Check](https://github.com/xmatters/xm-labs-consul)

### Terraform
* [Terraform one way integration](https://github.com/xmatters/xM-Labs-Terraform)

## Honeycomb.io
The queen of observation platforms, Honeycomb gives you insight into all the dark corners of your application. This integration adds the on-call scheduling and workflow capabilities of xMatters. 
* [Honecomb Alerts](https://github.com/xmatters/xm-labs-honeycomb)

## HP
### NNMi
The HP NNMi closed loop integration triggers based on defined Incident criteria and allows users to take ownership and close Incidents in NNMi.
* [HP NNMi closed loop integration](https://github.com/xmatters/xm-labs-hp-nnmi)

### OMi
The HP OMi closed loop integration provides real-time notifications to quickly respond to critical events.
* [HP OMi closed loop integration](https://github.com/xmatters/xm-labs-hpomi)

### SiteScope
One way integration to SiteScope
* [HP SiteScope](https://github.com/xmatters/xm-labs-sitescope)

## Instana
* [One way integration to Instana Alerts](https://github.com/xmatters/xm-labs-instana)

## Ivanti
Closed loop integration to Ivanti Service Manager Cloud
* [Closed-loop integration with Ivanti](https://github.com/xmatters/xm-labs-ivanti-service-manager-cloud)

## Jenkins
Jenkins is the leading automation server. This integration allows recipients to respond to notifications from xMatters and update their builds in Jenkins.
* [Closed-loop integration with Jenkins](https://github.com/xmatters/xm-labs-jenkins)

## Kiali
Kiali is a service mesh visualization tool for use with Istio. This shared library exposes several API calls from Kiali to enrich the xMatters notifications to include the service relationship information
* [Kiali Visualization](https://github.com/xmatters/xm-labs-kiali)

## Lightstep
Lightstep is a leading observability and APM tool for keeping production systems running. The xMatters integration helps minimize the blast radius.
* [Lightstep integration](https://github.com/xmatters/xm-labs-Lightstep-integration)

## Loggly
Loggly is a SaaS solution for log data management. This one-way integration will notify recipients about trends that Loggly notices in log files.
* [One-way integration with Loggly](https://github.com/xmatters/xm-labs-loggly)

## LogicMonitor
LogicMonitor is a Saas based performance monitoring tool. This integration will trigger notifications based on an alert rule. 
* [LogicMonitor integration](https://github.com/xmatters/xm-labs-LogicMonitor-Integration)

## Logz.io
[Logz.io](https://logz.io/) is a cloud based implementation of the ELK stack. Using a Logz.io trial instance, this integration demonstrates the ease of passing log alerts into xMatters.
* [One-way integration with Logz.io](https://github.com/xmatters/xm-labs-logz.io-elk)

## ManageEngine
This integration for the ManageEngine platform from Zoho brings the power of xMatters to IT Ops and Serice Desk. 
* [One-way integration with ManageEngine](https://github.com/xmatters/xm-labs-manageengine)

## Microsoft

### Azure
Azure is the cloud services offering from Microsoft. This integration is to the monitoring arm of Azure. 
   - [MS Azure](https://github.com/xmatters/xm-labs-azure-monitor)

### DevOps Boards
DevOps boards help keep your team engaged and aware of current priorities. This integration triggers an xMatters workflow when actions are performed on the board. 
   - [DevOps Boards](https://github.com/xmatters/xm-labs-azuredevops-boards)

### DevOps Pipelines
Build web, desktop and mobile applications and deploy to any cloud or on-premises with Azure Pipelines. This integration allows you to trigger a pipeline from xMatters, or have the pipeline trigger xMatters for a pipeline task or release gate. 
   - [DevOps Pipelines](https://github.com/xmatters/xm-labs-azuredevops-pipelines)
   
## Nagios Core
Nagios Core is the tried and true monitoring application in use far and wide. This integration expands the notifications to leverage xMatters. If you are looking for Nagios XI, see [here](https://www.xmatters.com/integration/nagios-xi/)
* [One-way integration with Nagios](https://github.com/xmatters/xm-labs-nagios)

## Nagios XI
Nagios is a long favored monitoring solution for companies across the spectrum. XI adds much functionality and commercial support.
* [Closed loop integration with Nagios XI](https://github.com/xmatters/xm-labs-nagiosxi)

## Oracle Cloud Control
Cloud Control is Oracle's solution for monitoring and managing enterprise clouds and traditional Oracle IT environments from a single console. 
* [Cloud Control](https://github.com/xmatters/xm-labs-oracle-cloud-control)

## OverOps
OverOps is a leading monitoring solution that provides direct insight into code level issues. This one-way integration sends events into xMatters using the Webhook alerts feature in OverOps.
* [One-way integration for OverOps](https://github.com/xmatters/xm-labs-overops)

## Palo Alto Networks

### XSOAR
Trigger notifications to on-call resources from a playbook and then take action in XSOAR based on the user's response.
* [Two-way integration for XSOAR)(https://github.com/xmatters/xm-labs-xsoar)

## pgDash
pgDash provides comprehensive PostgreSQL monitoring. This integration adds xMatters notifications and toolchains from pgDash. 
* [Alerts and Change Alerts from pgDash](https://github.com/xmatters/xm-labs-pgdash)

## Postman
Postman is a great way to play with APIs without writing code. This is a Collection to get you up and running with minimal effort to interact with all the xMatters APIs. 
* [Postman Collection](https://github.com/xmatters/xm-labs-PostMan-APIs)

## Prometheus
Prometheus is a leading open source time series database for getting application and system metrics. This one-way integration uses a webhook to fire AlertManager alerts to xMatters.
* [Prometheus integration](https://github.com/xmatters/xm-labs-prometheus)

## SalesForce
This integration provides some easy to use APEX code and the HTTP Trigger needed to parse the payload from SalesForce. A little work with this one will have you notifying on-call groups in no time. 
* [APEX Trigger and HTTP Trigger for Cases](https://github.com/xmatters/xm-labs-salesforce-casealert)

## Sematext
Sematext is an IT System Monitoring & Management Tools for smart devops teams that want to move faster.
* [Sematext integration](https://github.com/xmatters/xm-labs-sematext-integration)

## Sentry.io
* [Closed loop integration for Sentry.io](https://github.com/xmatters/xm-labs-sentry)

## ServiceNow
Our integration with ServiceNow is available via the ServiceNow store (see our [Support site](https://support.xmatters.com/hc/en-us/articles/213078983) for full details), but we're still working on making it better, and we have a couple of cool enhancements already. 

### Inform with xMatters
* [Inform with xMatters](https://github.com/xmatters/xm-labs-snow-inform) - An "add-on" for ad-hoc FYI type notifications from ServiceNow. 

### CI Support Groups on Engage form
* [CI Support Groups](https://github.com/xmatters/xm-labs-snow-ci-groups) - An "add-on" for including the upstream and downstream CI groups to the Engage with xMatters form. 

### Engage: Problem Management
* [Add Engage with xMatters to Problem Management](https://github.com/xmatters/xm-labs-snow-engage-problem)

### Engage: Post to Chat
* [Post message to Chat](https://github.com/xmatters/xm-labs-snow-engage-chat) - An "add-on" for creating a chat room and posting a link to the Incident.   

### Event log
This integration adds the event status, response and delivery information to a table within ServiceNow. This makes for an easy source of reporting. 
* [Event log for ServiceNow](https://github.com/xmatters/xm-labs-servicenow-event-log)

### Integration Hub
The Integration Hub from ServiceNow allows for easy drag and drop integrations across any table to any product. This integration gives an example for Incident that can be modified for any other table. 
* [ServiceNow Integration Hub](https://github.com/xmatters/xm-labs-integrationhub)

### Linc
The Lean Integration Nerve Center (Linc) is an alternative integration to xMatters from ServiceNow and can support any table in ServiceNow rather than just incidents. 
* [Linc Integration](https://github.com/xmatters/xm-labs-snow_linc)

### Major Incident Module
The Major Incident Module in ServiceNow adds specific functionality around Major Incidents. This integration adds the power of xMatters.
* [Major Incident](https://github.com/xmatters/xm-labs-ServiceNow-Major-Incident-Enhancement)

### Service Portal Widget
The Service Portal in ServiceNow is a framework for building rich self service pages. This is a widget to quickly see the on-call schedule in one (or more) of these pages.  
* [Service Portal Widget](https://github.com/xmatters/xm-labs-servicenow-xm-widget)

## SignalFx
Get alerts from all layers of the microservices of your application with the xMatters integration to SignalFx 
* [Two-way SignalFx integration](https://github.com/xmatters/xm-labs-signalfx)

## Site24x7
Site24x7 provides an array of monitoring capabilities and this integration extends it with the xMatters integration and collaboration platform capabilities. 
* [Site24x7 Integration](https://github.com/xmatters/xm-labs-site24x7)

## Slack
Slack is a fantastic chat application that's insanely - and deservedly - popular. We've put together a script library for use with the xMatters Integration Builder to help you interact easily with the Slack API hooks and endpoints.
* [Shared library for Slack](https://github.com/xmatters/xm-labs-slack)

## SolarWinds
### AppOptics
AppOptics provides next generation insight into your applications. This integration adds xMatters as an alerting method.
* [Closed Loop Integration](https://github.com/xmatters/xm-labs-appoptics)

### Librato
Librato provides real time monitoring dashboards to easily see and be alerted to any anomalous behavior. 
* [One-way integration to Librato](https://github.com/xmatters/xm-labs-librato)

### Papertrail
Papertrail is a cloud-hosted log management for faster troubleshooting of infrastructure and application issues.
* [Alerts from Papertrail](https://github.com/xmatters/xm-labs-Papertrail)

## Spinnaker
This integration with Spinnaker brings the xMatters notification and response engine into the Manual Judgement phase. 
* [Manual Judgements in Spinnaker with xMatters](https://github.com/xmatters/xm-labs-spinnaker)

## Splunk
### Custom Messages
With this revamped Splunk integration, you can add custom meta information to the Splunk alert. 
* [Custom Messages](https://github.com/xmatters/xm-labs-splunk-custom-messages)

## Sysdig
Extend the alerting and notification abilities of Sysdig with this integration. Also includes an Acknowledge response. 
* [Sysdig Alerts](https://github.com/xmatters/xm-labs-sysdig)

## ThousandEyes
ThousandEyes sees all and can send alerts based on a large variety of network related criteria. 
* [Alerts from ThousandEyes](https://github.com/xmatters/xm-labs-thousandeyes)

## TravisCI
* [Trigger build](https://github.com/xmatters/xm-labs-travis-ci)

## xMatters

### Copy Group
A message panel to copy a group. 
* [Copy Group Panel](https://github.com/xmatters/xm-labs-copy-groups)

### Clone Event
Sometimes you just need an easy way to create an event that looks mostly like another one. This is the utility for you.
* [Clone Event](https://github.com/xmatters/xm-labs-event-clone)

### Dummy Event Generator
* [Script to generate some dummy event data](https://github.com/xMTinkerer/xm-labs-dummy-event-generator)

### Email Parser
Email integrations sometimes are the only way to get data out of one application and into xMatters, this integration shows how you can easily parse inbound emails to properly pass properties.
* [Email Parser Helper](https://github.com/xmatters/xm-labs-email-parser)

### IA Heartbeat
This slick integration helps to alert when the Integration Agent misses a heartbeat, indicating it lost connection to xMatters. 
* [IA Heartbeat alerting](https://github.com/xmatters/IA-Heartbeat)

### Incomplete Groups
Harass group supervisors to make sure they have users in their groups
* [Incomplete Groups](https://github.com/xMTinkerer/xm-labs-incomplete-groups)

### Initiate by phone
Levraging the tools of Twilio, this integration kicks off an event initiated by calling into a phone number.
* [Initiate by phone](https://github.com/xmatters/xm-labs-xMatters-By-Phone)

### JWT
JSON Web Tokens are an emerging standard for authenticating with APIs in cloud based systems. This library helps generate them in the integration builder. 
* [JWT in IB](https://github.com/xmatters/xm-labs-jwt)

### Post Daily On-call
Ever wanted a daily post the on-call schedule for some groups into your favorite Slack or MS Teams channel? This integration is for you!
* [Post Daily On-call to ChatOps](https://github.com/xmatters/xm-labs-xMatters-Post-Daily-On-Call-to-Chat-Ops)

### Post Event Report
* [Generate a post event report from xMatters](https://github.com/xmatters/xm-labs-post-event-report)

### Mass Administer Users
A message panel to mass acitivate and deactivate users.
* [Mass Admin Users](https://github.com/xmatters/xm-labs-user-admin-workflow)

### Shift Gaps
Check out this sweet shift gaps notification tool from Paul Dansey. It will find any gaps in the shifts in the groups specified and send a notification with the details. 
* [Shift gap tool](https://github.com/xmatters/xM-Labs-Shift_Gaps)

## Translator
Run time translation for messages!? This integration uses the Google Translation service to translate the individual properties of an event and inserts them into the outgoing notifications. 
* [Event Translator](https://github.com/xmatters/xm-labs-event-translator)

## Who is on call now
Generate a notification with the current on-call schedule for the indicated groups.
* [Who is on call now](https://github.com/xmatters/xm-labs-whos-on-call-now)

### xAgent Dockerfile
Docker is a great way to build secure, resiliant infrastructure. This repo details how to run the xAgent in a container environment.
* [xAgent Dockerfile](https://github.com/xmatters/xm-labs-xAgent-Dockerfile)

### xAgent on Kubernetes
Add the xAgent to your kubernetes cluster for access to kubectl and knative APIs. 
* [xAgent on Kubernetes](https://github.com/xmatters/xm-labs-xagent-on-kubernetes)

### xM SOAP
Previous iterations of some integrations used an older SOAP payload. This is a useful comm plan for demonstrating how to work with SOAP in the integration builder.
* [xM SOAP](https://github.com/xmatters/xm-labs-xMSOAP-Integration)

### xmtoolbox-quick-start
This template node project provides ready-to-use example node.js scripts using xmtoolbox to backup, restore, upload, synconiza data with xMatters and more.
* [xmtoolbox-quick-start](https://github.com/xmatters/xmtoolbox-quick-start)

## Zabbix
Zabbix is an open-source network monitoring solution. This integration extends the alerting capabilities to use xMatters, and sends response comments back to Zabbix.
* [Complete integration with Zabbix](https://github.com/xmatters/xm-labs-zabbix)

# Libraries
## xmtoolbox for node.js
The xmtoolbox exposes all xMatters REST APIs and adds other supporting functions to help with syncronizations, uploads, backups, restorations, and utilitis for working with csv files.
* [xmToolBox](https://www.npmjs.com/package/xmtoolbox)

## Python SDK
The python SDK exposes most of the xMatters REST API as a python3 library installable with pip. 
* [python 3 SDK](https://github.com/xmatters/pyxmatters)

### Example Usage of Python SDK
This repo is an example of how to use the python 3 SDK. 
* [Example usage](https://github.com/xmatters/integrator_py)
