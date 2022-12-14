// * 請求枚舉配置
/**
 * @description：請求配置
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 500,
  OVERDUE = 599,
  TIMEOUT = 10000,
  TYPE = 'success'
}

/**
 * @description：請求方法
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

/**
 * @description：常用的contentTyp類型
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // text
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data 上傳
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}
