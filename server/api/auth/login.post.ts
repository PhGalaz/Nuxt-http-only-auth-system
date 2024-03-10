import { H3Event } from 'h3'
import { serverApi } from '../utils/serverApi'

export default defineEventHandler (async (event: H3Event) => {
    console.log('Login request received')
    const api = serverApi(event)
    const { password, email } = await readBody (event)

    try {
        // Do the actual request to the external API
        const res = await api.raw('/users/login', 'POST', {
            body: { email, password },
        })

        const cookies = (res?.headers.get('set-cookie') || '').split(';')

        for (const cookie of cookies) {
            appendHeader(event, 'set-cookie', cookie)
        }

        return { message: 'success' }
    } catch (error) {
        throw createError('An error occurred while fetching the data.')
    }
})
