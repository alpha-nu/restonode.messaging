import sampleOrder from '../sampleOrder';
import restaurantEmail from '../src/projections/restaurantEmail';
import processDeliveryEmails from '../src/subscribers/processDeliveryEmails';

describe('processDeliveryEmails', () => {
    it('send an email to each restaurant in a delivery order', () => {
        const mockSendEmailAction = jest.fn(_ => _);

        processDeliveryEmails(sampleOrder, mockSendEmailAction);

        expect(mockSendEmailAction.mock.calls.length).toBe(3);
        expect(mockSendEmailAction.mock.calls[0][0])
            .toEqual(restaurantEmail(sampleOrder.deliveries[0], sampleOrder.customer));
    });
});
