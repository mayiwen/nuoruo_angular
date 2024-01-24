/** 定义message的一个参数 */
export interface MessageI {
  /** 标题的名称 */
  title?: string;
  /** message 显示的名称 */
  message?: string;
  /** 点击成功执行的方法。 */
  success: Function
}