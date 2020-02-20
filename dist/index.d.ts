export declare class Service {
	public constructor(busId: string, activityManager?: IActivityManager, options?: IServiceOptions);

	private _dispatch(): any;

	private _register(): any;

	private _registerBuiltInMethods(): any;

	public call(): any;

	public cancelSubscription(): any;

	public cleanupUnified(): any;

	public idIsPrivileged(): any;

	public info(message: IMessage): void;

	public quit(message: IMessage): void;

	public register(): any;

	public registerPrivate(): any;

	public subscribe(uri: string, args: any): Subscription;
}

export declare class Subscription { }

export interface IActivityManager { }

export interface IMessage { }

export interface IServiceOptions {
	readonly idleTimer?: number;
	readonly noBuiltinMethods?: boolean;
}
