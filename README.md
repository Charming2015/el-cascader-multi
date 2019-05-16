# el-cascader-multi

> 基于element-ui的级联多选选择器，友好显示下拉箭头，样式与element一致，支持多选与级联选择器的大部分功能。

[在线demo](<https://charming2015.github.io/el-cascader-multi-demo/dist/index.html>)

## 效果预览

![multi-cascader](https://s2.ax1x.com/2019/02/11/kaBE0U.gif)

## install 安装

```shell
npm i el-cascader-multi --save
```

## use 使用

在main.js中写入下面的代码

```javascript
import elCascaderMulti from "el-cascader-multi";
Vue.use(elCascaderMulti);
```

接下来，你就可以在页面中使用cascader-multi了

```html
<template>
    <el-cascader-multi v-model="checkList" :data="data"> </el-cascader-multi>
</template>
<script>
    export default {
        data () {
            return {
                data: [], // 与element级联选择器格式一致
                checkList: []
            }
        }
    }
</script>
```

**Select Attributes**

|          参数          | 说明                                                         |        类型        |        可选值         |                        默认值                        |
| :--------------------: | ------------------------------------------------------------ | :----------------: | :-------------------: | :--------------------------------------------------: |
|          data          | 用于渲染页面的数据(格式与element的级联选择器的数据格式一致)  |       Array        |           -           |                          无                          |
|         value          | 默认已选择数据项                                             |       Array        |           -           |                          无                          |
|        disabled        | 是否禁用                                                     |      boolean       |           -           |                        false                         |
|     expand-trigger     | 次级菜单的展开方式                                           | 次级菜单的展开方式 |     click / hover     |                        click                         |
|       separator        | 选项分隔符                                                   |       string       |           -           |                       横杆'-'                        |
|       value-key        | 指定选项的值为选项对象的某个属性值                           |       string       |           -           |                        value                         |
|       label-key        | 指定选项标签为选项对象的某个属性值                           |       string       |           -           |                        label                         |
|      children-key      | 指定选项的子选项为选项对象的某个属性值                       |       string       |           -           |                       children                       |
|          size          | 尺寸                                                         |       string       | medium / small / mini |                          -                           |
|       clearable        | 是否支持清空选项                                             |      boolean       |           -           |                        false                         |
|     collapse-tags      | 多选时是否将选中值按文字的形式展示                           |      boolean       |           -           |                        false                         |
|      placeholder       | 占位符                                                       |       string       |           -           |                        请选择                        |
|       filterable       | 是否可搜索                                                   |      boolean       |           -           |                        false                         |
|     filter-method      | 自定义搜索方法                                               |      function      |           -           | 参数为（list，searchText），需要把过滤后的数据return |
|      no-data-text      | 选项为空时显示的文字                                         |       string       |           -           |                        无数据                        |
|      popper-class      | Select 下拉框的类名                                          |       string       |           -           |                          -                           |
|    reserve-keyword     | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词     |      boolean       |           -           |                        false                         |
|       only-last        | 是否只有叶子节点才支持多选                                   |      boolean       |           -           |                        false                         |
| is-two-dimension-value | 绑定的value是[['level-1','level-2', ''level-3''], ['level-21', 'level-22']]，还是['level-3', 'level-22']这种格式 |      boolean       |           -           |                         true                         |
|    show-leaf-label     | 是否只显示最后一级的label                                    |      boolean       |           -           |                        false                         |

**Select Events**

|    事件名称    | 说明                               |           回调参数            |
| :------------: | ---------------------------------- | :---------------------------: |
|     change     | 选中值发生变化时触发               |         目前的选中值          |
| visible-change | 下拉框出现/隐藏时触发              | 出现则为 true，隐藏则为 false |
|   remove-tag   | 移除tag时触发                      |          移除的tag值          |
|     clear      | 可清空模式下用户点击清空按钮时触发 |               -               |
|      blur      | 当 input 失去焦点时触发            |        (event: Event)         |
|     focus      | 当 input 获得焦点时触发            |        (event: Event)         |

**Select Slots**

|  名称  | 说明         |
| :----: | ------------ |
| prefix | 组件头部内容 |

## 更新日志

**版本：1.1.6**

时间：2019-05-16 14:50

内容：

- fix： “程序改变value的值时，选中状态无法更新”
- feat: “value强制要求为数组，不能为其他值(undefined)”
- feat: 设置input的width为100%
- fix: “键盘操作选中/删除选项时，数据框的值变化，但是checkbox没有更新 ”
- feat: “支持只显示最后一级的label（showLeafLabel）”
- feat: 删除lodash，功能函数自己写
- feat: 重新打开浮层时，恢复显示第一层

--------

**版本：1.1.4**

时间：2019-04-28 16:40

内容：

- 修复：trigger为hover时无法选中问题
- 修复：用代码改value没有更新选中状态

- 修复：清除全部时，没有清掉内容

-----

**版本：1.1.2**

时间：2019-04-23 11:10

内容：

- 新增支持“绑定value的格式”：`is-two-dimension-value`

  > 表示绑定的value是`[['level-1','level-2', ''level-3''], ['level-21', 'level-22']]`，还是`['level-3', 'level-22']`这种格式

- 优化代码eslint报错

------

**版本：1.1.0**

时间：2019-04-19 15:10

内容：

- 修复checkbox无法选中的bug
- 新增支持“只有叶子节点才能多选”
- 浮窗样式调整
- 从dist目录引入编译后的文件

​	