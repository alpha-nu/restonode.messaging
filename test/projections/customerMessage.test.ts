import customerMessage from '../../src/projections/customerMessage';
import sampleOrder from '../../sampleOrder';

describe('customerMessage', () => {
    it('formats an SMS to send to a user', () => {
        const customerSMS = customerMessage(sampleOrder);

        expect(customerSMS).toEqual([
            'Hello greedyPete!',
            'Thank you for ordering with restonode.',
            'You\'ll enjoy your meals from:',
            'great eats in 21 mins',
            'fancy eats in 30 mins',
            'Chinese Delights in 15 mins',
            'Your grand total is: 1900.',
            'Come again!'].join('\n'));
    });
});
