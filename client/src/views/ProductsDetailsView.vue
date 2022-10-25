<script setup lang="ts">
    import { ref} from "vue";
    import { useRoute } from "vue-router";
    import { getProduct } from "../stores/products";

    const route = useRoute()
    const product = ref(getProduct(+route.params.id));
</script>

<template>
    <div v-if="product"></div>
</template>

<style scoped>

</style>
