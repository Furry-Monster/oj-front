<template>
  <a-row :align="center" :gutter="-500">
    <div class="warnTitle">
      <img alt="No Auth" />
      <p>你没有权限！</p>
    </div>
    <a-divider type="vertical" />
    <div class="warnContent">
      <h2>你的账号没有足够的权限访问此页面，可能出于以下原因：</h2>
      <ul>
        <li>你没有登录</li>
        <li>你被禁止访问</li>
      </ul>
      <h2>请联系管理员获得权限。</h2>
    </div>
    <a-divider type="vertical" />
  </a-row>
</template>

<style scoped>
.warnTitle {
  color: #f5222d;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.warnTitle img {
  margin-right: 10px;
}

.warnContent {
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  text-align: justify;
}

.warnContent ul li {
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 1.5;
}
</style>

<script lang="ts"></script>
