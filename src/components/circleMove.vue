<template>
    <div
        class="h-screen w-full flex justify-center items-center bg-dark-300"
        @mousemove="dragMouse"
    >
        <div
            ref="circle"
            class="absolute w-10rem h-10rem bg-purple-200 rounded-1/2"
            @mousedown="getElMouse"
            @mouseup="ctl = false"
        >
            <div class="absolute top-10 left-10">s</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const circle = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)
const ctl = ref(false)
function getElMouse(event) {
    ctl.value = true
    mouseX.value = event.clientX - circle.value.offsetLeft
    mouseY.value = event.clientY - circle.value.offsetTop
}
function dragMouse(event) {
    if (!ctl.value) return
    circle.value.style.top = `${event.clientY - mouseY.value}px`
    circle.value.style.left = `${event.clientX - mouseX.value}px`
}
</script>
