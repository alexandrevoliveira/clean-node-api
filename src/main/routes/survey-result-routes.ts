import { adaptRoute } from '@/main/adapters'
import { makeSaveSurveyResultController, makeLoadSurveyResultController } from '@/main/factories'
import { auth } from '@/main/middlewares'

import { Router } from 'express'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
  router.get('/surveys/:surveyId/results', auth, adaptRoute(makeLoadSurveyResultController()))
}
