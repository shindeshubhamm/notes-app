# notes-app
### First node js project

#### Dependencies
1. [Yargs](https://www.npmjs.com/package/yargs)
1. [Chalk](https://www.npmjs.com/package/chalk)
1. [fs](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html)

#### Usage:
Install dependencies:
```bash
npm install
```
Following commands can be used to run the project:

#### Using commands
```bash
node app.js add --title='Your note title' --body='Your note body'
node app.js remove --title='Your note title'
node app.js list
node app.js read --title='Your note title'
```

#### Using aliases
```bash
node app.js add -t='Your note title' -b='Your note body'
node app.js remove -t='Your note title'
node app.js list
node app.js read -t='Your note title'
```