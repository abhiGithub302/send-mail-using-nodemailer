const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Set your desired port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { firstName, lastName, companyName, mobileNumber, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "abhitechcode302@gmail.com",
      pass: "zvgq gbor zoio bedb",
    },
  });

  const mailOptions = {
    from: 'your_email@gmail.com', // Replace with your Gmail address
    to: 'your_email@example.com', // Replace with the email address where you want to receive emails
    subject: 'New Contact Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Company Name: ${companyName}
      Mobile Number: ${mobileNumber}
      
      Message:
      ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Oops! Something went wrong and we couldn\'t send your message.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Thank you for contacting us! We will get back to you soon.');
    }
  });
});

// Handle GET requests to the root path
app.get('/', (req, res) => {
  res.send('Server is running. Please use the /submit-form endpoint to submit the form.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
