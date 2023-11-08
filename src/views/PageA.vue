<template>
    <div style="background-color: red;" draggable="true" @dragstart="dragStart">
        {{ item }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const item = ref('A')
const dragStart = (event: DragEvent) => {
    event.dataTransfer!.setData('text/plain', item.value);
}
</script>

<style scoped></style>