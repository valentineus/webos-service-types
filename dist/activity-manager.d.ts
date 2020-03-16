import { Service } from "./service";
import { Subscription } from "./subscription";
import { IActivitySpec } from "./types";

export interface ICreateDummyCallback {
	activity: { name: string };
	isDummyActivity: boolean;
}

export declare class ActivityManager {
	public readonly idleTimeout: number;

	public readonly service: Service;

	private readonly _activities: { [id: string]: Subscription };

	public exitOnTimeout: boolean;

	public useDummyActivity: boolean;

	private _counter: number;

	private _dummyActivityId: number;

	private _idleTimer: NodeJS.Timeout | null;

	public constructor(service: Service, idleTimeout: number);

	public adopt(activity: Record<string, any>, callback?: (payload: Record<string, any>) => void): void;

	public complete(activity: Record<string, any>, options?: Record<string, any>, callback?: (payload: Record<string, any>) => void): boolean | void;

	public create(spec: string | Record<string, any>, callback: (payload: any) => void): void;

	private _add(id: string, activity: Subscription): void;

	private _createActual(activitySpec: IActivitySpec, callback?: (payload: any) => void): void;

	private _createDummy(jobId: string, callback?: (payload: ICreateDummyCallback) => void): void;

	private _createInternal(jobId: string, callback?: (payload: any) => void): void;

	private _remove(id: string): void;

	private _startTimer(): void;

	private _stopTimer(): void;
}
