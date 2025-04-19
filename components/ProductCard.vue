<template>
  <div style="border: 1px solid #ccc; padding: 1rem; margin: 1rem 0;">
    <h3>{{ product.name }}</h3>
    <p>Price: {{ product.price }}</p>
    <button @click="$emit('add-to-cart', product)">Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ product: any }>()
</script>