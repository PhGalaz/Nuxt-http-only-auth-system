<template>
    <div>
        <input placeholder="Email" v-model="email">
        <input placeholder="Password" v-model="password">
        <button @click="login">Login</button>
        <button @click="getUser">getUser</button>
        <button @click="logout">Logout</button>
        <h1>
            User: {{ store.$state.user }}
        </h1>
    </div>
</template>

<script setup lang="ts">
    import { useStore } from '~/store/store';

    // definePageMeta({
    //     middleware: 'no-auth'
    // })
    
    const email = ref('')
    const password = ref('')
    const authService = useAuthService()
    const store = useStore()
    const router = useRouter()
    onMounted(async () => {
        const user = await authService.getUser()
        store.setUser(user.user)
    })
    
    async function login() {
        try {
            await authService.login(email.value, password.value)
            const user = await authService.getUser()
            store.setUser(user.user)
            // router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    async function getUser() {
        try {
            const user = await authService.getUser()
        } catch (error) {
            console.log(error)
        }
    }
    async function logout() {
        try {
            await authService.logout()
            store.setUser(null)
            // router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
</script>

<style scoped>
</style>
```