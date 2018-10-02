import { subscribe, toJson } from './subscribe';
import processDeliveryEmails from './processDeliveryEmails';

subscribe(
    process.env.RESTAURANT_NOTIFICATION_QUEUE!,
    msg => processDeliveryEmails(toJson(msg!), _ => console.log(new Date().toLocaleString(), _))
);
