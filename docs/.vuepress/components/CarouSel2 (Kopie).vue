<template>
    <div>
      <section class="pagination">
        <button class="btn" :onclick="goBack">Back</button>
        <button class="btn" :onclick="goNext">Fwd</button>
      </section>

    <section class="paged-content">
      <div v-if="current==1">
        <div class="c-slide" >
            <img class="c-image zoomable" src="/slide1.png" alt="I1"/>
        </div>
        <p class="c-text">Text1</p>
      </div>

      <div v-if="current==2">
        <div class="c-slide" >
          <img class="c-image zoomable" src="/slide2.png" alt="I2"/>
        </div>
        <p class="c-text">Text2</p>
      </div>

      <div v-if="current==3">
        <div class="c-slide" >
          <img class="c-image zoomable" src="/slide3.png" alt="I3"/>
        </div>
        <p class="c-text">Text3</p>
      </div>
    </section>
  </div>
</template>

<script>

import { defineComponent, ref } from 'vue'

// zoom dynmic images
// https://v2.vuepress.vuejs.org/reference/plugin/medium-zoom.html#usemediumzoom
import { nextTick } from 'vue'
import { useMediumZoom } from '@vuepress/plugin-medium-zoom/client'


export default defineComponent( {
  components: {
  },
  methods: {
    async zrefresh() {
      await nextTick()
      if (this.zoom) {
        this.zoom.refresh('img.zoomable')
      }
    },
    goNext() {
      if (this.current < 3) {
        this.current++
        this.imgChanged()
      }
    },
    goBack() {
      if (this.current > 1) {
        this.current--
        this.imgChanged()
      }
    },
    imgChanged() {
      if (this.zoom) {
        setTimeout(this.zrefresh,100)
      }
    }
  },
  setup (props) {
    const zoom = useMediumZoom()
    const current = ref(1) 
    return { current, zoom}
  }
})
</script>


<style scoped>
.pagination {
  display: block;
  background-color: #ddd;
  width:100%;
}
.btn {
  width:50%;
  margin-left:auto;
  margin-right:auto;
  padding: .5rem;
  display:inline-block;
}

.c-slide {
  padding: 0; /* 9rem 4.5rem; */
  color: #ffffff;
  text-align: center;
}

.c-slide img {
  display:block;
  width: 100%;
  border: 1px solid var(--c-border);
  border-radius: 0.25rem;
}



</style>

<style>
/* notification needs global style ! */
.note {
  padding: 5px;
  margin-right: 2rem;
}
</style>