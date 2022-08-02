import { makeDbAuthentication, makeLoginValidation, makeLogControllerDecorator } from '@/main/factories'
import { LoginController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
