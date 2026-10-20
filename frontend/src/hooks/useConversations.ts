import { useEffect, useState } from "react";
import { fetchConversations, fetchConversationTitle } from "../api/chatApi";
import type { Conversation } from "../types/chat";

export function useConversations(userId: number) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchConversationTitle(userId)
      .then(setConversations)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  return { conversations, loading, error };
}