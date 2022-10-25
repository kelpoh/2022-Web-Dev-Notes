import data from '../data/products.json';

export function getProducts() {
    return data.products;
}

export function getProduct(id: number) {
    return data.products.find( (product) => product.id === id)
}