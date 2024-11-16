const sgMail = require("@sendgrid/mail");

// Set the SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  // Parse incoming JSON payload
  const { name, email, phone, date, time, serviceType } = JSON.parse(
    event.body
  );

  // Compose the email message
  const msg = {
    to: "gtiwari615@gmail.com", // Your recipient email
    from: process.env.EMAIL_FROM, // Sender's email from environment variable
    subject: "New Appointment Request",
    text: `
      You have a new appointment request:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Date: ${date}
      Time: ${time}
      Service Type: ${serviceType}
    `,
  };

  try {
    // Send the email using SendGrid
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Appointment email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send appointment email." }),
    };
  }
};
