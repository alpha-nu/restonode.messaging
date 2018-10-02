import { IOrderJson } from './orderTypes';

export default (order: IOrderJson) => {
    return [
        `Hello ${order.customer.userName}!`,
        'Thank you for ordering with restonode.',
        `You'll enjoy your meals from:`,
        ...order.deliveries.map(_ => `${_.restaurant.name} in ${_.eta}`),
        `Your grand total is: ${order.grandTotal}.`,
        'Come again!'
    ].join('\n');
};
