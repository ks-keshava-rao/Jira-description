const trigger = require('./actions');
const core = require('@actions/core');
core.info("fetching jira descriptio.....");
trigger.addprdescription()
.catch(error=>{
    core.setFailed(error.message);
});
core.info("fetched successfully");
