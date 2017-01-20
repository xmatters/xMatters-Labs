# StatusPage Outbound Integration
With this Outbound Integration, notification recipients can quickly create, update and resolve StatusPage incidents, right from the xMatters notification! This document details the installation and usage. 

# Pre-Requisites
* [StatusPage.io](https://www.statuspage.io/) account
* Existing Communications Plan - Use a packaged integration from the [integrations](https://www.xmatters.com/integrations) page, or [build your own](https://support.xmatters.com/hc/en-us/articles/202396229) 
* xMatters account - If you don't have one, [get one](https://www.xmatters.com)! 

# Files
* [StatusPage.js](StatusPage.js) - This is the code for the Shared Library that abstracts the interactions with StatusPage to a higher level. 
* [OutboundResponseScript.js](OutboundResponseScript.js) - This is the Outbound Response script that accepts the response from the notification recipient, inspects the response option selected and, if necessary, makes the function calls to the StatusPage shared library to then make the updates 

# Installation
## Get StatusPage Token

## Add Outbount Integration
1. Login to the xMatters instance with a user with the Developer role and access to update the target Comm Plan. Click the Developer tab and click Edit > Integration Builder for the target Comm Plan. 
2. Expand the Shared libraries section (if necessary) and click the `+ Add` button
3. Update the name at the top from `My Shared Library` to `StatusPage`, then paste in the contents of the [StatusPage.js](StatusPage.js) file and hit `Save`.
4. Expand the Outbound Integrations section (if necessary) and click the `+ Add` button. (We are going to add a new script here, but don't worry, this will not impact any existing scripts as you can have several Outbound Integrations that all run on Notification Response. It is important to add logic to each one to determine if they should fire.). 
5. Fill out the following details in the wizard:

   | Item | Selection |
   | ---- | ---- |
   | Choose an action | Run a Script |
   | Select a form    | \<Choose the appropriate form> |
   | Select a trigger | Notification responses |
   | Integration name | \<Form name> - Outbound Response - StatusPage.io <br/> **Note** The Integration name format is arbitrary, but including the Form name and `StatusPage.io` helps fellow developers, at a glance, see what a script does. |
6. Click Save and Open Script Editor and paste in the contents of the [OutboundResponseScript.js](OutboundResponseScript.js) file. 
7. Click Save and click the X in the upper right. 
6. On the Forms tab of the Comm Plan, click the `Edit` > `Responses` option of the relevant Form that will get the StatusPage response options. 
7. Add the following response options with the related attributes. Note that you can change the text displayed, but the code in the [OutboundResponseScript.js](OutboundResponseScript.js) file will reference the value in the `Response` column. So make sure to update the OutboundResponseScript to reflect the value in the Response column below. Also note that comments (annotations) are only supported on mobile devices. 

   | Response | Email Description | Voice Prompt | Options  |
   | -------- | ----------------- | ------------ | -------- |
   | Create StatusPage.io Incident               | Create StatusPage.io Incident               | Create StatusPage.io Incident  | Record Response |
   | Update StatusPage.io Incident with Comment  | Update StatusPage.io Incident with Comment  | Update StatusPage.io Incident with Comment | Record Response |
   | Resolve StatusPage.io Incident              | Resolve StatusPage.io Incident | Resolve StatusPage.io Incident | Record Response |


# Testing

Testing the changes will differ based on the Comm Plan used, but new events will have three new response options. For example:

First, select the `Create StatusPage.io Incident` option to generate the Incident. Then use the `Update StatusPage.io Incident with Comment` option to add a comment to the StatusPage Incident. 
