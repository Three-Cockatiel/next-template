/**
 * @name route
 */
export interface RouteType {
  /**
   * @name path
   */
  path: string;
  /**
   * @name pc路由名
   */
  name: ReactNode;
  /**
   * @name 手机端路由名
   */
  phoneName?: ReactNode;
  /**
   * @name 是否在导航展示
   */
  hidden?: boolean;
  /**
   * @name 子路由
   */
  children?: RouteType[];
}
