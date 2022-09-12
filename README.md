# Online_Music_Store
Course project support online browsing and listening music, shop chart, checkout system.

## Features
jQuery, Node.js, Express.js, MongoDB, and ReactJS
    [DONE]    Login page
    [DONE]    Create account page
    [DONE]    Verifying user’s login into the system (verifyLogin.php)
    [DONE]    Users’ account creation (create.php) 
    [DONE]    Main page, category page, music information page 
    [DONE]    Cart page 
    [DONE]    Checkout page 
    [DONE]    Logout in “logout.php” (0.5 points)
## Build
(1) start the MongoDB database:
```sh
    mongod --dbpath ./MongoDB
    mongoimport --db music-store -c Music --file ./data.json --jsonArray
```
(2.1) start the Web server:
```sh
    cd server
    npm start
```
(2.2) start the ReactJS:
```sh
    cd frontend
    yarn build
    yarn start
```
(3) access the main page of the Web application.
    once you `yarn start` the web page will auto open otherwise http://localhost:3000/
