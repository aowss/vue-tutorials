<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    validator(value, props) {
      return value.startsWith('The');
    }
  },
  selected: {
    type: Boolean,
    default: false
  }
})

// const emit = defineEmits(["planSelected"]);
const emit = defineEmits({
  planSelected(payload) {
    return typeof payload === 'string'
  }
})

const selectPlan = () => {
  emit("planSelected", props.name);
}
</script>

<template>
  <div @click="selectPlan" class="plan" :class="{ 'active-plan': props.selected }">
    <div class="description">
      <span class="title"> {{ props.name }} </span>
    </div>
  </div>
</template>
