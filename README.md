📇 User Management System (Full Stack)

A full-stack user management system built using Node.js, Express.js, and MongoDB Atlas. This project demonstrates core backend development concepts such as CRUD operations, RESTful APIs, and cloud database integration.

🚀 Features
Create new users
Read / view all users
Update existing user details
Delete users
MongoDB Atlas cloud database integration
RESTful API architecture
Express.js backend server
🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB Atlas
ODM: Mongoose
Tools: Nodemon, dotenv
📁 Project Structure
project-folder/
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── controllers/
│   └── userController.js
│
├── config/
│   └── db.js
│
├── app.js
├── package.json
└── .env
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/user-management-system.git
2. Navigate into the project
cd user-management-system
3. Install dependencies
npm install
4. Create .env file
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
5. Start the server
npm start

or (for development)

npm run dev
📡 API Endpoints
Method	Route	Description
GET	/users	Get all users
GET	/users/:id	Get user by ID
POST	/users	Create a new user
PUT	/users/:id	Update user
DELETE	/users/:id	Delete user
🧠 What I Learned
Building RESTful APIs with Express.js
Performing CRUD operations with MongoDB
Using Mongoose for schema modeling
Structuring a Node.js backend project
Connecting cloud database (MongoDB Atlas)
📌 Future Improvements
Add authentication (JWT)
Add frontend (React.js)
Input validation & error handling
Pagination & search feature
👨‍💻 Author

Mahi Gupta

GitHub: https://github.com/your-username
LinkedIn: https://linkedin.com/in/your-profile
⭐ If you like this project

Give it a ⭐ on GitHub and feel free to contribute!
