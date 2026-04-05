const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // Create the transporter using Google's SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // These should be set in your .env file or Netlify environment variables
        user: process.env.GMAIL_USER || 'mohamedarshad1507@gmail.com',
        pass: process.env.GMAIL_PASS // YOUR APP PASSWORD
      }
    });

    // 1. Send inquiry to YOU
    await transporter.sendMail({
      from: `"Nodemailer Test" <${process.env.GMAIL_USER}>`,
      to: 'mohamedarshad1507@gmail.com',
      subject: `New Travel Inquiry from ${data.user_name}`,
      text: `Traveler Details:\n\nName: ${data.user_name}\nEmail: ${data.user_email}\nPhone: ${data.phone}\nCategory: ${data.travel_category}\nTravelers: ${data.traveler_count}\nDate: ${data.travel_date}\nMessage: ${data.message}`
    });

    // 2. Send Auto-Reply to CUSTOMER
    await transporter.sendMail({
      from: `"New Future Travels" <${process.env.GMAIL_USER}>`,
      to: data.user_email,
      subject: "Inquiry Received - New Future Travels",
      text: `Hi ${data.user_name},\n\nThank you for choosing New Future Travels! We have received your inquiry for ${data.travel_category}. Our experts will contact you within 24 hours.\n\nBest regards,\nA. Mohamed Sirajdheen`
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully" })
    };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
