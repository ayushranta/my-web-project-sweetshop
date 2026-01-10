# Full Stack Login & Signup Application  
A simple full-stack web application built using **HTML, CSS, JavaScript, AngularJS, Node.js, Express.js, and MySQL**.  
The project allows users to **sign up and log in**, with backend validation and database storage.

---

## 🚀 Features
- User Signup & Login  
- Input validation  
- MySQL database connectivity  
- REST API using Express.js  
- AngularJS-powered frontend  
- Secure folder structure  
- CORS enabled  
- Clean and responsive interface  

---

## 🛠️ Tech Stack
### **Frontend**
- HTML  
- CSS  
- JavaScript  
- AngularJS  

### **Backend**
- Node.js  
- Express.js  

### **Database**
- MySQL (XAMPP / MySQL Workbench)

---

## 📂 Folder Structure
```
project-folder(home)/
│── frontend/
│     ├── index.html
│     ├── login.html
│     ├── style.css
│     └── scripts/
│
│── backend(Node)/
│     ├── server.js
│     ├── package.json
│     ├── package-lock.json
│     └── .gitignore
│
└── README.md
```

---

## 🖼️ Screenshots
<img width="1125" height="600" alt="image" src="https://github.com/user-attachments/assets/a67c6a33-00c1-40a5-aa8b-0044af0f1579" />
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/4db73eda-08ef-4e4c-bebf-853eaa809ad8" />

<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/b894b2e1-b3c7-46d5-84bf-132cec14e595" />
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/0a95dcd1-6baa-4337-855c-669090f47520" />

### **1. Signup Page**
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/2caa79c7-4e68-4f15-81e7-142ad099431c" />

### **2. Login Page and Admin Login Page**
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/99533347-9ea3-42c5-a8ab-04ce109ac04d" />
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/cfde8274-2cbc-4023-bdc1-93ddb400f807" />

### **3. MySQL Table Structure**
<img width="1125" height="371" alt="image" src="https://github.com/user-attachments/assets/67e07324-90fc-4431-a805-2586216c67bd" />

### **4. Admin Dashboard (Update Quantity)**
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/0e794cb1-73b2-4b51-9465-9e6fd181aef2" />

---

## ⚙️ How to Run the Project Locally

### **📌 Step 1: Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
```

### **📌 Step 2: Install Backend Dependencies**
Navigate to backend folder:
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/e62caec2-43ea-4961-bbd3-127947d9ff1e" />

```bash
cd backend
npm install
```

### **📌 Step 3: Start XAMPP**
- Start **Apache**
- Start **MySQL**
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/f85f126a-5791-4283-940d-77f107f89f0e" />

Open phpMyAdmin → create database:
<img width="1125" height="600" alt="image" src="https://github.com/user-attachments/assets/bd43b1a7-7096-4c17-872f-4e0e0a9249be" />

```
user_database
```

Create table:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  dob DATE,
  address VARCHAR(255),
  gender VARCHAR(10),
  email VARCHAR(255),
  password VARCHAR(255)
);
```

### **📌 Step 4: Run Backend Server**
<img width="1125" height="600" alt="image" src="https://github.com/user-attachments/assets/23671e9f-e3a3-49fa-aed9-106715ea6254" />

```bash

node server.js
```

You will see:
```
Server running on http://localhost:3000
Connected to MySQL Database
```

### **📌 Step 5: Run Frontend**
Just open your HTML files directly OR host using Live Server.

---

## 📫 API Endpoints

### **Signup**
```
POST /signup
```
Body:
```json
{
  "name": "",
  "dob": "",
  "address": "",
  "gender": "",
  "email": "",
  "password": ""
}
```

### **Login**
```
POST /login
```
Body:
```json
{
  "email": "",
  "password": ""
}
```

---

## 🎯 Project Highlights
- Simple full-stack architecture  
- Clean API structure  
- Proper MySQL integration  
- Perfect for learning backend connectivity  
- Ideal beginner-level full-stack mini project  

---

## 📄 License
This project is open-source and available for educational use.

