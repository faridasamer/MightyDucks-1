import nodemailer from 'nodemailer';

function sendMail(mailOptions) {
//fetch the mailer credentials from the config file
    const user = process.env.EMAIL;
    const pass = process.env.EMAIL_PASSWORD;

//create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: user,
            pass: pass
        }
    });

    //send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    );

}

export default sendMail;


    
    //define the email options in the following format
    // const mailOptions = {
    //     from: '',
    //     to: '',
    //     subject: '',
    //     text: ''
    // };