import _ from 'lodash'
import { _uniq } from '../tool/unit'
let nodeIdSeed = 0
export default class Node {
  constructor (options) {
    this.id = nodeIdSeed++
    this.data = null
    this.parent = null
    this.isLeaf = true
    this.checked = false
    for (let option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option]
      }
    }
    let store = this.store
    this[store.valueKey] = options[store.valueKey] || null
    this.level = 0
    this.childNodes = []
    if (this.parent) {
      this.level = this.parent.level + 1
      store.maxLevel = Math.max(store.maxLevel, this.level)
      this.totalLabel = this.parent.totalLabel
        ? `${this.parent.totalLabel}${this.store.separator}${this[store.labelKey]}`
        : this[store.labelKey]
      this.showLabel = this.store.showLeafLabel ? this.label : this.totalLabel
    }
    this._idArr = this.parent && this.parent[store.valueKey]
      ? [...this.parent._idArr, this[store.valueKey]]
      : [this[store.valueKey]]
    this.setData(this.data)
  }

  setData (data) {
    let store = this.store
    this.data = data
    this.childNodes = []
    let children
    if (this.level === 0 && this.data instanceof Array) {
      children = this.data
    } else {
      children = this.hasOwnProperty(store.childrenKey) ? this[store.childrenKey] : []
      this.isLeaf = children.length === 0
      this.store.nodesMap[this.id] = this
      this.store.nodeList.push(this)
      this[store.valueKey] = this[store.valueKey]
    }
    children.forEach(child => {
      this.insertChild(child)
    })
  }

  insertChild (child) {
    child = Object.assign(child, {
      parent: this,
      store: this.store
    })
    child = new Node(child)
    this.childNodes.push(child)
  }

  check (checked) {
    if (this.disabled) { return false }
    this.checked = checked
    this.updateSelectIds(checked, this.id)
    if (this.childNodes) {
      this.childNodes.forEach(child => {
        child.check(checked)
      })
    }
    if (this.parent) {
      this.parent.checkedAll()
    }
  }
  checkedAll () {
    if (this.childNodes) {
      this.checked = this.childNodes.every(child => child.checked)
      this.updateSelectIds(this.checked, this.id)
    }
    if (this.parent) {
      this.parent.checkedAll()
    }
  }

  updateSelectIds (checked, id) {
    let store = this.store
    if (checked) {
      if (this.isLeaf) {
        let tempList = [...store.selectedIds]
        tempList.push(id)
        tempList = _uniq(tempList)
        store.selectedIds = tempList
      }
    } else {
      let tempList = [...store.selectedIds]
      let index = tempList.findIndex(o => o === id)
      if (index >= 0) {
        tempList.splice(index, 1)
      }
        tempList = _uniq(tempList)
        store.selectedIds = tempList
    }
  }
}
