# StatusPage Outbound Integration
With this Outbound Integration, notification recipients can quickly create, update and resolve StatusPage incidents, right from the xMatters notification! This document details the installation and usage. 

# Pre-Requisites
* [StatusPage.io](https://www.statuspage.io/) account
* Existing Communications Plan - Use a pre-built integration from the [integrations](https://www.xmatters.com/integrations) page, or [build your own](https://support.xmatters.com/hc/en-us/articles/202396229) 
* xMatters On Demand instance - If you don't have one, [get one](https://www.xmatters.com)! 

# Installation
1. Login to the xMatters instance with a user with the Developer role and navigate to the Communications Plan that will be adding the StatusPage functionality. 
2. Click the Integration Builder tab and in the Shared Libraries section expand the section, if necessary, and click the `+ Add` button
3. Update the name at the top from `My Shared Library` to `StatusPage`, then paste in the contents of the [StatusPage.js](StatusPage.js) file and hit `Save`.
4. Expand the Outbound Integrations section, if necessary, and click the `+ Add` button. (We are going to add a new script here, but don't worry, this will not impact any existing scripts, you can have several Outbound Integrations that all run on Notification Response and they will all run). 
5. Fill out the following details in the wizard:

   | Item | Selection |
   | ---- | ---- |
   | Choose an action | Run a Script |
   | Select a form | \<Choose the appropriate form> |
   | Select a trigger | Notification responses |
   | Integration name | \<Form name> - Outbound Response - StatusPage.io <br/> The Integration name format is arbitrary, but including the Form name and `StatusPage.io` helps fellow developers, at a glance, see what a script does. |
6. Click Save and Open Script Editor.
6. On the Forms tab of the Comm Plan, click the `Edit` > `Responses` option of the relevant Form that will get the StatusPage response options. 
7. Add the following response options with the related attributes. Note that you can change the text displayed, but the code in step NNNN will reference the value in the `Response` column. So make sure the value there matches what the code expects. 

   | Response | Email Description | Voice Prompt | Options  |
   | -------- | ----------------- | ------------ | -------- |
   | Create StatusPage.io Incident | Create StatusPage.io Incident | Create StatusPage.io Incident | Record Response |
   | Update StatusPage.io Incident | Update StatusPage.io Incident | Update StatusPage.io Incident | Record Response |


# Testing
