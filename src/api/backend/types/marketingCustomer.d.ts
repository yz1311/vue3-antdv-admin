declare namespace API {
  type CustomerDto = {
    /** 角色名称 */
    name: string;
    /** 角色标识 */
    value: string;
    /** 角色备注 */
    acquaintanceDate?: string;
    accessDate?: string;
    birthDate?: string;
    remark?: string;
    /** 状态 */
    status: 0 | 1;
    /** 关联菜单、权限编号 */
    menuIds?: number[];
  };

  type CustomerItemInfo = {
    name: string;
    customerType: string;
    remark: string;
    status: string;
    acquaintanceDate: string;
    accessDate: string;
    birthDate: string;
  };
}
