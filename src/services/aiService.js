
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_GROUPS } from "../constants";

const getSystemInstruction = () => {
  const skillsStr = SKILL_GROUPS.map(g => `${g.category}: ${g.skills.join(', ')}`).join('\n');
  const expStr = EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('\n');
  const projStr = PROJECTS.map(p => p.title).join(', ');

  return `You are an AI assistant for Lav Rai's portfolio. 
    LAV RAI'S INFO:
    Title: ${PERSONAL_INFO.title}
    Exp: ${PERSONAL_INFO.experience}
    Summary: ${PERSONAL_INFO.summary}
    Skills:
    ${skillsStr}
    Experience:
    ${expStr}
    Projects: ${projStr}

    GOAL:
    Answer questions from recruiters or visitors about Lav's background, technical skills, and projects. 
    Be professional, helpful, and concise. 
    If you don't know an answer, politely suggest they reach out to Lav directly at ${PERSONAL_INFO.email}.
    Always maintain a tone that reflects Lav's professional competence.`;
};

export const chatWithLavAI = async (message) => {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: getSystemInstruction() },
          { role: "user", content: message },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API Error:", data);
      return "I'm having a bit of trouble connecting to my brain right now. Please try again or contact Lav directly!";
    }

    return data.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("AI Chat Error:", error);
    return "I'm having a bit of trouble connecting to my brain right now. Please try again or contact Lav directly!";
  }
};
