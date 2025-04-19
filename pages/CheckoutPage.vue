<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="cart.length">
      <ul>
        <li v-for="item in cart" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <button @click="placeOrder">Place Order</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const cart = ref<any[]>([])

onMounted(() => {
  cart.value = JSON.parse(localStorage.getItem('cart') || '[]')
})

function placeOrder() {
  alert('Order placed!')
  localStorage.removeItem('cart')
}
</script>