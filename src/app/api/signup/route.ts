import connectdb from "@/lib/connectdb";
import { UserModel } from "@/schema/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {username, email, password} = await req.json();
    try {
        await connectdb()
        const existingUsername =await UserModel.findOne({username})
        const existingEmail =await UserModel.findOne({email})

        if(existingEmail){
            return NextResponse.json({
                success: false,
                message:"Email is already in use"
            })
        }
        if(existingUsername){
            return NextResponse.json({
                success: false,
                message:"Username is already in use"
            })
        }
        const user = await UserModel.create({
            username,
            email,
            password
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