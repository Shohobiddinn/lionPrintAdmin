<template>
    <div>
      <div class="login_page">
        <div class="container">
          <div class="login_page_content">
           
            <div class="login_page_content_logo">
              <img src="../image/g10 (1).png" alt="logo" />
            </div>
            <div class="login_page_content_title">Sing in</div>
            <div class="login_page_content_inputs">
              <div class="login_page_content_inputs_input">
                <input type="text" v-model="username" placeholder="Username" />
                <input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="login_page_content_icon" @click="loginApi()">Login</div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script setup>
  const baseUrl = useRuntimeConfig().public.baseUrl;
  const login = ref(null);
  const username = ref("");
  const password = ref("");
  async function loginApi() {
    const data = await $fetch(baseUrl + "/auth/login", {
      method: "POST",
      body:JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });
    login.value = data;
    localStorage.setItem('userToken',data.result.token)
    console.log(data,'salom');
  }
  </script>
    
    <style lang="scss" scoped>
  </style>