export declare class Service {
	public constructor(busId: string, activityManager?: IActivityManager, options?: IServiceOptions);
}

export interface IActivityManager { }

export interface IServiceOptions {
	readonly idleTimer?: number;
	readonly noBuiltinMethods?: boolean;
}
