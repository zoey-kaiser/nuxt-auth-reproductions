<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
  }
})

const { signIn } = useAuth()

const error = ref<string | undefined>(undefined)
const formData = ref({
  email: '',
  password: ''
})

async function submit() {
  signIn(formData.value, { callbackUrl: '/', external: true }).catch((e) => {
    if (e instanceof Error) {
      error.value = e.message
    }
  })
}
</script>

<template>
  <form action="#" method="POST" @submit="submit">
    <input
      id="email"
      v-model="formData.email"
      type="email"
      placeholder="jsmith@auth.com"
    >

    <input
      id="password"
      v-model="formData.password"
      type="password"
      placeholder="hunter2"
    >

    <button @click="submit">
      Sign in
    </button>

    <div v-if="error">
      {{ error }}
    </div>
  </form>
</template>
