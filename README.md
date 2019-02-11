# el-cascader-multi

> 基于element-ui的级联多选选择器，友好显示下拉箭头，样式与element一致，支持多选与级联选择器的大部分功能。

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
                data: [],
                checkList: []
            }
        }
    }
</script>
```

**Select Attributes**

|      参数       | 说明                                                        |        类型        |        可选值         |                        默认值                        |
| :-------------: | ----------------------------------------------------------- | :----------------: | :-------------------: | :--------------------------------------------------: |
|      data       | 用于渲染页面的数据(格式与element的级联选择器的数据格式一致) |       Array        |           -           |                          无                          |
|      value      | 默认已选择数据项                                            |       Array        |           -           |                          无                          |
|    disabled     | 是否禁用                                                    |      boolean       |           -           |                        false                         |
| expand-trigger  | 次级菜单的展开方式                                          | 次级菜单的展开方式 |     click / hover     |                        click                         |
|    separator    | 选项分隔符                                                  |       string       |           -           |                       横杆'-'                        |
|    value-key    | 指定选项的值为选项对象的某个属性值                          |       string       |           -           |                        value                         |
|    label-key    | 指定选项标签为选项对象的某个属性值                          |       string       |           -           |                        label                         |
|  children-key   | 指定选项的子选项为选项对象的某个属性值                      |       string       |           -           |                       children                       |
|      size       | 尺寸                                                        |       string       | medium / small / mini |                          -                           |
|    clearable    | 是否支持清空选项                                            |      boolean       |           -           |                        false                         |
|  collapse-tags  | 多选时是否将选中值按文字的形式展示                          |      boolean       |           -           |                        false                         |
|   placeholder   | 占位符                                                      |       string       |           -           |                        请选择                        |
|   filterable    | 是否可搜索                                                  |      boolean       |           -           |                        false                         |
|  filter-method  | 自定义搜索方法                                              |      function      |           -           | 参数为（list，searchText），需要把过滤后的数据return |
|  no-data-text   | 选项为空时显示的文字                                        |       string       |           -           |                        无数据                        |
|  popper-class   | Select 下拉框的类名                                         |       string       |           -           |                          -                           |
| reserve-keyword | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词    |      boolean       |           -           |                        false                         |

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

