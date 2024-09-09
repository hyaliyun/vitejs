---
layout: page
title: Meet the Team
description: The development of Vite is guided by an international team.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core, emeriti, cnTranslator } from './_data/team'
</script>
<style>
  .sectionContainer {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(135deg, #3498db, #2c3e50);
    color: white;
    border-radius: 12px 12px 0 0;
    margin-bottom: 30px;
  }
  
  .sectionContainer h1 {
    font-size: 2.5em;
    margin-bottom: 15px;
    color: white;
  }
  
  .formButton {
    display: inline-block;
    padding: 10px 20px;
    background-color: #2ecc71;
    color: white;
    border-radius: 25px;
    font-weight: bold;
    margin-top: 20px;
    transition: all 0.3s ease;
  }
  
  .formButton:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  </style>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>展示你们的代币</template>
    <template #lead>
      人们利用Solana构建的代币列表，<br>
        <a class="formButton" href="https://github.com/hyaliyun/vuejs/discussions/2" target="_blank">
          🙏 请添加您的代币
        </a>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  <VPTeamPageSection>
    <template #title>你的代币都长啥样</template>
    <template #lead>
      嘿，能不能让我们看看你的代币都长啥样啊？
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="cnTranslator" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>请展示当前的代币种类</template>
    <template #lead>
      包括其技术特性、应用场景及市场流通情况。
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="emeriti" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
