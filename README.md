📌 Team Task Manager (Full Stack)
A full-stack role-based task management web application where users can create projects, manage teams, assign tasks, and track progress efficiently.

🚀 Live Demo
Frontend
Add your deployed frontend link here.

Backend API
Add your deployed backend API link here.

👨‍💻 Developer Information
Name: Saurabh Mishra
Email: saurabhrk2001k@gmail.com

✨ Features
🔐 Authentication
User Signup & Login

JWT-based Authentication

Secure Password Hashing using bcrypt

Protected Routes

👥 Team & Project Management
Create Projects

Add Team Members

Manage Team Collaboration

Project Dashboard

📋 Task Management
Create Tasks

Assign Tasks to Team Members

Update Task Status

Track Task Progress

🎨 User Interface
Modern and Responsive UI

Dynamic Dashboard

Attractive and Professional Design

🛠️ Tech Stack
Frontend
React.js

React Router DOM

Axios

CSS

Backend
Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt.js

Deployment
Railway

📂 Project Structure
Team-Task-Manager/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone <your-repository-link>
cd Team-Task-Manager
2️⃣ Setup Backend
cd backend
npm install
Create a .env file inside the backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run Backend:

npm start
3️⃣ Setup Frontend
cd frontend
npm install
npm run dev
🌐 API Endpoints
Authentication
POST /api/auth/register → Register User

POST /api/auth/login → Login User

Tasks
POST /api/tasks/create → Create Task

GET /api/tasks → Get All Tasks

PUT /api/tasks/:id → Update Task

DELETE /api/tasks/:id → Delete Task

📄 License
This project is for educational and portfolio purposes.


