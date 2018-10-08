export interface IRestaurant {
    name: string;
    email: string;
}

export interface IMeal {
    name: string;
    quantity: number;
}

export interface IDelivery {
    restaurant: IRestaurant;
    eta: string;
    meals: IMeal[];
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
