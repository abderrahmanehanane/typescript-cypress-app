# typescript-cypress-app

## Steps to start the project

- [Make sure you have node installed](#step1)
- [Clone the project](#step2)
- [Install the project dependencies](#step3)
- [The commands](#step4)

### <a name="step1"></a> Step 1: Make sure you have node 6 installed
```bash
node -v     
npm -v      
```
### <a name="step2"></a> Step 2: Clone the project
```bash
git clone https://github.com/abderrahmanehanane/typescript-cypress-app.git typescript-cypress-app
cd typescript-cypress-app
```
### <a name="step3"></a> Step 3: Install the project dependencies
```bash
yarn install
```
### <a name="step4"></a> Step 4: The commands
```bash
yarn run cypress open                         # Open cypress test runner
npx cypress run                               # Run tests in CLI
npx cypress run --reporter mochawesome        # Run test in CLI and generate HTML report
```
