import { ActivityManager } from "./activity-manager";
import { Message } from "./message";
import { Method } from "./method";

export interface IServiceOptions {
	readonly idleTimer?: number;
	readonly noBuiltinMethods?: boolean;
}

export declare class Service {
	public constructor(busId: string, activityManager?: ActivityManager, options?: IServiceOptions);

	public readonly activityManager: ActivityManager;

	public readonly busId: string;

	public readonly cancelHandlers: Record<string, any>;

	public readonly handlers: Record<string, any>;

	public readonly idleTimer: number;

	public readonly methods: { [category: string]: { [methodName: string]: Method } };

	public readonly noBuiltinMethods: boolean;

	public readonly subscriptions: { [id: string]: Message };

	public cleanupUnifiedDone: boolean;

	// @todo Need to "palmbus"
	public handle: any;

	public hasPublicMethods: boolean;

	// @todo Need to "palmbus"
	public privateHandle: any;

	// @todo Need to "palmbus"
	public publicHandle: any;

	// @todo Need to "palmbus"
	public sendingHandle: any;

	public useACG: boolean;

	// @todo Need to "unified_service"
	private readonly __serviceMainUnified: any;

	public call(): any;

	public cancelSubscription(): any;

	public cleanupUnified(): any;

	public idIsPrivileged(): any;

	public info(): any;

	public quit(): any;

	public register(): any;

	public registerPrivate(): any;

	public subscribe(): any;

	private _dispatch(): any;

	private _register(): any;

	private _registerBuiltInMethods(): any;
}
