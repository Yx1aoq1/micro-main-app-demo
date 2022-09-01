<template>
  <el-container style="height: 100%">
    <el-header v-if="useHeader" height="50px" class="layout-header"> </el-header>
    <el-container class="layout-container">
      <el-aside width="200px">
        <router-link to="/home">go home</router-link>
        <router-link to="/demo1">go demo1</router-link>
      </el-aside>
      <el-container>
        <el-main class="layout-main">
          <div class="layout-main-content">
            <router-view />
            <div id="container"></div>
          </div>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>
<script></script>
