const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");
const fetchDescription = require('./fetchDescription')
const util = require('./util');
const addprdescription = async() => {
    try {
        const token = core.getInput('token',{required:true});
        const jiraId = core.getInput('jiraId',{required:true});
        const orgUrl = core.getInput('orgUrl',{required:true});
        const jiraToken = core.getInput('jiraToken',{required:true});
        const orgSonarQubeUrl = (core.getInput('sonarQubeUrl',{required:false}) || false);
        const jiraUsername = core.getInput('JiraUsername',{required:true});
        const authToken = Buffer.from(`${jiraUsername}:${jiraToken}`).toString('base64');
        const client = new Octokit({
            auth: token
        });
        const { context } = github;
        const pull_number = context.payload.pull_request.number;
        const owner = context.payload.repository.owner.login;
        const repo = context.payload.pull_request.base.repo.name;
        const jiraApiUrl = `${orgUrl}/rest/api/2/issue/${jiraId}`;
        const JiraUrl = `${orgUrl}/browse/${jiraId}`;
        const sonarQubeUrl = (orgSonarQubeUrl ? `${orgSonarQubeUrl}/dashboard?id=${repo}&pullRequest=${pull_number}` : "");
        const fields = await fetchDescription({
             authToken,
             jiraApiUrl
            });
        const body = util.constructBodyTemplate({
            fields,
            JiraUrl,
            sonarQubeUrl
        });
        core.info(`body ::: ${body}`);
        await client.rest.pulls.update({
            owner,
            repo,
            pull_number,
            body,
        })
    }
    catch (e) {
        core.setFailed(`process failed with ::: ${e.message}`);
    }
}
module.exports = {
    addprdescription
}
