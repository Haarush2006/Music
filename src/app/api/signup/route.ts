import connectdb from "@/lib/connectdb";
import { UserModel } from "@/schema/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
export async function POST(req:NextRequest){
    const {username, email, mobile, password} = await req.json();
    try {
        await connectdb()
        const existingUsername =await UserModel.findOne({username})
        const existingEmail =await UserModel.findOne({email})
        const existingMobile =await UserModel.findOne({mobile})
        const hashedPassword = await bcrypt.hash(password, 10);

        if(existingEmail){
            return NextResponse.json({
                success: false,
                message:"Email is already in use"
            })
        }
        if(existingMobile){
            return NextResponse.json({
                success: false,
                message:"Mobile no is already in use"
            })
        }
        if(existingUsername){
            return NextResponse.json({
                success: false,
                message:"Username is already in use"
            })
        }
        const verifyCode = Math.floor(100000 + Math.random() * 900000,).toString()
        const expiryDate = new Date();
        expiryDate.setMinutes(expiryDate.getMinutes() + 5);
        
        const user = await UserModel.create({
            username,
            email,
            mobile,
            password: hashedPassword,
            verifyCode,
            expiryDate
        })


        return NextResponse.json({
            success:true,
            message:"Account created"
        })
        
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            success: false,
            message:"Unable to signUp"
        },{status: 400})
    }



}