import ExcelJS from "exceljs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

/* ---------- READ EXCEL ---------- */
const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile("HR_email2.xlsx");

const sheet = workbook.getWorksheet(11);// metion sheet number as here 11 

const emails = [];
let userDetails = {
  userName : "Gautam Kumar Sharma",
  subject : "Application for Backend / Frontend / MERN Stack Developer",
}

let customMessage =  `
      <p>Dear HR Team,</p>

      <p>I hope you are doing well.</p>

      <p>
        I am writing to apply for opportunities related to 
        <b>Backend Developer / Frontend Developer / MERN Stack Developer</b> roles.
      </p>

      <p>
        I have hands-on experience working with JavaScript, Node.js, Express.js, MongoDB, React.js, along with HTML, CSS,Bootstrap, tailwindCSS and RESTful APIs. I have built multiple projects involving authentication, admin panels, API integrations, and full-stack applications using the MERN stack. I am comfortable working with Git/GitHub and follow clean coding and best practices.
      </p>
        <p>I am eager to contribute my skills to a dynamic team and grow professionally while delivering value to the organization. I would appreciate the opportunity to discuss how my profile aligns with your current or upcoming requirements.</p>
      <p>
        Please find my resume attached for your review.
      </p>

      <p>
        Thank you for your time and consideration.
      </p>
<p>Warm regards,</p>
      <p><strong>Gautam Kumar Sharma</strong></p>

<p>
  Software Engineer
</p>

<p>
  📧 <strong>Email:</strong>
  <a href="sgautamkumar71@gmail.com">sgautamkumar71@gmail.com</a><br/>

  📞 <strong>Mobile:</strong>
  +91-9507574044<br/>

  🔗 <strong>GitHub:</strong>
  <a href="https://github.com/itssharmajee" target="_blank">
    https://github.com/itssharmajee
  </a>
  <strong> LinkedIn </strong>
  <a href="www.linkedin.com/in/gautam-kumar-sharma-39314424a" target="_blank">
        www.linkedin.com/in/gautam-kumar-sharma-39314424a
  </a>
</p>  `;


sheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
    if (rowNumber === 1) return; // skip header

    const email = row.values[3]; // Email column

    if (email && /\S+@\S+\.\S+/.test(email)) {
        emails.push(email.trim());
    }
});

/* ---------- REMOVE DUPLICATES ---------- */
const uniqueEmails = [...new Set(emails)];
console.log("Total Emails:", uniqueEmails.length);

/* ---------- NODEMAILER SETUP ---------- */
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

/* ---------- RESUME PATH ---------- */
const resumePath = path.resolve("Resume.pdf");

/* ---------- SEND EMAIL ---------- */
for (const email of uniqueEmails) {
    await transporter.sendMail({
        from: `"${userDetails.userName}" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: userDetails.subject,
        html:customMessage,
        attachments: [
            {
                filename: "Gautam_Kumar_Sharma_Resume.pdf",
                path: resumePath
            }
        ]
    });

    console.log(`📧 Email sent to: ${email}`);
}

console.log("✅ All emails sent successfully!");
