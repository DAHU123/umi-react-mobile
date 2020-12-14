import { InputItem, Toast, Button, WhiteSpace } from 'antd-mobile';
import React, { useState } from 'react';
import { history } from 'umi';
import styles from './index.less';
import { isCellPhone } from '@/utils/commonFn';

function Login() {
  const [value, setVal] = useState<string>('')
  const [password, setPwd] = useState<string>('')
  const [hasPhoneError, setPhoneError] = useState<boolean>(false)
  const [hasPwdError, setPwdError] = useState<boolean>(false)

  const onChange = (val: string) => {
    if (!isCellPhone(val)) {
      setPhoneError(true)
    } else {
      setPhoneError(false)
    }
    setVal(val)
  }

  const onPwdChange = (val: string) => {
    if (!val) {
      setPwdError(true)
    } else {
      setPwdError(false)
    }
    setPwd(val)
  }

  const onErrorClick = () => {
    Toast.info('Please enter 11 digits')
  }

  const onPwdErrorClick = () => {
    Toast.info('Please enter password')
  }

  const handleLogin = () => {
    if (hasPhoneError || hasPwdError || !value || !password) {
      Toast.info('请完善表单内容')
      return
    }
    history.push('/')
  }

  return (
    <div className={styles['wrap-login']}>
      <div className='title'>登录</div>
      <InputItem
        type="number"
        placeholder="请输入手机号"
        error={hasPhoneError}
        onErrorClick={onErrorClick}
        onChange={onChange}
        value={value}
      >账号</InputItem>
      <InputItem
        type="password"
        placeholder="请输入密码"
        error={hasPwdError}
        onErrorClick={onPwdErrorClick}
        onChange={onPwdChange}
        value={password}
      >密码</InputItem>
      <WhiteSpace/>
      <Button type="primary" onClick={handleLogin}>点击登录系统</Button>
    </div>
  )
}

export default Login
