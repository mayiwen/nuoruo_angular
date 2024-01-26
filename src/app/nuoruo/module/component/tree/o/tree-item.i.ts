export interface TreeI {
    /** 显示的值 */
    v?: string
    /** 绑定的值 */
    value?: string
    /** 孩子们，跟他的父亲是一个类型。 */
    children?: TreeI[]
    // 等级
    level?: number
    treeId?: string// 生成的唯一标识。
    /** 是根吗？ */
    flagRoot?: boolean
    /** 是否展开 */
    flagExpand?: boolean
    uuid?: string
  }
  
export interface  DropInterface {
  indexId: string,
  item: TreeI
}