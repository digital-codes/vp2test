# test

```

# Vuepress Issue #1338
## Medium-Zoom refresh not working in build mode

See component CarouSel2
https://github.com/digital-codes/vp2test/blob/main/docs/.vuepress/components/CarouSel2.vue

fixed by wrapping with ClientOnly


```


fwefwef

<ClientOnly>
<CarouSel2/>
</ClientOnly>
