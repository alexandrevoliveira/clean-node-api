import { DbAddSurvey } from '@/data/usecases'
import { AddSurvey } from '@/domain/usecases'
import { SurveyMongoRepository } from '@/infra/db'

export const makeDbAddSurvey = (): AddSurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbAddSurvey(surveyMongoRepository)
}
