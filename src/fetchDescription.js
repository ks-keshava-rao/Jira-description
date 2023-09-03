module.exports = async({authToken,jiraApiUrl}) => {
    const response = await fetch(jiraApiUrl,{
        headers:{ 
            Authorization: `Basic ${authToken}` } 
        });
    const { fields } = await response.json() ;
    const {description,summary} = fields;
    return fields;
}