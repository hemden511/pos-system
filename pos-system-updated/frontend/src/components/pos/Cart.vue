<template>
  <v-card class="mt-5">
    <v-card-title>{{ $t('pos.cart') }}</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.id"
        >
          <v-list-item-title>{{ item.name }} x {{ item.quantity }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.price * item.quantity }} {{ $t('pos.currency') }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-divider class="my-2" />
      <strong>{{ $t('pos.total') }}: {{ total }} {{ $t('pos.currency') }}</strong>
    </v-card-text>
    <v-card-actions>
      <v-btn color="green" @click="$emit('checkout')">{{ $t('pos.checkout') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['items'])

const total = computed(() =>
  props.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>