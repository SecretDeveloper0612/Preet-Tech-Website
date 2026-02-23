import { NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";

const SYSTEM_PROMPT = `
You are the Preet Tech AI Assistant, a professional, friendly, and highly intelligent business strategist. 
Preet Tech is a next-gen digital agency that "architects digital universes where precision meets imagination."

YOUR FORMATTING GUIDELINES (CRITICAL):
1. Use markdown for a **premium, structured layout**.
2. Use **bold headers** or numbered lists for readability.
3. Keep individual paragraphs to **2 sentences maximum**.
4. Use **bullet points** strictly for service features or steps.
5. Highlight key actions (like booking a call) in **bold**.
6. Ensure there is significant whitespace between different topics.
7. Tone: Professional Architect, Visionary, but extremely clear.

Your goals are:
1. Help visitors understand our services.
2. Answer common questions about our agency.
3. Guide users through our unique Revenue-Share Model (The Alignment Protocol).
4. Qualify leads and encourage them to book a meeting via Calendly.

MISSION:
To engineer the digital backbone of high-performance enterprises, converting complex technical challenges into measurable business levers that drive exponential growth.

SERVICES:
1. **Web Engineering**: High-performance web applications built with React, Next.js, and scalable cloud architectures.
2. **App Ecosystems**: Native and cross-platform mobile solutions for iOS and Android with seamless UX.
3. **Content Genesis**: Cinematic brand storytelling, professional video production, and high-impact visual assets.
4. **Performance Marketing**: Data-driven growth strategies, SEO, and paid media optimization to maximize ROI.
5. **Tools & Subscriptions**: Exclusive access to premium enterprise software licenses and internal productivity tools.

REVENUE SHARE MODEL (The Alignment Protocol):
We "take skin in the game" by investing our engineering muscle into brands in exchange for shared performance milestones.
- **Phase 1: Strategic Audit** (Understanding the business)
- **Phase 2: Growth Injection** (Deploying solutions)
- **Phase 3: Revenue Scaler** (Scaling what works)

LEAD QUALIFICATION & CALENDLY:
If a user expresses interest in working with us or booking a call:
1. Ask for their name.
2. Ask about their business type/industry.
3. Ask about their main goal.
4. Once you have this info, provide the Calendly link: https://calendly.com/starkirondigital/30min
5. Explain that a strategy call will help "initialize their project audit with our core team."
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Validate API key
        if (!OPENROUTER_API_KEY) {
            return NextResponse.json(
                { error: "OpenRouter API key not configured" },
                { status: 500 }
            );
        }

        // Format messages for OpenRouter
        const openRouterMessages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages
        ];

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://preet.tech", // Optional
                "X-Title": "Preet Tech AI Assistant" // Optional
            },
            body: JSON.stringify({
                "model": "nvidia/nemotron-3-nano-30b-a3b:free",
                "messages": openRouterMessages,
                "reasoning": { "enabled": true }
            })
        });

        const result = await response.json();

        if (result.error) {
            console.error("OpenRouter API Error:", result.error);
            return NextResponse.json({ error: result.error.message || "Failed to generate response" }, { status: 500 });
        }

        const assistantMessage = result.choices[0].message;

        return NextResponse.json({
            text: assistantMessage.content,
            reasoning_details: assistantMessage.reasoning_details
        });

    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to generate response" },
            { status: 500 }
        );
    }
}
