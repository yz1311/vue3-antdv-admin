// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 获取角色列表 GET /api/marketing/customer */
export async function customerList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleListParams,
  options?: RequestOptions,
) {
  return request<{
    items?: API.RoleEntity[];
    meta?: {
      itemCount?: number;
      totalItems?: number;
      itemsPerPage?: number;
      totalPages?: number;
      currentPage?: number;
    };
  }>('/api/marketing/customer/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增角色 POST /api/marketing/customer */
export async function customerCreate(body: API.RoleDto, options?: RequestOptions) {
  return request<any>('/api/marketing/customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 获取角色信息 GET /api/marketing/customer/${param0} */
export async function customerInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleInfoParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RoleInfo>(`/api/marketing/customer/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新角色 PUT /api/marketing/customer/${param0} */
export async function customerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleUpdateParams,
  body: API.RoleUpdateDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/marketing/customer/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除角色 DELETE /api/marketing/customer/${param0} */
export async function customerDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/marketing/customer/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}