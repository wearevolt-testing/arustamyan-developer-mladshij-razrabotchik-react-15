export const loadProducts = (products) => {
    return {
        type: 'LOAD_PRODUCTS',
        products
    }
};

export const loadCustomers = (customers) => {
    return {
        type: 'LOAD_CUSTOMERS',
        customers
    }
};

export const editProduct = (id, name, price, updatedAt, createdAt) => {
    return {
        type: 'EDIT_PRODUCT',
        id, name, price, updatedAt, createdAt
    }
};

export const addProduct = (id, name, price, updatedAt) => {
    return {
        type: 'ADD_PRODUCT',
        id,
        name,
        price,
        updatedAt
    }
};

export const addCustomer = (id, name, address, phone, createdAt, updatedAt) => {
    return {
        type: 'ADD_CUSTOMER',
        id,
        name,
        phone,
        address,
        createdAt,
        updatedAt
    }
};

export const editCustomer = (id, name, address, phone, updatedAt) => {
    return {
        type: 'EDIT_CUSTOMER',
        id, name, phone, address, updatedAt
    }
};

export const deleteProduct = (id) => {
    console.log('i', id);
    return {
        type: 'DELETE_PRODUCT',
        id
    }
};

export const deleteCustomer = (id) => {
    console.log('i', id);
    return {
        type: 'DELETE_CUSTOMER',
        id
    }
};