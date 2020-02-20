export declare class Subscription {
	public constructor(handle: any, uri: string, args: any);

	public readonly args: any;

	// @todo Need to "palmbus"
	public readonly handle: any;

	// @todo Need to "palmbus"
	public readonly request: any;

	public readonly uri: string;

	public cancel(): void;
}
