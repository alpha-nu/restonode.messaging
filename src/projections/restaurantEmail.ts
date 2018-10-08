import { IDelivery, ICustomer } from './orderTypes';

export default (delivery: IDelivery, customer: ICustomer) => {
    return [
        `Delivery for ${customer.userName}`,
        customer.address,
        'Items:',
        ...delivery.meals.map(({ name, quantity }) => `${name} (quantity: ${quantity})`),
        `Total: ${delivery.subTotal}`
    ].join('\n');
};
