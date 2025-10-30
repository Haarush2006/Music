import { resend } from "@/lib/resend";
import loginOtpTemplate from "./loginOtpTemplate";

export async function sendVerificationMail(
    email: string,
    username: string,
    VerifyCode: string
){
    try{

        const response = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Anonymous Chat App OTP',
            react: loginOtpTemplate({
                username,
                otp: VerifyCode
            })
        });

        // Log response for debugging delivery / API issues
        console.log('Resend send response:', JSON.stringify(response, null, 2));

        return {
            success: true,
            message: 'sent otp',
        };
    }
    catch(e){
        console.error("error while sending verification code mail", e);
        return {
            success:false,
            message:"Failed to send otp"
        }
    }
}