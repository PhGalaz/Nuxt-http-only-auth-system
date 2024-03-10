export const useAuthService = () => {
    async function login (email: string, password: string): Promise<void> {
        try {
            // Do login request from the client side
            await $fetch('/api/auth/login', {
                body: { email, password },
                method: 'POST',
            })
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function getUser(): Promise<any> {
        try {
            // Get current authenticated user
            // useRequestHeaders(['cookies]) will send the httpOnly cookies to the Nitro Server
            const user = await $fetch('/api/auth/user', {
                method: 'GET',
            })

            return user
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function logout(): Promise<{ message: string }> {
        try {
            // Do the actual request to the external API
            const res = await $fetch('/api/auth/logout', { method: 'DELETE' })

            return res
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return {
        login,
        getUser,
        logout
    }
}
