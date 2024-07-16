<script lang="ts" setup>
const { data } = useAuth()
</script>

<template>
  <pre>
    {{ data }}
  </pre>
</template>
