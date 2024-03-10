import { H3Event } from 'h3'
import { serverApi } from '../utils/serverApi'

export default defineEventHandler (async (event: H3Event): Promise<any> => {
    console.log('Get user request received')
    const api = serverApi(event)

    try {
        // Do the actual request to the external API
        const res = await api.raw('/users/current-user', 'GET')

        return { user: res._data.currentUser }
    } catch (error) {
        throw createError('An error occurred while fetching the data.')
    }
})