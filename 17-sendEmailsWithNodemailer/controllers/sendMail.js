

const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'kellen.goodwin75@ethereal.email',
        pass: 'gACgW7XvTxjpHfb4S5'
    },
  });

  let info = await transporter.sendMail({
    from: '"Sathvika 👻" <sath@gmail.com>', // sender address
    to: "d52226898@gmail.com", // list of receivers
    subject: "Hello sathvika", // Subject line
    text: "Hello sathvika", // plain text body
    html: "<b>Hello sathvika</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;