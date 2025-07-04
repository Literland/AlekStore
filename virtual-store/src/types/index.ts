export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface CartItem {
    productId: number;
    quantity: number;
}