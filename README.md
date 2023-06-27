Express Cookie Server
This is a simple Express.js application that sets and reads cookies. The server sets a 'name' cookie when the /login endpoint is accessed with a name query parameter. When the /hello endpoint is accessed, the server responds with a personalized welcome message if a 'name' cookie exists.

Setup & Installation:
To use this application, you'll need to have Node.js and npm installed on your machine.

Clone this repository to your local machine using git clone <repo_url>.

Navigate into the project directory cd express-cookie-server.

Install the dependencies using npm install.

Running the Server:
To run the server, use the command npm start. This will start the server on port 8080.

Usage:
To set a 'name' cookie, navigate to http://localhost:8080/login?name=YourName in your browser, replacing 'YourName' with the name you want to set.

To receive a personalized welcome message, navigate to http://localhost:8080/hello. If a 'name' cookie has been set, you'll receive a welcome message like 'Welcome YourName!'. If a 'name' cookie has not been set, you'll see 'No name cookie found'.

Dependencies:
Express.js: A web application framework for Node.js.

cookie-parser: A middleware which parses cookies attached to the client request object.

