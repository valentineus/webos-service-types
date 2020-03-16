import { Message } from "./message";

export declare class Method {
	public readonly description: Record<string, any>;

	public readonly name: string;

	public constructor(methodName: string, description: Record<string, any>);

	public on(event: "request", listener: (message: Message) => void): this;

	public on(event: "cancel", listener: (message: Message) => void): this;

	public on(event: string, listener: Function): this;
}
