import api from "../lib/api";

/**
 * Get all paginated products
 * @param {number} skip 
 * @param {number} limit 
 * @returns 
 */
export const getAllProducts = async (skip = 0, limit = 9) => {
    try {
        const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}