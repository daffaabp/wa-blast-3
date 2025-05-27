import dotenv from "dotenv";
dotenv.config();

export interface Config {
		HEADLESS: boolean;
		SESSION_PATH: string;
		MIN_DELAY_PER_MESSAGE: number;
		MAX_DELAY_PER_MESSAGE: number;
		MIN_DELAY_PER_5_MESSAGES: number;
		MAX_DELAY_PER_5_MESSAGES: number;
		MIN_DELAY_PER_30_MESSAGES: number;
		MAX_DELAY_PER_30_MESSAGES: number;
		MIN_DELAY_PER_105_MESSAGES: number;
		MAX_DELAY_PER_105_MESSAGES: number;
	}

export const config: Config = {
	// WhatsApp client settings
	HEADLESS: false,
	SESSION_PATH: "./config/session",

	// Delay settings (dalam milliseconds)
	MIN_DELAY_PER_MESSAGE: 30250,
	MAX_DELAY_PER_MESSAGE: 36500,

	// Delay settings per 5 messages
	MIN_DELAY_PER_5_MESSAGES: 62550,
	MAX_DELAY_PER_5_MESSAGES: 92750,

	MIN_DELAY_PER_30_MESSAGES: 100850,
	MAX_DELAY_PER_30_MESSAGES: 203590,

	MIN_DELAY_PER_105_MESSAGES: 297500,
	MAX_DELAY_PER_105_MESSAGES: 302779,
};
