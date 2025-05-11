# 📚 BookBazaar

BookBazaar is a full-stack digital book catalog web application built with **Django REST Framework** and **React**. It demonstrates core full stack development skills, including API design, frontend-backend integration, form handling, and state management.

---

## 🎯 Project Purpose

This project was created as part of my journey transitioning from a Junior Solution Architect into a Full Stack Developer.

It is intended to showcase:

- My ability to architect and implement full stack applications
- Practical use of modern web technologies
- Real-world developer workflow using Git, VS Code, and GitHub

---

## 🧰 Tech Stack

### 🔙 Backend – Django + Django REST Framework

- Python 3.13.3
- Django 5.2.1
- Django REST Framework
- PostgreSQL (can be swapped with SQLite for development)
- Django CORS Headers (for frontend-backend communication)

### 🔜 Frontend – React

- React (with functional components and hooks)
- JavaScript (ES6+)
- HTML/CSS (basic styling)
- Fetch API (for REST calls)

### 🧪 Tools

- VS Code (IDE)
- Git & GitHub (version control)
- Postman (for testing API endpoints)
- pgAdmin / SQLite Browser (database visualization)

---

## 📁 Project Structure

bookbazaar/
├── backend/ # Django project (API & admin)
│ ├── bookbazaar/ # Project settings
│ ├── books/ # App containing models, views, serializers
│ ├── manage.py
│ └── requirements.txt
│
├── frontend/ # React application
│ ├── public/
│ └── src/
│ ├── App.js
│ ├── index.js
│ └── index.css
│
└── README.md # You're here


---

## 🔧 Setup & Installation Guide

> Ensure Python 3.13.3, Node.js, and Git are installed on your system.

### 📦 Backend Setup (Django)

```bash
cd backend
python -m venv venv
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (optional, for admin access)
python manage.py createsuperuser

# Start the backend server
python manage.py runserver

API will be available at: http://localhost:8000/api/books/

### 📦 Frontend Setup (React)

```bash
cd frontend
npm install
npm start

Frontend will run on: http://localhost:3000



✅ Features
- View all books
- Submit a new book (title, author, genre, rating, description)
- API-first backend with JSON responses
- Clean and simple frontend UI
- Full CRUD-ready architecture (Add, Read, Update, Delete)


💡 Skills Demonstrated
- Full Stack Application Architecture
- REST API Design using Django REST Framework
- React Hooks (useState, useEffect)
- Form handling and validation
- API Integration (GET, POST requests)
- JSON data modeling
- Environment setup for React and Django projects
- CORS handling between frontend and backend
- Git-based version control
- Debugging and testing with browser tools/Postman

📷 Screenshots
"See screenshorts folder"

🤝 Author
Jonathan Rikhotso
📍 South Africa
🎯 Solution Architect
🔗 LinkedIn: https://www.linkedin.com/in/jonathanrikhotso/

🌐 How to View
Anyone can clone this repository or view the code by visiting:
🔗 https://github.com/your-username/bookbazaar
