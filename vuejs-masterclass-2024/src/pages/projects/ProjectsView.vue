<script setup lang="ts">
import {h, onMounted, type Ref, ref} from 'vue'
import { Project } from './Project';
import DataTable from "@/components/ui/datatable/DataTable.vue";
import type {ColumnDef} from "@tanstack/vue-table";

const projects: Ref<Project[]> = ref([]);

const getProjects = async () => {
  console.log('retrieving projects')
  projects.value = [
    {
      collaborators: ["me"],
      created_at: Date.toString(),
      id: 1,
      name: "First Project",
      slug: "Project-1",
      status: "In Progress"
    }
  ]
  console.log(`projects: ${JSON.stringify(projects.value)}`)
}

// TODO: deal with values that are arrays
const def = (colName: string): ColumnDef<Project> => ({
  accessorKey: colName,
  header: () => h('div', { class: 'text-left' }, colName.charAt(0).toUpperCase() + colName.replace('_', ' ').slice(1)),
  cell: ({ row }) => h('div', { class: 'text-left font-medium' }, row.getValue(colName))
})

const columns: ColumnDef<Project>[] = ['id', 'name', 'slug', 'status', 'collaborators'].map(def);

onMounted(async () => await getProjects())
</script>

<template>
    <div>
        <h1>Projects page</h1>
        <RouterLink to="/">Home</RouterLink>
        <DataTable v-if="projects && projects.length > 0" :columns="columns" :data="projects"/>
    </div>
</template>
