# notes-app
### First node js project
1. Yargs
1. Chalk
1. fs

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