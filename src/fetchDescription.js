
const { error } = require('@actions/core');
const util = require('./util')
module.exports = async({authToken,jiraApiUrl}) => {
    try{
    const response = await fetch(jiraApiUrl,{
        headers:{ 
            Authorization: `Basic ${authToken}` } 
        });
        if(response.ok){
             const { fields } = await response.json() ; 
             console.log('fields :::',fields);
             return fields;
        }
        else{
            throw new Error(`Failed to fetch response from jira api :: ${response}`);
        }
    }
    catch(e){
        core.setFailed(e.message);
    }
}