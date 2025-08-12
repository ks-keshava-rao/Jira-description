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
            let errorDetails;
            try {
                errorDetails = JSON.stringify(await response.json());
            } catch {
                errorDetails = `Status: ${response.status}, StatusText: ${response.statusText}`;
            }
            throw new Error(`Failed to fetch response from jira api, please check Organisation url , jira token , jira username :::: ${errorDetails}`);
        }
    }
    catch(e){
        core.setFailed(e.message);
        process.exit(1)
    }
}