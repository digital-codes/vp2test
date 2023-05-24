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

<script setup>

// zoom dynmic images
// https://v2.vuepress.vuejs.org/reference/plugin/medium-zoom.html#usemediumzoom
import { ref, nextTick } from 'vue'
import { useMediumZoom } from '@vuepress/plugin-medium-zoom/client'

//const zoom = useMediumZoom()
// dynamic images not possible in SSR mode
// wrap component in "ClientOnly"
const zoom = __VUEPRESS_SSR__? null : useMediumZoom()
const current = ref(1) 

const imgChanged = () => {
  if (zoom) {
    setTimeout(zrefresh,100)
  }
}

const zrefresh = async () => {
  await nextTick()
  if (zoom) {
    zoom.refresh('img.zoomable')
  }
}

const goNext = () => {
  if (current.value < 3) {
    current.value++
    imgChanged()
  }
}

const goBack = () => {
  if (current.value > 1) {
    current.value--
    imgChanged()
  }
}

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

