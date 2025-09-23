import { CATEGORIES, PRODUCTS, USERS } from "../data/db"

export const api = {
    auth: {
        /**
         * User login
         * @param {object} payload 
         * @param {string} payload.email 
         * @param {string} payload.password 
         * @returns {Promise<object>|Promise<Error>}
         */
        login: (payload) => {
            const { email, password } = payload;
            return new Promise((resolve, reject) => {
                const user = USERS.find(u => u.email == email && u.password == password);
                
                if (user) {
                    const { token, ...userInfo } = user;
                    return resolve({ token, user: userInfo });
                }
                return reject(new Error("User not found"));
            });
        }
    },
    categories: {
        getAll: () => {
            return new Promise((resolve, reject) => {
                return resolve(CATEGORIES);
            });
        }
    },
    products: {
        getAll: () => {
            return new Promise((resolve, reject) => {
                const _products = PRODUCTS.map(p => ({
                    ...p,
                    category: CATEGORIES.find(c => c.id == p.category),
                }))
                return resolve(_products);
            });
        },
        findByCategory: (category_id) => {
            return new Promise((resolve, reject) => {
                const products = PRODUCTS.filter((p) => p.category == category_id);

                const _products = products.map(p => ({
                    ...p,
                    category: CATEGORIES.find(c => c.id == p.category),
                }))
                return resolve(_products);
            });
        },
        findById: (product_id) => {
            return new Promise((resolve, reject) => {
                const product = PRODUCTS.find((p) => p.id == product_id);

                product.category = CATEGORIES.find(c => c.id == product.category);

                if (product) {
                    return resolve(product);
                }
                return reject(new Error("Product not found"));
            });
        },
    },
}