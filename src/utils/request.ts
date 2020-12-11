/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request'
import { Toast } from 'antd-mobile';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

/**
 * 异常处理程序
 */
export const errorHandler = (error: { response: Response }): Response => {
  const { response } = error
  if (!response) {
    Toast.fail('您的网络发生异常，无法连接服务器')
    return response
  }

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText
    const { status, url } = response
    Toast.fail({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    })
  }
  return response
}

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
})
/**
 * 对请求统一处理
 */
request.interceptors.request.use((url: any, options: any) => {
  // 统一设置token
  // options.headers.Authorization = Cookies.get('tokenCrm')
  return options
})
/**
 * 对响应统一处理
 */
request.interceptors.response.use(async response => {
  const contentType = response.headers.get('content-type')
  if (contentType === 'application/octet-stream') {
    return response
  }
  // 将接口返回的数据格式化成json
  // const res = await response.clone().json()
  return response
})

function handleResError(err) {
  Toast.fail(err.message)
  const code = err?.errCode
  // token过期，重新登录
  if (code === 10110002) {
    // logout()
  }
}

// 不需要在代码中处理错误的状态码都放在此变量中
const resErrCodeArr = [ 50000, 10110002 ]

function wrapRequest(url: string, newOptions?: any) {
  return new Promise((resolve) => {
    request(url, { ...newOptions }).then((res: any) => {
      if (res?.type === 'application/octet-stream') {
        resolve(res)
        return
      }
      const errcode = res.errCode || res.errcode
      if (resErrCodeArr.includes(errcode)) {
        const msg = res?.errmsg || res?.errMsg
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw { ...res, message: msg }
        return
      }
      resolve(res)
    }).catch(err => {
      handleResError(err)
    })
  })
}

export default wrapRequest
