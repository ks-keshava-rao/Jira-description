const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");
async function addprdescription() {
    const token = core.getInput('token');
    const jiraId = core.getInput('jiraId');
    const orgUrl = core.getInput('orgUrl');
    const jiraToken = core.getInput('jiraToken');
    const sonarQubeUrl = core.getInput('sonarQubeUrl')
    const jiraUsername = core.getInput('JiraUsername')
    const client = new Octokit(
        {
            auth: token
        });
    const { context } = github;
    const pull_number = context.payload.pull_request.number;
    const owner = context.payload.repository.owner.login;
    const repo = context.payload.pull_request.base.repo.name;
    const body = "This is a test description in a paragraph\n\n*Why*\nThis denotes what is the issue\n\n*What*\nThis means how the problem is solved and what are the changes that have been done to solve the issue and what was the approach \n\n* test description with new changes and new description\n* test description with second changes .\n\n[https://mail.google.com/mail/u/0/?ogbl#inbox|https://mail.google.com/mail/u/0/?ogbl#inbox]"
    // const repo = context.repo.repo;
    console.log("context , pr :::", context);
    console.log("pr no ", pull_number);
    console.log("owner ", owner);
    console.log("repo ", repo);
    // const JiraApiUrl = `${orgUrl}/rest/api/2/issue/${jiraId}` ;
    try {
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
addprdescription();
