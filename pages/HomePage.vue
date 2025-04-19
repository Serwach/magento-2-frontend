<template>
  <div>
    <h1>Product List</h1>
    <div v-if="products.length">
      <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart" />
    </div>
    <button @click="goToCheckout">Go to Checkout</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getProducts } from '@/api'
import ProductCard from '@/components/ProductCard.vue'

const products = ref<any[]>([])
const router = useRouter()

onMounted(async () => {
  const result = await getProducts()
  products.value = result
})

function addToCart(product: any) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push(product)
  localStorage.setItem('cart', JSON.stringify(cart))
}

function goToCheckout() {
  router.push('/checkout')
}
</script>