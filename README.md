# CommunityDayML
CommunityDay Machine Learning
## Two Projects
### Model
Deploy the model first
cd model
ibmcloud app push
there is a manifest.yml that will deploy the app to https://communitydaymlpythonservice.mybluemix.net/api

### React App
The React FE is at the client
the manifest for deploying is the client
Deploy the client
cd client
ibmcloud app push
when running locally, remember to copy client/package.json.local to
package.json to get the proxy set correctly

Author: Tony Efremenko
