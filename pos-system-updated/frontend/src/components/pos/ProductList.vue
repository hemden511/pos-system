<template>
  <v-row>
    <v-col
      v-for="product in products"
      :key="product.id"
      cols="12" sm="6" md="4"
    >
      <v-card>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-subtitle>{{ product.price }} {{ $t('pos.currency') }}</v-card-subtitle>
        <v-card-actions>
          <v-btn @click="$emit('add-to-cart', product)">{{ $t('pos.add') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const products = ref([])

onMounted(() => {
  // Temporary mock data
  products.value = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 }
  ]
})
</script>