# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Tickets

## 1. Add custom agent ids to database

### Acceptance Criteria

DB must be able to store custom agent ids for each agent
custom agent ids are unique
adding this column should not break existing functionality as db changes could go live first and app changes some time later

### Implementation Details

get the access and priveleges to db
take a backup of db
add a new column to Agents table for custom agent id

### Effort Estimate

1 day

## 2. Database migration script to add custom agent id column

### Acceptance Criteria

database migration scripts must be updated to add the custom agent id column to Agents table.
since the Facilities have not provided the information at this point, use current id value for each user and next ticket will provide a way for updating this information

### Implementation Details

take backup of db
make sure you have access and priveleges to perform db changes
update the database igration scripts to add custom agent id column to Agents table

### Effort Estimate

1 day

## 3. UI feature to allow Facilities to enter custom agent ids

### Acceptance Criteria

UI should provide Facilities to enter custom agent ids for each agent

### Implementation Details

add a new field to agent form for custom agent id
validate the custom agent id - it should be unique and case-insensitive

### Effort Estimate

1 day

## 4. Update getShiftsByFacility function

### Acceptance Criteria

update getShiftsByFacility function to query using custom id of the agent
Shift object should include custom id

### Implementation Details

update getShiftsByFacility function to modify the database query to include custom id
metadata in Shift object should have custom id of each agent

### Effort Estimate

1 day

## 5. Update generateReport function

### Acceptance Criteria

generateReport function should use custom id of the agent for report generation
PDF report should display custom id

### Implementation Details

change generateReport function to fetch custom id of Agent for each Shift
change report generation logic to use custom id instead of internal database

### Effort Estimate

0.5 day

## 6. End to end testing

### Acceptance Criteria

New feature must work as described/expected. Do all the testing in staging or pre-production environment first. While doing a production rollout make sure the DB copy is taken

### Implementation Details

Create some test cases that tests new feature. If there are end-to-end tests make sure they are run.
If they are not in place then unit tests with thorough manual testing in staging and testing in production after launch, maybe on one particular prod machine.

### Effort Estimate

2 days: before launch and after launch

All estimates include documentation
