const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

const token = core.getInput('token');
const jiraId = core.getInput('jiraId');
const orgUrl = core.getInput('orgUrl');
const jiraToken = core.getInput('jiraToken');
const sonarQubeUrl = core.getInput('sonarQubeUrl')
const jiraUsername = core.getInput('JiraUsername')
const client = new Octokit(
                    {auth: token
                });
const { context } = github;
const pull_number = context.payload.pull_request.number;
const owner = context.payload.repository.owner.login ;
const repo = context.payload.pull_request.base.repo.name;
// const repo = context.repo.repo;
console.log("context , pr :::" , context);
console.log("pr no " , pull_number);
console.log("owner " , owner);
console.log("repo " , repo);
// const JiraApiUrl = `${orgUrl}/rest/api/2/issue/${jiraId}` ;
try {
//  console.log(owner,repo,pull_number);
}
catch(e){
    core.setFailed(`process failed with ::: ${e.message}`);
}