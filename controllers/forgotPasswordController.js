const nodemailer = require('nodemailer')
const Registration = require('../models/registrationModel')

const forgotPasswordController = async (req,res)=>{

    const {email} = req.body

    let user = await Registration.findOne({})
    if(!user){
        return res.send('Email not found')
    }

    //verification mail
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false, 
        auth: {
            user: "500mdadnansami@gmail.com",
            pass: "ivrfvgjrtqnwlwpx",
        },
    });

        const info = await transporter.sendMail({
            from: '"papa adnan" <500mdadnansami@gmail.com>', 
            to: email,
            subject: "click to change password",  
            html: '<body style="margin:0;padding:0;background-color:#f5f7fa;font-family:Arial,Helvetica,sans-serif"><div style="max-width:600px;margin:40px auto;background:#fff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb"><div style="background:#2563eb;padding:30px;text-align:center"><h1 style="margin:0;color:#fff;font-size:28px">Reset Your Password</h1></div><div style="padding:40px 30px;color:#374151;line-height:1.7"><p style="margin-top:0;font-size:16px">Hello<strong>{{name}}</strong>,</p><p style="font-size:16px">We received a request to reset the password for your account. Click the button below to set a new password.</p><div style="text-align:center;margin:35px 0"><a href="{{resetLink}}" style="background:#2563eb;color:#fff;text-decoration:none;padding:14px 30px;border-radius:6px;font-size:16px;font-weight:700;display:inline-block">Reset Password</a></div><p style="font-size:15px">This link will expire in<strong>15 minutes</strong>for security reasons.</p><p style="font-size:15px">If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p><p style="margin-bottom:0;font-size:15px">Best regards,<br><strong>{{companyName}}</strong></p></div><div style="background:#f9fafb;padding:20px;text-align:center;border-top:1px solid #e5e7eb"><p style="margin:0;color:#6b7280;font-size:13px">© 2026 {{companyName}}. All rights reserved.</p></div></div></body>', 
        });

        console.log("Message sent: %s", info.messageId);

        res.send("please check your email")

}

module.exports = forgotPasswordController