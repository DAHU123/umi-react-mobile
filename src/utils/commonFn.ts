// 校验手机号的格式
export function isCellPhone (val: string) {
  let phoneReg = /^1(3|4|5|6|7|8)\d{9}$/
  if (!phoneReg.test(val)) {
    return false
  } else {
    return true
  }
}
