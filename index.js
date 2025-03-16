import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

async function createClient(systemPrompt){
    const client = new OpenAI({
        apiKey: process.env.GROQ_API_KEY,
        baseURL: "https://api.groq.com/openai/v1"
    });

    const messages = [];

    messages.push({
    role:"system",
    content : systemPrompt
    });

    return async function(message,model){
        messages.push({
            role : "user",
            content : message
        });

        const response = await client.chat.completions.create({
            model,
            messages
        });

        return response.choices[0].message.content;
    }
}

const llamaModel = "llama-3.2-90b-vision-preview";
const deepseekModel = "deepseek-r1-distill-qwen-32b";
const topic = "which came first, the chicken or the egg?";
const maxTurn = 10;
const currentTurn = 0;
let flag = true;
let msg = "Hello";

const llama = await createClient(`
    You are an aggressive ai that is always looking for a fight. Your name is llama. you are given a topic name and you have to debate on that topic.
    Topic : "${topic}".

    Note that you do not have to write paragraph just response in 1-2 lines.
`);

const deepseek = await createClient(`
    You are an calmful ai that is always looking for a peaceful solution. Your name is deepseek. you are given a topic name and you have to debate on that topic.
    Topic : "${topic}".

    Note that you do not have to write paragraph just response in 1-2 lines.
`);

while(currentTurn < maxTurn){
    if(flag){
        msg = await llama(msg,llamaModel);
        flag = false;
        console.log(`Llama : ${msg} \n\n`);
    }
    else{
        msg = await deepseek(msg,deepseekModel);
        flag = true;
        console.log(`Deepseek : ${msg} \n\n`);
    }

    currentTurn++;
}