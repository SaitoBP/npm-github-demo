# NPM GitHub Demo

A simple demo of how to use NPM with GitHub.

## Running

1. Create a new GitHub Access Token with those options `read:user, repo, user:email, write:packages`
2. Run `npm login --scope=@saitobp --registry=https://npm.pkg.github.com` and enter your GitHub username, the token from step 1
3. Now you can run `npx @saitobp/npm-github-demo` to run the demo