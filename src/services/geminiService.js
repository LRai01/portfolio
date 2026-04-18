
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_GROUPS } from "../constants";

const getSystemInstruction = () => {
  const skillsStr = SKILL_GROUPS.map(g => `${g.category}: ${g.skills.join(', ')}`).join('\n');
  const expStr = EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('\n');
  const projStr = PROJECTS.map(p => p.title).join(', ');

  return `
    You are an AI assistant for Lav Rai's portfolio. 
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
    Always maintain a tone that reflects Lav's professional competence.
  `;
};

export const chatWithLavAI = async (message) => {
  try {
  const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: message,
      config: {
        systemInstruction: getSystemInstruction(),
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Chat Error:", error);
    return "I'm having a bit of trouble connecting to my brain right now. Please try again or contact Lav directly!";
  }
};
