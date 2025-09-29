import api from "../lib/api";

/**
 * User login
 * @param {object} payload
 * @param {string} payload.username
 * @param {string} payload.password
 * @returns 
 */
export const loginUser = async ({ username, password }) => {
    try {
        const response = await api.post("/auth/login", {
            username,
            password,
            expiresInMins: 120
        });

        return response.data;
    } catch (err) {
        throw err;
    }
}

/**
 * Get current User info
 * @param {object} payload
 * @param {string} payload.username
 * @param {string} payload.password
 * @returns 
 */
export const getMeInfo = async () => {
    try {
        const response = await api.get("/auth/me");

        return response.data;
    } catch (err) {
        throw err;
    }
}