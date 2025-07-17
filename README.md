# Todo-Backend

Todo-Backend API นี้สร้างด้วย [Express.js] และใช้ฐานข้อมูล [PostgreSQL] สำหรับจัดเก็บข้อมูลรายการสิ่งที่ต้องทำ (Todo List)

## 🛠 Technologies

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- CORS
- JSON Middleware

## 📦 การติดตั้ง

1. **Clone Repository นี้**
   ```bash
   git clone https://github.com/your-username/todo-backend.git
   cd todo-backend
________________________________________________________________
2. ติดตั้ง dependencies

        npm install
________________________________________________________________
3. ตั้งค่า PostgreSQL Database
   
       CREATE DATABASE perntodo;
    
       CREATE TABLE todo (
          todo_id SERIAL PRIMARY KEY,
          description VARCHAR(255),
          completed BOOLEAN DEFAULT false
        );
________________________________________________________________
  4.สร้างไฟล์ db.js (ถ้ายังไม่มี)
      
    const { Pool } = require('pg');
    
    const pool = new Pool({
      user: 'postgres',
      password: 'yourpassword',
      host: 'localhost',
      port: 5432,
      database: 'perntodo'
    });
    
      module.exports = pool;
________________________________________________________________
  5.เริ่มเซิร์ฟเวอร์
  
    npm start
________________________________________________________________
การทดสอบ API ด้วย Postman
คุณสามารถนำเข้า Collection ด้านล่างเพื่อทดสอบ API ทุกคำสั่งผ่าน Postman ได้ทันที:

📁 [ดาวน์โหลดไฟล์ Postman สำหรับทดสอบ API](./postman/Todo_API.postman_collection.json)

      วิธีใช้:
      
      เปิด Postman
      
      ไปที่ File → Import
      
      เลือกไฟล์ Todo API.postman_collection.json ที่แนบมา
      
      เริ่มทดสอบ API ได้ทันที


