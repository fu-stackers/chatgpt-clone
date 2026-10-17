import type { ChatResponse, Conversation } from "./../types/chat";

const API = "http://localhost:3000";

export async function fetchConversation(id: number): Promise<Conversation> {
  const res = await fetch(`${API}/conversations/${id}`);
  if (!res.ok)
    throw new Error("could not load the chat . check your connection");

  return res.json();
}

export async function sendChatMessage(
  id: number,
  content: string,
): Promise<ChatResponse> {
  const res = await fetch(`${API}/conversations/${id}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
 if (!res.ok) {
    throw new Error('Chatty is busy right now. Check your connection and try again in a moment.');
  }
  return res.json();
}
