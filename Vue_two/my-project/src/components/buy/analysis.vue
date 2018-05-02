<template>
  <div id="detail">
    <div class="buy_header">
      <div class="buy_header_h1">
       流量分析
      </div>
      <div class="buy_header_text">
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      </div>
      <div class="header_selecetd_text">
        <div class="header_text">
          <div class="header_list">
            <p>购买数量:</p>
          </div>
          <div class="header_list">
            <p>产品类型:</p>
          </div>
          <div class="header_list">
            <p>有效时间:</p>
          </div>
          <div class="header_list">
            <p>总价:</p>
          </div>
        </div>
        <div class="header_selecetd">
          <div class="header_list">
            <select v-model="buy_ordermunber">
              <option v-for="item in ordermunber" :key="item">{{item}}</option>
            </select>
          </div>
          <div class="header_list">
            <select v-model="buy_ordername">
              <option v-for="item in ordername" :key="item">{{item}}</option>
            </select>
          </div>
          <div class="header_list">
            <p>半年</p>
          </div>
          <div class="header_list">
            <p>{{money}}元</p>
          </div>
        </div>
      </div>
      <div>
        <button class="buy_button">立即购买</button>
      </div>
    </div>
    <div class="table">
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
        <h3>用户行为指标</h3>
        <ul>
          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
          <li>用户在网站的停留时间；</li>
          <li>用户来源网站（也叫“引导网站”）；</li>
          <li>用户所使用的搜索引擎及其关键词；</li>
          <li>在不同时段的用户访问量情况等。</li>
        </ul>

        <h3>浏览网站方式</h3>
        <ul>
          <li>用户上网设备类型</li>
          <li>用户浏览器的名称和版本</li>
          <li>访问者电脑分辨率显示模式</li>
          <li>用户所使用的操作系统名称和版本</li>
          <li>用户所在地理区域分布状况等</li>
        </ul>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    ordermunber: {
      type: Array
    },
    ordername: {
      type: Array
    }
  },
  data () {
    return {
      buy_ordermunber: '1',
      buy_ordername: '入门版本'
    }
  },
  computed: {
    money () {
      var money = 0
      if (this.buy_ordername === '入门版本') {
        money = 500
      } else if (this.buy_ordername === '进阶版本') {
        money = 1000
      } else {
        money = 1500
      }
      return this.buy_ordermunber * money
    }
  },
  methods: {
  }
}
</script>

<style>
@import url('buy.css');
</style>
