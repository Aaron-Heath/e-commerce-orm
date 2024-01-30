# e-Commerce ORM
## Description
This application is the API that allows CRUD operations to be performed on the backend service of an e-Commerce website. A recording of the API's functionality can be found [here](https://drive.google.com/drive/u/0/folders/1FAz72FZlz9BXIK-eJ9zcacR76ZAPW1BW).

Built using ExpressJS, Sequelize, and mySQL, api calls to the `api/categories`, `api/products`, and `api/tags` endpoints allows the user to **create**, **read**, **update**, and **delete** specific models depending on the HTTP request type and the data passed to the server. 


## Installation

Clone or fork this repository. Run the schema.sql source file, seed the database using `npm run seed` to prepare the database and server. 

## Usage

The server is prepared to received HTTP requests to serve, change, or delete data. Either implement a front end UI or test the endpoints by manually sending reqeusts or using an application such as Postman. 

## Credits

N/A