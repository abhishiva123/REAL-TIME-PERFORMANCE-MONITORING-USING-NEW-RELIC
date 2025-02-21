Real-Time Performance Monitoring System

📌 Description

This project is a Real-Time Performance Monitoring System that helps track CPU usage, response time, and error rates using New Relic or Datadog.

It features a React.js frontend, a Node.js/Express backend, and a MongoDB database for user authentication and alert configurations.


---

🚀 Features

✅ Real-time Performance Metrics: Fetch data from New Relic or Datadog APIs.
✅ User Authentication: Secure sign-up and login system with JWT.
✅ Dashboard Interface: Displays key performance metrics visually.
✅ Alerts Management: Users can create alerts for performance thresholds.
✅ Modern UI: Styled with CSS for a sleek and responsive appearance.


---

🛠 Technologies Used

Frontend:

React.js

React Router

Axios


Backend:

Node.js

Express.js

MongoDB

JWT Authentication


Monitoring APIs:

New Relic

Datadog



---

🔧 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/real-time-performance-monitoring.git
cd real-time-performance-monitoring

2️⃣ Backend Setup

cd backend
npm install  # Install dependencies
cp .env.example .env  # Copy and configure environment variables
npm start  # Start the backend server

Ensure MongoDB is running and update .env with your New Relic/Datadog API Keys.

3️⃣ Frontend Setup

cd frontend
npm install  # Install dependencies
npm start  # Start the frontend server

4️⃣ Open the Application

Once both frontend and backend are running, open:
👉 http://localhost:3000


---

📡 API Endpoints

🔑 Authentication

POST /api/auth/register → Register a new user

POST /api/auth/login → Authenticate user and get JWT token


📊 Performance Metrics

GET /api/metrics/newrelic → Fetch performance data from New Relic

GET /api/metrics/datadog → Fetch performance data from Datadog


🚨 Alerts Management

POST /api/alerts/create → Create a new performance alert

GET /api/alerts → Fetch all alerts for a user



---

🚀 Deployment

Deploy Backend (Node.js) to Heroku/VPS

npm install -g pm2  # Install process manager
pm run build  # Build project for production
pm start  # Run in production mode

Deploy Frontend (React) to Vercel/Netlify

npm run build  # Build the React project
vercel deploy  # Deploy using Vercel


---

🛠 Troubleshooting

Issue: API requests failing?
✅ Check your .env file and ensure API keys are correct.

Issue: Database connection error?
✅ Ensure MongoDB is running and correctly configured.

Issue: Frontend not loading?
✅ Check if the backend is running before launching the frontend.



---

📜 License

This project is open-source under the MIT License.


---

💡 Contributions are welcome! Feel free to fork this project and submit a pull request. 🚀
