import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    count: 0,
    user: null as null | { name: string },
  }),
  actions: {
    increment() {
      this.count++
    },
    setUser(user: any) {
      console.log('setting user', user)
      this.user = user
    }
  },
  getters: {
    doubleCount(): number {
      return this.count * 2
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}