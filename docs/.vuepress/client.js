import { defineClientConfig } from '@vuepress/client'

import CarouSel2 from './components/CarouSel2.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }){
  app.component('CarouSel2', CarouSel2)
	},
  setup(){},
  layouts: {},
  rootComponents: [],
})

