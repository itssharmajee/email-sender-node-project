Here is a **complete `README.md` file** you can directly copy and use in your project 👇

---

# 📧 HR Email Send Automation (Node.js)

This project is an **email-sending automation system built with Node.js and Nodemailer**.
It automatically sends emails to HRs using **email IDs stored in an Excel file**, making bulk HR outreach simple and efficient.

---

## 🚀 Features

* Read HR email IDs from an Excel file (`.xlsx`)
* Validate and remove duplicate email addresses
* Send automated emails using Nodemailer
* Attach resume or documents
* Environment-based configuration for security

---

| Column | Header  | Description                |
| ------ | ------- | -------------------------- |
| A      | SNo     | Serial number (optional)   |
| B      | Name    | HR name (optional)         |
| C      | Email   | **HR email ID (required)** |
| D      | Title   | HR job title (optional)    |
| E      | Company | Company name (optional)    |

---

## 🛠 Tech Stack

* Node.js
* Nodemailer
* ExcelJS
* dotenv

---

## ⚙️ Installation & Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
EMAIL=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

> 🔐 Use a **Gmail App Password**, not your regular Gmail password.

---

## ▶️ Run the Project

```bash
node index.js
```

---

## 🎯 Use Cases

* Job application HR outreach
* Bulk resume sharing
* Automated professional email campaigns

---

## 🤝 Contributions

Feel free to fork the repository, raise issues, or submit pull requests.

---

## 📌 Future Enhancements

* Email rate limiting (Gmail safe limits)
* Delay between emails
* Retry logic for failed emails
* CLI-based execution

---

**Author:**
**Gautam Kumar Sharma**
Software Engineer

---

If you want, I can also help you:

* Add logging
* Improve email templates
* Optimize for Gmail limits

Just tell me 👍
