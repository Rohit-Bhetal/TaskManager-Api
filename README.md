<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">TASKMANAGER-API</h1>
</p>
<p align="center">
    <em><code>► API</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Rohit-Bhetal/TaskManager-Api?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Rohit-Bhetal/TaskManager-Api?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Rohit-Bhetal/TaskManager-Api?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Rohit-Bhetal/TaskManager-Api?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/sharp-99CC00.svg?style=flat&logo=sharp&logoColor=white" alt="sharp">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running TaskManager-Api](#-running-TaskManager-Api)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

<code>► Welcome to the Task Manager API! Here you can find information about how to use the API.
API Version: 1.0.0</code>

---

## 📦 Features

<code>► Available Endpoints</code>

### `/tasks`

Manage tasks. Supports the following methods:

- **GET** `/tasks` - Retrieve a list of tasks
- **POST** `/tasks` - Create a new task

### `/tasks/:id`

Manage specific tasks. Supports the following methods:

- **GET** `/tasks/:id` - Retrieve a specific task
- **PATCH** `/tasks/:id` - Update a specific task
- **DELETE** `/tasks/:id` - Delete a specific task

### `/users`

Manage users. Supports the following methods:

- **POST** `/users` - Create a new user
- **POST** `/users/login` - Login a user
- **POST** `/users/logout` - Logout the current user
- **POST** `/users/logoutAll` - Logout all users

### `/users/me`

Manage the current user's profile. Supports the following methods:

- **GET** `/users/me` - Retrieve the current user's profile
- **PATCH** `/users/me` - Update the current user's profile
- **DELETE** `/users/me` - Delete the current user's account

### `/users/me/avatar`

Manage the current user's avatar. Supports the following methods:

- **POST** `/users/me/avatar` - Upload a new avatar
- **DELETE** `/users/me/avatar` - Delete the current user's avatar
- **GET** `/users/:id/avatar` - Retrieve a user's avatar by ID

---

## 📝 Example Requests

### Get all tasks

```http
GET /tasks


## 📂 Repository Structure

```sh
└── TaskManager-Api/
    ├── controller
    │   ├── authController.js
    │   ├── taskController.js
    │   └── userController.js
    ├── index.js
    ├── middleware
    │   ├── auth.js
    │   └── upload.js
    ├── models
    │   ├── Task.js
    │   └── User.js
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   ├── task.js
    │   └── user.js
    └── utils
        ├── emails
        │   └── account.js
        └── errors
            └── message.js
```

---

## 🧩 Modules

<details closed><summary>📂 Root Files</summary>

| File                                                                                               | Summary                                                                                         |
| ---                                                                                                | ---                                                                                             |
| [package.json](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/package.json)           | Contains metadata about the project, including dependencies and scripts used for development.   |
| [index.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/index.js)                   | The entry point of the application. Sets up the server, middleware, and routes.                 |
| [package-lock.json](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/package-lock.json) | Ensures that the exact versions of dependencies are installed, locking them for consistency.    |

</details>

<details closed><summary>🛠️ Middleware</summary>

| File                                                                                          | Summary                                                                                        |
| ---                                                                                           | ---                                                                                            |
| [auth.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/middleware/auth.js)     | Handles authentication and authorization, including token verification and user validation.    |
| [upload.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/middleware/upload.js) | Manages file uploads, including validation and storage of uploaded files.                      |

</details>

<details closed><summary>🎯 Controller</summary>

| File                                                                                                          | Summary                                                                                        |
| ---                                                                                                           | ---                                                                                            |
| [authController.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/controller/authController.js) | Manages user authentication processes, including login, registration, and password management. |
| [userController.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/controller/userController.js) | Contains logic for user management, including CRUD operations for user data.                   |
| [taskController.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/controller/taskController.js) | Handles task-related operations, including creation, update, retrieval, and deletion of tasks. |

</details>

<details closed><summary>⚠️ Utils.Errors</summary>

| File                                                                                              | Summary                                                                                           |
| ---                                                                                               | ---                                                                                               |
| [message.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/utils/errors/message.js) | Provides utility functions for handling and formatting error messages throughout the application. |

</details>

<details closed><summary>📧 Utils.Emails</summary>

| File                                                                                              | Summary                                                                          |
| ---                                                                                               | ---                                                                              |
| [account.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/utils/emails/account.js) | Contains functions for sending email notifications related to account activities.|

</details>

<details closed><summary>📦 Models</summary>

| File                                                                                  | Summary                                                                                       |
| ---                                                                                   | ---                                                                                           |
| [Task.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/models/Task.js) | Defines the schema and model for tasks, including validation and methods for task operations. |
| [User.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/models/User.js) | Defines the schema and model for users, including validation and methods for user operations. |

</details>

<details closed><summary>🛤️ Routes</summary>

| File                                                                                  | Summary                                                                                        |
| ---                                                                                   | ---                                                                                            |
| [user.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/routes/user.js) | Defines routes for user-related operations, including endpoints for user CRUD actions.         |
| [task.js](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/master/routes/task.js) | Defines routes for task-related operations, including endpoints for task CRUD actions.         |

</details>


## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the TaskManager-Api repository:

```sh
git clone https://github.com/Rohit-Bhetal/TaskManager-Api
```

2. Change to the project directory:

```sh
cd TaskManager-Api
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running TaskManager-Api

Use the following command to run TaskManager-Api:

```sh
node index.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🛠 Project Roadmap

- [X] `► Build a Frontend and connect the API`
- [ ] `► None`
- [ ] `► None`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Rohit-Bhetal/TaskManager-Api/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Rohit-Bhetal/TaskManager-Api/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Rohit-Bhetal/TaskManager-Api/issues)**: Submit bugs found or log feature requests for Taskmanager-api.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Rohit-Bhetal/TaskManager-Api
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the None 😂

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

## 🛠 Deployment
Access the Deployed Server : https://taskmanager-api-tnxq.onrender.com

---
