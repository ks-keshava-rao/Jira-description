const trigger = require('./actions');
const core = require('@actions/core');
trigger.addprdescription()
.catch(error=>{
    core.setFailed(error.message);
});
