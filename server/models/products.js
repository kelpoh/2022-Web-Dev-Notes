const data = require('../data/products.json');

const { connect } = require('./mongo');

async function collection() {
    const client = await connect();
    return client.db("Shoperator").collection("products");
}

async function getProducts() {
    const db = await collection();
    const data = await collection().find().toArray()
    return data;
}

async function getProduct(id) {
    const db = await collection();
    const data = await collection().findOne({ _id: id})
    return data;
}

module.exports = {
    collection,
    getProducts,
    getProduct
};