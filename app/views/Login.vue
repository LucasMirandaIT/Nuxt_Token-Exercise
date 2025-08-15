<template>
  <div class="login">
    <h1>Welcome to the Login Page</h1>
    <p>This is the Login Page of the application.</p>
  </div>
</template>

<script setup>

const { fetch: refreshSession } = useUserSession();

async function login () {
  try {
    const { token } = await $fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ token: 'valid-token' }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Login successful:', {token});

    await refreshSession();

    navigateTo({ name: 'about' });
  } catch (error) {
    console.error('An error occurred:', {error});
  }
}

onMounted(() => {
  login();
});
</script>
