export default ({
    deliveries: [
        {
            restaurant: {
                name: 'great eats',
                email: 'great.eats@email.com'
            },
            eta: '21 mins',
            meals: [
                'house burger',
                'winter stew'
            ],
            subTotal: 390
        },
        {
            restaurant: {
                name: 'fancy eats',
                email: 'fancy.eats@email.com'
            },
            eta: '30 mins',
            meals: [
                'deep dish pizza'
            ],
            subTotal: 350
        },
        {
            restaurant: {
                name: 'Chinese Delights',
                email: 'chinese.delights@email.com'
            },
            eta: '15 mins',
            meals: [
                'fried rice',
                'Peking Duck'
            ],
            subTotal: 1160
        }
    ],
    grandTotal: 1900,
    customer: {
        userName: 'greedyPete',
        phone: '2222222222',
        address: 'Bacacay 4700 caba argentina'
    }
});
