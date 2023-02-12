import { defineStore } from 'pinia'

export const useThemeStore = defineStore('counter', {
  state: () => {
    return { theme: false }
  },
  actions: {
    setTheme(val) {
      this.theme = val
    },
  },
})