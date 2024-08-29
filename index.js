require('dotenv').config();
const express = require('express');
const mongoose= require('mongoose');
const multer = require('multer');
const userRouter=require('./routes/user')
const taskRouter=require('./routes/task');
const cors =require('cors')

const app =express();
const port = process.env.PORT || 3000;

//MIddlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

//Routes



//Entry Point 
// Entry point route as a documentation page
app.get('/', (req, res) => {
    res.send(`
      <html>
    <head>
      <title>Task Manager API Documentation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        h1 { color: #333; }
        h2 { color: #666; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <h1>Task Manager API Documentation</h1>
      <p>Welcome to the Task Manager API! Here you can find information about how to use the API.</p>
      <h2>API Version: 1.0.0</h2>
      <h2>Available Endpoints</h2>
      <ul>
        <li>
          <h3>/tasks</h3>
          <p>Manage tasks. Supports the following methods:</p>
          <ul>
            <li><strong>GET /tasks</strong> - Retrieve a list of tasks</li>
            <li><strong>POST /tasks</strong> - Create a new task</li>
          </ul>
        </li>
        <li>
          <h3>/tasks/:id</h3>
          <p>Manage specific tasks. Supports the following methods:</p>
          <ul>
            <li><strong>GET /tasks/:id</strong> - Retrieve a specific task</li>
            <li><strong>PATCH /tasks/:id</strong> - Update a specific task</li>
            <li><strong>DELETE /tasks/:id</strong> - Delete a specific task</li>
          </ul>
        </li>
        <li>
          <h3>/users</h3>
          <p>Manage users. Supports the following methods:</p>
          <ul>
            <li><strong>POST /users</strong> - Create a new user</li>
            <li><strong>POST /users/login</strong> - Login a user</li>
            <li><strong>POST /users/logout</strong> - Logout the current user</li>
            <li><strong>POST /users/logoutAll</strong> - Logout all users</li>
          </ul>
        </li>
        <li>
          <h3>/users/me</h3>
          <p>Manage the current user's profile. Supports the following methods:</p>
          <ul>
            <li><strong>GET /users/me</strong> - Retrieve the current user's profile</li>
            <li><strong>PATCH /users/me</strong> - Update the current user's profile</li>
            <li><strong>DELETE /users/me</strong> - Delete the current user's account</li>
          </ul>
        </li>
        <li>
          <h3>/users/me/avatar</h3>
          <p>Manage the current user's avatar. Supports the following methods:</p>
          <ul>
            <li><strong>POST /users/me/avatar</strong> - Upload a new avatar</li>
            <li><strong>DELETE /users/me/avatar</strong> - Delete the current user's avatar</li>
            <li><strong>GET /users/:id/avatar</strong> - Retrieve a user's avatar by ID</li>
          </ul>
        </li>
      </ul>
      <h2>Example Requests</h2>
      <h3>Get all tasks</h3>
      <pre><code>GET /tasks</code></pre>
      <h3>Create a new task</h3>
      <pre><code>POST /tasks
    {
      "title": "New Task",
      "description": "Task description"
    }</code></pre>
      <h2>Response Formats</h2>
      <p>All responses are in JSON format.</p>
      <p>For more detailed API documentation, visit: <a href="https://github.com/Rohit-Bhetal/TaskManager-Api">API Documentation</a></p>
    </body>
</html>

    `);
  });


  //Routes

  app.use(userRouter);
  app.use(taskRouter);
  
  // Error handling for undefined routes
  app.use((req, res, next) => {
    res.status(404).send('Route not found');
  });

//Connect to MongoDb and Start the Server
mongoose.connect(process.env.MONGODB_URI,{
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Connected");
    app.listen(port,()=>{
        console.log(`Server running at PORT:${port}`)
    })
}).catch(error=>{
    console.log(error);
})