<template>
  <el-menu style="width: 200px" theme="dark" :default-active="current_nav" :default-openeds="first_data_list.id"
           unique-opened>
    <el-submenu v-for="item in first_data_list" :index="item.id" key="id">
      <template slot="title"><i class="el-icon-message"></i>{{item.title}}</template>
      <el-submenu v-for="fitem in item.list" key="id" :index="fitem.id">
        <template slot="title">{{fitem.ftitle}}</template>
        <el-menu-item @select="changecurrent" v-for="sitem in fitem.childlist" :index="sitem.id" key="title">
          {{sitem.stitle}}
        </el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script type="es6">
  var Mock = require('mockjs')
  var mdata = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }]
  })
  export default {
    name: 'hello',
    data () {
      return {
        current_nav: '',
        first_data_list: [
          {
            id: '0',
            title: 'haha',
            list: [
              {
                id: '0-1',
                ftitle: '弘弘猪',
                childlist: [
                  {
                    id: '0-1-1',
                    stitle: 'sunzi',
                    index: 'baidu.com'
                  }
                ]
              },
              {
                id: '0-2',
                ftitle: '弘弘猪2',
                childlist: [{
                  id: '0-2-1',
                  stitle: 'sunzi',
                  index: 'baidu.com'
                }]
              }
            ]
          }
        ]
      }
    },
    methods: {
      changecurrent (key, Path) {
        console.log(key, Path)
        this.current_nav = key
      }
    },
    mounted (){
     console.log(JSON.stringify(mdata, null, 4))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .actived {
    background: #f0f0f0;
  }
</style>
