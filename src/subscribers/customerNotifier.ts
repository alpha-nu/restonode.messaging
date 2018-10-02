import { subscribe, toJson } from './subscribe';
import customerMessage from '../projections/customerMessage';

subscribe(
    process.env.CUSTOMER_NOTIFICATION_QUEUE!,
    msg => console.log(new Date().toLocaleString(), customerMessage(toJson(msg!)))
);
