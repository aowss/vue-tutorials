<script setup>
import PlanPicker from "@/components/PlanPicker.vue";
import FancyButton from "@/components/FancyButton.vue";
</script>

<template>
  <div class="content">
    <h1 class="title">Coffee Plans</h1>

    <h2 class="subtitle">We travel the world to source the very best single origin coffee for you</h2>

    <FancyButton/>
    <br/>
    <FancyButton>
      <template v-slot:icon="{ hover }">
        {{ hover ? '🎯' : '🧨' }}
      </template>
      <strong>S</strong>ubmit
    </FancyButton>
    <br/>

    <PlanPicker/>
  </div>
</template>
