import OpenAIApi, { OpenAI } from "openai";
import {NextResponse} from "next/server";
import { auth } from "@clerk/nextjs";



const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

export async function POST(
    req: Request
){
    try{
        const{userId}= auth();
        const body=await req.json();
        
        const{messages}=body;
        const contextMessages={role:"system",content:"Tu répondras par des morceaux de code en markdown et expliqueras leur but dans des commentaires."}

        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        if(!openai){
            return new NextResponse("OpenAI API key not found", {status: 500});
        }

        if(!messages){
            return new NextResponse("No messages", {status: 400});
        }
        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[contextMessages, ...messages],
        });
        return  NextResponse.json(response.choices[0].message);
    
    }catch(error){
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", {status: 500});
        
    }
}