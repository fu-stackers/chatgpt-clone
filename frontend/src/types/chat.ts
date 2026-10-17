export type Role = 'user' | 'assistant';

export type Message = {
  id: number;
  role: Role;
  content: string;
  createdAt: string;
};

export type Conversation = {
  id: number;
  title: string;
  messages: Message[];
};

export type ChatResponse = {
  userMessage: Message;
  assistantMessage: Message;
};