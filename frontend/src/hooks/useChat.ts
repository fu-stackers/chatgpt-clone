import { useEffect, useState } from 'react';
import { fetchConversation, sendChatMessage } from '../api/chatApi';
import type { Message } from '../types/chat';

export function useChat(conversationId: number) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load the saved chat whenever the conversation changes
  useEffect(() => {
    setError('');
    fetchConversation(conversationId)
      .then((c) => setMessages(c.messages))
      .catch((err: Error) => setError(err.message));
  }, [conversationId]);

  async function send(text: string) {
    if (!text.trim() || loading) return;

    setLoading(true);
    setError('');
    try {
      const data = await sendChatMessage(conversationId, text.trim());
      setMessages((prev) => [...prev, data.userMessage, data.assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return { messages, loading, error, send };
}