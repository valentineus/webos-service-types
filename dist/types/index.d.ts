export interface IActivitySpec {
	readonly activity: IActivity;
	readonly replace?: boolean;
	readonly start?: boolean;
	readonly subscribe?: boolean;
}

export interface IActivity {
	readonly description: string;
	readonly name: string;
	readonly type?: IType;
}

export interface IType {
	readonly explicit?: boolean;
	readonly foreground?: boolean;
	readonly persist?: boolean;
}
