import { IDelivery, ICustomer } from './orderTypes';

export default (delivery: IDelivery, customer: ICustomer) => {
    return [
        `Delivery for ${customer.userName}`,
        customer.address,
        'Items:',
        ...delivery.meals,
        `Total: ${delivery.subTotal}`
    ].join('\n');
};
