import restaurantEmail from '../../src/projections/restaurantEmail';
import { IDelivery, ICustomer } from '../../src/projections/orderTypes';

describe('restaurantEmail', () => {
    it('it formats a message to email to a restaurant', () => {
        const delivery: IDelivery = {
            restaurant: {
                name: 'restaurant name',
                email: 'email'
            },
            eta: '',
            meals: [
                'meal 1',
                'meal 2'
            ],
            subTotal: 4001
        };

        const customer: ICustomer = {
            address: 'delivery address',
            userName: 'user',
            phone: ''
        };

        expect(restaurantEmail(delivery, customer)).toEqual([
            'Delivery for user',
            'delivery address',
            'Items:',
            'meal 1',
            'meal 2',
            'Total: 4001'
        ].join('\n'));
    });
});
