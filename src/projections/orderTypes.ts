export interface IRestaurant {
    name: string;
    email: string;
}

export interface IDelivery {
    restaurant: IRestaurant;
    eta: string;
    meals: string[];
    subTotal: number;
}

export interface ICustomer {
    userName: string;
    phone: string;
    address: string;
}

export interface IOrderJson {
    deliveries: IDelivery[];
    grandTotal: number;
    customer: ICustomer;
}
