<script setup lang="ts">
    import { reactive } from "vue";
    import { RouterLink} from "vue-router";
    import { getProducts } from "../stores/products";

    const products = reactive(getProducts());
</script>

<template>
    <div>
        <div class="products">
            </div>
    </div>
</template>

<style scoped>
.products {
    display: flex;
    flex-wrap: wrap;
    background-color: aliceblue;
}

.product {
    flex-basis: 10em;
    margin: 1em;
    padding: 1em;
    border: 1px solid #0000;
    border-radius: 5px;
    background-color: white;
}

</style>
