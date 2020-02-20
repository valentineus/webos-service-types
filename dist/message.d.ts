import { ActivityManager } from "./activity-manager";
import { Service } from "./service";

export declare class Message {
	// @todo Need to "palmbus"
	public constructor(message: any, handle: any, activityManager: ActivityManager, service: Service);

	public readonly activityManager: ActivityManager;

	public readonly category: string;

	// @todo Need to "palmbus"
	public readonly handle: any;

	public readonly isSubscription: boolean;

	public readonly ls2Message: any;

	// @todo Need to "palmbus"
	public readonly method: string;

	public readonly payload: Record<string, any>;

	public readonly sender: string;

	public readonly service: Service;

	public readonly token: string;

	public readonly uniqueToken: string;

	public cancel(response: Record<string, any>): void;

	public respond(response: Record<string, any>): boolean;
}
