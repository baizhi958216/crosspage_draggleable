<template>
    <div @dragover.prevent style="background-color: yellow;" draggable="true" @drop="drop">
        {{ drpppedItem }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drpppedItem = ref('B')
const drop = (event: DragEvent) => {
    event.preventDefault();
    drpppedItem.value = event.dataTransfer!.getData('text/plain');
}
</script>

<style scoped></style>