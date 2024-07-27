<script setup lang="ts">
import {h, onMounted, type Ref, ref} from 'vue'
import DataTable from "@/components/ui/datatable/DataTable.vue";
import type {Task} from "@/pages/tasks/Task";
import type {ColumnDef} from "@tanstack/vue-table";

const tasks: Ref<Task[]> = ref([])

const getTasks = async () => {
  console.log('retrieving tasks')
  tasks.value = [
    {
      collaborators: ["me", "you"],
      created_at: new Date().toDateString(),
      description: "First task description",
      due_date: new Date().toDateString(),
      id: 1,
      name: "First Task",
      project_id: 1,
      status: "In Progress"
    }
  ]
  console.log(`tasks: ${JSON.stringify(tasks.value)}`)
}

// TODO: deal with values that are arrays
const def = (colName: string): ColumnDef<Task> => ({
  accessorKey: colName,
  header: () => h('div', { class: 'text-left' }, colName.charAt(0).toUpperCase() + colName.replace('_', ' ').slice(1)),
  cell: ({ row }) => h('div', { class: 'text-left font-medium' }, row.getValue(colName))
})

const columns: ColumnDef<Task>[] = ['project_id', 'id', 'name', 'description', 'due_date', 'status', 'collaborators'].map(def);

onMounted(async () => await getTasks())
</script>

<template>
  <h1>Tasks</h1>
  <DataTable v-if="tasks && tasks.length > 0" :columns="columns" :data="tasks"/>
</template>
