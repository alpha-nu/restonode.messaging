import { subscribe, toJson } from './subscribe';

subscribe(
    process.env.CUSTOMER_NOTIFICATION_QUEUE!,
    msg => console.log(toJson(msg!).order)
);