export enum ModelKind {
	OpenAI = 'openai',
	Anthropic = 'anthropic',
	Ollama = 'ollama'
}

export enum OpenAIModelName {
	GPT35Turbo = 'gpt-3.5-turbo',
	GPT4 = 'gpt-4',
	GPT4Turbo = 'gpt-4-turbo',
	GPT4o = 'gpt-4o'
}

export enum AnthropicModelName {
	Opus = 'claude-3-opus-20240229',
	Sonnet = 'claude-3-sonnet-20240229',
	Haiku = 'claude-3-haiku-20240307'
}

export enum MessageRole {
	System = 'system',
	User = 'user',
	Assistant = 'assistant'
}

export interface PromptMessage {
	content: string;
	role: MessageRole;
}

export interface AIClient {
	evaluate(prompt: PromptMessage[]): Promise<string>;

	defaultBranchTemplate: PromptMessage[];
	defaultCommitTemplate: PromptMessage[];
}
