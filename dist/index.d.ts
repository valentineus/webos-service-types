import { ActivityManager } from "./activity-manager";
import { Message } from "./message";
import { Method } from "./method";
import { Service } from "./service";
import { Subscription } from "./subscription";

declare module "webos-service" {
	export default Service;
}

export {
	ActivityManager,
	Message,
	Method,
	Service,
	Subscription,
};
