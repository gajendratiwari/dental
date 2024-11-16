const sgMail = require("@sendgrid/mail");

// Set the SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  // Parse incoming JSON payload
  const { name, email, phone, message } = JSON.parse(event.body);

  // Compose the email message
  const msg = {
    to: process.env.EMAIL_TO, // Recipient email from environment variable
    from: process.env.EMAIL_FROM, // Sender's email from environment variable
    subject: "New Contact Form Submission",
    text: `
      New contact form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    // Send the email using SendGrid
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Contact email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send contact email." }),
    };
  }
};
