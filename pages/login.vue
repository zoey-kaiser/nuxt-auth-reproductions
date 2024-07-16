<script lang="ts" setup>
definePageMeta({
  auth: false
})

const demoCredentials = {
  username: 'user',
  password: 'hunter2',
}

const { signIn, data, signOut, status } = useAuth()
</script>

<template>
  <h2>Status: {{ status }}</h2>

  <button @click="signIn(demoCredentials)">
    Sign In
  </button>
  <button @click="signOut()">
    Sign Out
  </button>

  <pre>
    {{ data }}
  </pre>
</template>
