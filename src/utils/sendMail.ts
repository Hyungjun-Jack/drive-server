import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandbox99ab15e77f404dbc9dbcd5a004bb614d.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "lovehjun@gmail.com",
    to: "lovehjun@gmail.com",
    subject,
    html
  };

  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName:string, key:string) => {
    const emailSubject = `Hello, ${fullName}, please veify your email`;
    const emailBody = `Verify your email by clicking <a href="http://asdf.com/verification/${key}/">here</a>`;

    return sendEmail(emailSubject, emailBody);
}