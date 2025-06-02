<template>
  <v-container>
    <h1>{{ $t('pos.title') }}</h1>
    <product-list @add-to-cart="addToCart" />
    <cart :items="cartItems" @checkout="checkout" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import ProductList from '@/components/pos/ProductList.vue'
import Cart from '@/components/pos/Cart.vue'

const cartItems = ref([])

function addToCart(product) {
  const item = cartItems.value.find(p => p.id === product.id)
  if (item) {
    item.quantity += 1
  } else {
    cartItems.value.push({ ...product, quantity: 1 })
  }
}

function checkout() {
  alert('Checkout not implemented yet.')
}
</script>