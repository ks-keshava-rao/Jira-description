module.exports = {
    constructBodyTemplate: ({fields,sonarQubeUrl,JiraUrl})=>{
        const { description , summary}=fields;
        const body = `## Description:\n**Summary**: ${summary}\n\n ${description}\n\n## Changed Files:\n$changedFiles\n\n## Jira Ticket:\n${JiraUrl}\n\n## Checklist:\n - [ ]  Code follows the coding style guidelines.\n - [ ] Tests have been added or updated.\n - [ ] Documentation has been updated if necessary.\n\n## Sonar Results:\n${sonarQubeUrl}\n\n## Screenshots:\n\n\n## Additional Notes:\n\n\n## Reference Docs:\n`
        return body;
    }
}