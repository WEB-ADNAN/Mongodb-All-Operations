const Registration = require('../models/registrationModel')
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt')

const registrationController = async (req,res)=>{
    const {username,email,password} = req.body

    //email existing check
    let existingEmail = await Registration.findOne({email:email})

    if(existingEmail){
        return res.send("Email is already exist, please try with another email")
    }

    //hash password convert
    let hash = bcrypt.hashSync(password, 10)
    console.log(hash);
    
    
    let user = new Registration({
        username: username,
        email: email,
        password: hash
    })

    user.save()

    // verification email send by nodemailer
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
            subject: "verify your email",  
            html: '<body style="margin:0;padding:0;background-color:#eef2f7;font-family:Arial,Helvetica,sans-serif"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="padding:40px 20px"><table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)"><tr><td align="center" style="padding:35px 20px 20px"><h2 style="margin:0;color:#111827;font-size:28px">YourBrand</h2></td></tr><tr><td align="center" style="padding:10px 40px"><h1 style="margin:0;color:#111827;font-size:30px">Confirm Your Email</h1></td></tr><tr><td align="center" style="padding:20px 40px 10px"><p style="margin:0;font-size:16px;line-height:1.8;color:#6b7280">Hi<strong>{{name}}</strong>,<br><br>Use the verification code below to complete your account setup.</p></td></tr><tr><td align="center" style="padding:30px 20px"><div style="display:inline-block;background:#f3f4f6;border:2px dashed #d1d5db;border-radius:12px;padding:18px 40px"><span style="font-size:36px;font-weight:700;letter-spacing:8px;color:#2563eb">{{OTP_CODE}}</span></div></td></tr><tr><td align="center" style="padding:0 40px 30px"><p style="margin:0;font-size:14px;color:#6b7280">This code will expire in<strong>10 minutes</strong>.</p></td></tr><tr><td style="padding:0 40px 40px"><div style="background:#f9fafb;border-left:4px solid #2563eb;padding:16px;border-radius:6px"><p style="margin:0;font-size:14px;color:#4b5563;line-height:1.7">For your security, never share this code with anyone. Our team will never ask for your verification code.</p></div></td></tr><tr><td align="center" style="background:#111827;padding:25px"><p style="margin:0;color:#9ca3af;font-size:13px">© 2026 YourBrand. All rights reserved.</p></td></tr></table></td></tr></table></body>', 
        });

        console.log("Message sent: %s", info.messageId);

    res.send(user)
    
}

module.exports = registrationController