import request from '@/utils/request.ts'

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

