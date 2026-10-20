import type { ChatResponse, Conversation } from "./../types/chat";

const API = "http://localhost:3000";

export async function fetchConversations(userId: number): Promise<Conversation[]> {
  const res = await fetch(`${API}/conversations/users/${userId}`);
  if (!res.ok) throw new Error("Could not load your chats.");
  return res.json();
}
export async function fetchConversationTitle(
  userId: number,
): Promise<Conversation[]> {
  const res = await fetch(`${API}/conversations/users/${userId}`);
  if (!res.ok)
    throw new Error("could not load the chat . check your connection");
  const data: Conversation[] = await res.json();
  return data;
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
    throw new Error(
      "Chatty is busy right now. Check your connection and try again in a moment.",
    );
  }
  return res.json();
}
