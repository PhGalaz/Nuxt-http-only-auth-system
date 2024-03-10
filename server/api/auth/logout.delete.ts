import { H3Event } from 'h3'
import { serverApi } from '../utils/serverApi'

export default defineEventHandler (async (event: H3Event) => {
    console.log('Logout request received')
    const api = serverApi(event)

    try {
        // Do the actual request to the external API
        const res = await api.raw('/users/logout', 'DELETE')

        // console.log('LOGOUT RES: ', res)

        return { message: 'success' }
    } catch (error) {
        throw createError('An error occurred while fetching the data.')
    }
})
