module.exports = {
    constructBodyTemplate: ({fields,sonarQubeUrl,JiraUrl})=>{
        const { description , summary} = fields;
        const body = `# Description\n\n### ${summary}\n\n ${description}\n\n## Jira Ticket\n${JiraUrl}\n\n${ sonarQubeUrl ? `\n\n## Sonar Results:\n${sonarQubeUrl}`:""}\n\n## Checklist:\n - [ ] Code follows the coding style guidelines.\n - [ ] Tests have been added or updated.\n - [ ] Documentation has been updated if necessary.`
        return body;
    }
}