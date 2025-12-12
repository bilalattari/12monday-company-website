import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, message, phone, subject } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using your custom SMTP server
    const transporter = nodemailer.createTransport({
      host: 'mail.12monday.net',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // info@12monday.net
        pass: process.env.EMAIL_PASS, // your email account password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@12monday.net', // your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #02654F; border-bottom: 2px solid #17C381; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
            ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px; border-left: 4px solid #17C381;">
            <p style="margin: 0; color: #333;">
              <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain our professional standards.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e9ecef;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was sent from the Twelve Monday contact form.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Twelve Monday',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #02654F; text-align: center;">
            Thank You for Contacting Twelve Monday!
          </h2>
          
          <div style="background: linear-gradient(135deg, #02654F, #17C381); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0;">We&apos;ve received your message</h3>
            <p style="margin: 0; opacity: 0.9;">Our team will review your project requirements and get back to you within 24 hours.</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
            <ul style="color: #666; line-height: 1.8;">
              <li>We&apos;ll review your project requirements</li>
              <li>Our team will prepare a detailed proposal</li>
              <li>We&apos;ll schedule a consultation call to discuss your project</li>
              <li>You&apos;ll receive a comprehensive project timeline and quote</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666;">In the meantime, feel free to explore our work:</p>
            <a href="https://www.12monday.net/portfolio" style="display: inline-block; background: linear-gradient(135deg, #02654F, #17C381); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 0 10px;">
              View Our Portfolio
            </a>
            <a href="https://www.12monday.net/services" style="display: inline-block; background: transparent; color: #02654F; padding: 12px 24px; text-decoration: none; border: 2px solid #02654F; border-radius: 8px; margin: 0 10px;">
              Our Services
            </a>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e9ecef;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Twelve Monday - Your AI-First Development Partner<br>
            Email: info@12monday.net | GitHub: github.com/bilalattari
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
