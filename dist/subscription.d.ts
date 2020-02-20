export declare class Subscription {
	// @todo Need to "palmbus"
	public constructor(handle: any, uri: string, args: Record<string, any>);

	public readonly args: Record<string, any>;

	// @todo Need to "palmbus"
	public readonly handle: any;

	// @todo Need to "palmbus"
	public readonly request: any;

	public readonly uri: string;

	public cancel(): void;
}
