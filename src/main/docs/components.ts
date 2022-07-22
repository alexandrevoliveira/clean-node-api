import { apiKeyAuthSchema } from './schemas/'
import {
  badRequest,
  forbidden,
  notFound,
  serverError, unauthorized
} from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  forbidden,
  notFound,
  serverError,
  unauthorized
}
