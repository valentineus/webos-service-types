import { Description } from "./types";
import { Message } from "./message";

export declare class Method {
	public constructor(methodName: string, description: Description);

	public readonly description: Description;

	public readonly name: string;

	public on(event: "request", listener: (message: Message) => void): this;

	public on(event: "cancel", listener: (message: Message) => void): this;

	public on(event: string, listener: Function): this;
}
