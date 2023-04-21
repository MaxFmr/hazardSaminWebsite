import axios from 'axios';

async function validateCaptcha(req, res) {
  //get the captcha token from the request body
  const captchaToken = req.body.token;
  const secretKey = process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY_SERVERSIDE;
  //   //verify the captcha token
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
  //   //make a request to the verification URL

  try {
    const response = await axios.post(verificationURL);

    if (response.data.success) {
      return res.json({
        success: true,
        message: 'Human',
      });
    } else {
      return res.json({ success: false, message: 'Robot' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error verifying reCAPTCHA');
  }
}

export default validateCaptcha;
