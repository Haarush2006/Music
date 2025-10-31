import { resend } from "@/lib/resend";
import loginOtpTemplate from "./loginOtpTemplate";
import { apiResponse } from "./types/apiresponse";
import { render } from "@react-email/render";


export async function sendOtpToMail(
    email: string,
    username: string,
    VerifyCode: string
): Promise<apiResponse>{
    try{
        const htmlContent = await render(
            loginOtpTemplate({
                username,
                otp: VerifyCode,
            })
        );

        const response = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Anonymous Chat App OTP',
            html: htmlContent
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