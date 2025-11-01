import { NextResponse } from "next/server";
import { UserModel } from "@/schema/user";
import connectdb from "@/lib/connectdb";
import { sendOtpToMail } from "@/lib/sendOtpToMail";


export async function POST(req: Request) {
  try {
    const { identifier } = await req.json(); 
    await connectdb()

    // Find the user by email or mobile
    const user = await UserModel.findOne({
      $or: [{ email: identifier }, { mobile: identifier }],
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000,).toString();
    const expiryDate = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes

    // Save OTP and expiry in the database
    user.verifyCode = otp;
    user.expiryDate = expiryDate;
    await user.save();

    // Send OTP (e.g., via email or SMS)
    // Example: await sendOtpToUser(user, otp);

    const emailOtp = await sendOtpToMail(
        user.email,
        user.username,
        user.verifyCode
    )

    if(!emailOtp.success){

      return NextResponse.json({
        success: false,
        message: "OTP generation failed",
      });
    }
    return NextResponse.json({
      success: true,
      message: "OTP generated and sent",
    });
    

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to generate OTP" },
      { status: 500 }
    );
  }
}