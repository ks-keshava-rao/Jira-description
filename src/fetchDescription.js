const core = require('@actions/core');
module.exports = async({authToken,jiraApiUrl}) => {
    try{
    core.info('fetching...')
    const response = await fetch(jiraApiUrl,{
        headers:{ 
            Authorization: `Basic ${authToken}` } 
        });
        if(response.ok){
             const { fields } = await response.json() ; 
             return fields;
        }
        else{
            throw new Error(`Failed to fetch response from jira api :: ${response}`);
        }
    }
    catch(e){
        core.setFailed(e.message);
        process.exit(1)
    }
}