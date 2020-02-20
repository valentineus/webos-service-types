import { ActivityManager } from "./activity-manager";
import { Message } from "./message";
import { Method } from "./method";
import { Subscription } from "./subscription";

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

	public call(uri: string, args: Record<string, any>, callback: (message: Message) => void): void;

	// @todo Need to "palmbus"
	public cancelSubscription(handle: any, ls2Message: any): void;

	public cleanupUnified(): void;

	public idIsPrivileged(id: string): boolean;

	public info(message: Message): void;

	public quit(message: Message): void;

	public register(name: string, requestCallback?: (message: Message) => void, cancelCallback?: (message: Message) => void, description?: Record<string, any>): Method;

	public registerPrivate(name: string, requestCallback?: (message: Message) => void, cancelCallback?: (message: Message) => void, description?: Record<string, any>): Method;

	public subscribe(uri: string, args: Record<string, any>): Subscription;

	// @todo Need to "palmbus"
	private _dispatch(handle: any, ls2Message: any): void;

	private _register(privateBus: boolean, name: string, requestCallback?: (message: Message) => void, cancelCallback?: (message: Message) => void, description?: Record<string, any>): Method;

	private _registerBuiltInMethods(privateBus: boolean): void;
}
