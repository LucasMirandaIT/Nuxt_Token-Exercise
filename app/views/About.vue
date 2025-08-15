<template>
  <div class="about">
    <h1>Welcome to the About Page</h1>
    <p>This is the about page of the application.</p>
    <template v-if="!tokenExpired">
      <p>
        Current Token: Generated: {{ formatDate(currentToken.iat) }} Expires: {{ formatDate(currentToken.exp) }}
      </p>
    </template>
    <template v-else>
      <p>TOKEN IS EXPIRED</p>
    </template>
  </div>
</template>

<script setup>
const tokenExpired = ref(false);
const currentToken = ref('');

const authRefreshHandler = useAuthFailureHandler();

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
};

const checkToken = async () => {
  try {
    const { valid, token } = await $fetch("/api/tokenVerify", {
      method: "POST",
      body: JSON.stringify({
        token: useUserSession().session.value.secure?.apiToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    currentToken.value = token;
    console.log("Token is valid:", { valid });
    tokenExpired.value = !valid;
  } catch (error) {
    if (error.status === 401) {
      authRefreshHandler();
    }
    console.error("Token verification failed:", { error });
    tokenExpired.value = true;
    // navigateTo({ name: "login" });
  }
};

onMounted(() => {
  checkToken();
});
</script>
