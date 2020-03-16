export declare class Subscription {
	public readonly args: Record<string, any>;

	// @todo Need to "palmbus"
	public readonly handle: any;

	// @todo Need to "palmbus"
	public readonly request: any;

	public readonly uri: string;

	// @todo Need to "palmbus"
	public constructor(handle: any, uri: string, args: Record<string, any>);

	public cancel(): void;
}
