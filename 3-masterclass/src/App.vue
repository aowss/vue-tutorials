<script setup lang="ts">
import { RouterView } from 'vue-router';
import { supabase } from '@/utils/supabaseClient'
import SideBar from '@/components/Layout/SideBar.vue'
import TopNavbar from '@/components/Layout/TopNavbar.vue'
</script>

<template>
  <SideBar/>
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-lg">Page Title</h1>
      </div>
      <RouterView />
    </main>
  </div>
</template>
