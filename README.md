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
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/d5e339ae-7723-4a4b-bd17-ed3f1e7b3f4b" />
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/090966a0-17ef-41dc-9b46-798c2d019a49" />
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/245fe01f-7665-4d59-8074-683dbea84ca3" />


### **1. Signup Page**
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/c492f8d1-ebe5-467d-b709-c9328b34750c" />


### **2. Login Page and Admin Login Page**
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/69f918d9-2fbf-4f95-8697-39ab6d98def5" />
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/1f327a4d-efcf-4453-9689-5e1d42c608f1" />

### **3. MySQL Table Structure**
<img width="1125" height="371" alt="image" src="https://github.com/user-attachments/assets/48449f78-837f-4ce5-a6a0-8def54d3710e" />

### **4. Admin Dashboard (Update Quantity)**
<img width="1125" height="593" alt="image" src="https://github.com/user-attachments/assets/06d4747b-2cdc-4098-a437-119c1a44fc9d" />

---

## ⚙️ How to Run the Project Locally

### **📌 Step 1: Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
```

### **📌 Step 2: Install Backend Dependencies**
Navigate to backend folder:
<img width="971" height="536" alt="image" src="https://github.com/user-attachments/assets/96b7f0a5-f8a3-492b-891d-5f14ed15fad1" />

```bash
cd backend
npm install
```

### **📌 Step 3: Start XAMPP**
- Start **Apache**
- Start **MySQL**
<img width="1049" height="677" alt="image" src="https://github.com/user-attachments/assets/c3df0669-3d02-45c8-b1f8-858eb6d61f33" />

Open phpMyAdmin → create database:
<img width="1125" height="600" alt="image" src="https://github.com/user-attachments/assets/48c8bae0-4554-48b5-8416-b55bf3c7871f" />

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
<img width="971" height="536" alt="image" src="https://github.com/user-attachments/assets/4880773f-ed5f-40f9-8e11-b4bfd4a29a2e" />

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

