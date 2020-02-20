import { Service } from "./service";
import { Subscription } from "./subscription";

export declare class ActivityManager {
	public constructor(service: Service, idleTimeout: number);

	public readonly idleTimeout: number;

	public readonly service: Service;

	public exitOnTimeout: boolean;

	public useDummyActivity: boolean;

	private readonly _activities: { [id: string]: Subscription };

	private _counter: number;

	private _dummyActivityId: number;

	private _idleTimer: NodeJS.Timeout | null;

	public adopt(): any

	public complete(): any;

	public create(): any;

	private _add(id: string, activity: Subscription): void;

	private _createActual(): any;

	private _createDummy(): any;

	private _createInternal(): any;

	private _remove(id: string): void;

	private _startTimer(): void;

	private _stopTimer(): void;
}
