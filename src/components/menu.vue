<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">上海石化</div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>价值链表征</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="fund" />
          <span>装置实时仿真</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="rise" />
          <span>生产计划优化</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="sliders" />
          <span>原油切割测算</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="area-chart" />
          <span>数据分析报表</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '1000px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
}
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: auto;
  background: rgba(235, 237, 240, 0.959);
  margin: 16px;
}
</style>
