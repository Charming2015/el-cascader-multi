<template>
  <ul>
    <li class="li-style"
      v-for="(node, nodeIndex) in list"
      :key="getKey(node)"
      @click="handleClick(node, nodeIndex, level)"
      :class="{'active-li': activeList[level - 1] === node.id}"
      @mouseenter="handleMouseEnter(node, nodeIndex, level)"
    >
      <p class="li-label-style">
        <el-checkbox @change="handleCheck($event, node)" v-model="node.checked" :disabled="node.disabled"></el-checkbox>
        <span style="margin-left:5px">{{node[labelKey]}}</span>
        <i v-if="node.childNodes && node.childNodes.length > 0" class="li-label-icon el-icon-arrow-right"></i>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    activeList: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => []
    },
    level: {
      type: [Number, String]
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    expandTrigger: {
      type: String,
      default: 'click'
    }
  },
  methods: {
    handleMouseEnter (node, levelIndex, level) {
      if (this.expandTrigger === 'hover') {
        this.$emit('handle-click', node, levelIndex, level)
      }
    },
    handleClick (node, levelIndex, level) {
      if (this.expandTrigger === 'click') {
        this.$emit('handle-click', node, levelIndex, level)
      }
    },
    handleCheck (v, node) {
      node.checked = v
      this.$emit('handle-check', node)
    },
    getKey () {
      return (+new Date() + Math.random()).toString()
    }
  }
}
</script>

<style>

</style>
