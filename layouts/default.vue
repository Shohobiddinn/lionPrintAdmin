<template>
    <div>
      <nav>
        <div class="container">
          <div class="logo">
            <img src="../image/g10.png" alt="" />
          </div>
          <div class="items">
        
            <ul class="menu">
              <li class="menu_item">
                <NuxtLink class="menu_item_link" to="/">Dashboard</NuxtLink>
              </li>
              <li class="menu_item">
                <NuxtLink class="menu_item_link" to="/">Report</NuxtLink>
              </li>
              <li class="menu_item">
                <NuxtLink class="menu_item_link" to="/">Camera</NuxtLink>
              </li>
              <li class="menu_item">
                <NuxtLink class="menu_item_link" to="/">Settings</NuxtLink>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
      <NuxtPage/>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  </style>