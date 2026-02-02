# Express.js Starter 🚀

Bu loyiha **Node.js + Express (ES Module)** asosida yaratilgan **starter template**.
Har safar yangi backend loyiha boshlaganda tayyor structure bilan tez start olish uchun mo‘ljallangan.

---

## ⚙️ Requirements

- Node.js v18+
- npm

---

## 📦 Installed Dependencies

Quyidagi kutubxonalar o‘rnatilgan:

- **express** — HTTP server va routing
- **dotenv** — `.env` fayldan environment variables o‘qish
- **nodemon** — development paytida auto-restart (dev mode)

---

## 📁 Project Structure

```txt
src/
 ├─ config/        # App va database konfiguratsiyalar
 ├─ controllers/   # Business logic (controller functions)
 ├─ data/          # Fake / seed data
 ├─ middleware/    # Custom middleware (auth, error, logger)
 ├─ models/        # Database models (schema)
 ├─ routes/        # API routes
 └─ server.js      # Application entry point


git clone https://github.com/USERNAME/nodejs-starter.git my-project
cd my-project

rm -rf .git
