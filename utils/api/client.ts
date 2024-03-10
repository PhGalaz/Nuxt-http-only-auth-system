import type { FetchOptions } from 'ofetch';

export default class Client {
    options?: FetchOptions
    baseUrl: string

    constructor(baseUrl: string, options?: FetchOptions) {
        this.baseUrl = baseUrl;
        this.options = options;
    }

    async raw<T>(url: string, method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'delete' | 'get' | 'head' | 'patch' | 'post' | 'put' | 'connect' | 'options' | 'trace' | undefined, options?: FetchOptions) {
        try {
            const data = await $fetch.raw<T>(`${this.baseUrl}${url}`, {
                ...options,
                ...this.options,
                method
            })

            return data
        } catch (error) {
            return Promise.reject(error)
        }        
    }

    async get<T>(url: string, options?: FetchOptions) {
        try {
            const data = await $fetch<T>(`${this.baseUrl}${url}`, {
                ...options,
                ...this.options,
                method: 'GET'
            })
            return data
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

