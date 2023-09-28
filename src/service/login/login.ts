import HYRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './types'

export function accountLoginRequest(account: IAccount) {
  return HYRequest.post<IDataType<ILoginResult>>({
    url: '/login',
    data: account
  })
}
