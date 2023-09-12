# HNG Nodejs CRUD API README

This README provides step-by-step instructions for setting up and running a Node.js API using Express, MongoDB, and Mongoose. The API is designed to handle CRUD operations for a "Person" resource.

## Prerequisites

Before setting up the API, ensure you have the following prerequisites installed on your system:

- Node.js: Download and install Node.js from [nodejs.org.](https://nodejs.org/en/download)
- Mongo DB: Create your Mongo Atlas and retrieve your connection string. (If you can't create yours, I have provided a sample connection string in the `.env.example` file).
- Code Editor: Use a code editor like Visual Studio Code, Sublime Text, or any of your choice.

## Getting Started

Follow these steps to set up and run the Node.js API:

1. **Clone the repository** <br>
   Clone the repository containing your Node.js API code to your local machine. <br>

   ```copy
   git clone https://github.com/samuelorobosa/hngx2.git
   cd hngx2
   ```

2.  **Install dependencies** <br>
    Install the required Node.js packages by running the following command in your project directory: <br>

   ```copy
   npm install
   ```
   
3.   **Environment Variables** <br>
    Copy the file named `.env.example` and create your `.env` file with its contents.  
    <br/>
4. **Run the API** <br>
   Start the Node.js API by running the following command:

     ```copy
   npm start
   ```
   This will start the API server, and you should see a message like "App started on PORT 8000" in your console.  
   <br/>
5. **API Endpoints** <br>
   Your API is now up and running. It exposes the following endpoints for managing "Person" resources:  
   <br/>
   - POST /api: Create a new person.
   - GET /api/:user_id: Get information about a specific person.
   - PUT /api/:user_id: Update information about a specific person.
   - DELETE /api/:user_id: Delete a specific person.

# You've successfully set up and started your Node.js CRUD API.
# Happy Hacking!
