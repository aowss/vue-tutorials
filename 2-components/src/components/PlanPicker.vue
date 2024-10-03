<script setup>
import CoffeePlan from "@/components/CoffeePlan.vue";
import {ref} from "vue";

const plans = ref(["The Single", "The Curious", "The Addict"])

const selectedPlan = ref('')
const selected = (planName) => {
  selectedPlan.value = planName
}
</script>

<template>
  <div class="plans">
    <CoffeePlan v-for="plan in plans" :name="plan" :selected="plan === selectedPlan" @planSelected="selected"/>
  </div>
</template>
