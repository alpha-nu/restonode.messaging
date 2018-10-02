import restaurantEmail from '../projections/restaurantEmail';
import { IOrderJson } from '../projections/orderTypes';

export default (order: IOrderJson, sendEmailAction: (email: string) => void) => {
    order.deliveries.forEach(_ => {
        sendEmailAction(restaurantEmail(_, order.customer));
    });
};
