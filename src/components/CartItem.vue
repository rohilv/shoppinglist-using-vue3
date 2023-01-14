<script setup>
defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>
<template>
  <li>
    <span>{{ product.name }}</span>
    <span class="whitespace-nowrap flex items-center gap-1">
      <AppCountInput
        class="text-sm"
        :model-value="count"
        @update:modelValue="$emit('updateCount', $event)"
      />
      <span class="inline-block text-sm text-gray-600"
        > x ${{ product.price }} = </span>
      <span>${{ count * product.price }}</span>
      <span class="text-sm ml-3 text-red-600" @click="$emit('clear')">
        <fa icon="trash-alt" />
      </span>
    </span>
  </li>
</template>
