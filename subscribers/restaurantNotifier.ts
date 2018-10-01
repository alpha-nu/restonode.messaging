import { subscribe, toJson } from './subscribe';

subscribe(
    process.env.RESTAURANT_NOTIFICATION_QUEUE!,
    msg => console.log(toJson(msg!).order)
);