import { H3Event } from 'h3'
import Client from '~/utils/api/client'

// server composable for calling the external API trough Nitro Server
export const serverApi = (event: H3Event) => {
    const { apiUrl } = useRuntimeConfig().public

    const accessToken = getCookie(event, 'connect.sid')
    // const refreshToken = getCookie(event, 'Refresh-Token')

    console.log('Access Token: ', accessToken)

    const client = new Client(apiUrl as string, {
        headers: {
            'Cookie': `connect.sid=${accessToken}`,
            // 'Refresh-Token': `Bearer ${refreshToken}`,
        } as HeadersInit,
    })

    return client
}
