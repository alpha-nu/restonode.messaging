export default ({
    deliveries: [
        {
            restaurant: {
                name: 'great eats',
                email: 'great.eats@email.com'
            },
            eta: '21 mins',
            meals: [
                {
                    name: 'house burger',
                    quantity: 1
                },
                {
                    name: 'winter stew',
                    quantity: 3
                }
            ],
            subTotal: 870
        },
        {
            restaurant: {
                name: 'fancy eats',
                email: 'fancy.eats@email.com'
            },
            eta: '30 mins',
            meals: [
                {
                    name: 'deep dish pizza',
                    quantity: 1
                }
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
                {
                    name: 'fried rice',
                    quantity: 2
                },
                {
                    name: 'Peking Duck',
                    quantity: 1
                }
            ],
            subTotal: 1460
        }
    ],
    grandTotal: 2680,
    customer: {
        userName: 'greedyPete',
        phone: '2222222222',
        address: 'Bacacay 4700 caba argentina'
    }
});
