const { Octokit } = require("@octokit/core");

console.log('11')

const octokit = new Octokit({ 
  auth: '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' 
});

// const response = await octokit.request("GET /orgs/DX-Lab-org/repos", {
//   org: "octokit",
//   type: "private",
// });
// console.log(response)

const res = octokit.request('GET /user/orgs', {})
console.log(res)