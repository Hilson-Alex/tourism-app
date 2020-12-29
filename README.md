This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Tourism App

A Tourism place recommendation frontend for our Case-based reasoning intelligence to recommend places to visit. This project is just the frontend, you can see the backend [here](https://github.com/Hilson-Alex/tourism_api) or the entire project [here](https://github.com/Hilson-Alex/tourism-ai).

## Getting Started

If you want to see this working you can open https://tourism-reco-app.herokuapp.com/ and see it working. 

We use places from **Santa Catarina - Brazil** cause it's the place where we live.

### Installing

We highly recommend that, if you want to run  this project locally, look for [our project with frontend and backend instead](https://github.com/Hilson-Alex/tourism-ai).

With that in mind, if you want to run this, and only this project, all you have to do is:
```bash
git clone https://github.com/Hilson-Alex/tourism-app.git
cd ./tourism-app
npm install
npm run start
```
this will run the api in the port 3000.
By default, it requests to our heroku backend in https://tourism-reco-api.herokuapp.com/, but you can set an environment variable in a .env file named REACT_APP_API_URL to set your backend URL.

## Authors
This code was implemented by:
* [@Hilson-Alex](https://github.com/Hilson-Alex)
* [@rick32132](https://github.com/rick32132)
* [@TheMarhsall007](https://github.com/TheMarhsall007)
* And Bruna Rebello, who doesn't have an account at the moment this was posted

## License
This project is under the MIT License, that you can see in [LICENSE](/LICENSE) file
