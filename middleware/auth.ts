export default defineNuxtRouteMiddleware((to, from) => {
  if (!useUserSession().loggedIn.value) {
    console.log('test session ::: ', useUserSession())
    return navigateTo({ name: 'login' })
  }
})
