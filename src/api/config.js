// 由于jsonp请求数据时，传递许多公共参数，所以将公共参数进行提炼到config.js进行统一调用
export const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0
