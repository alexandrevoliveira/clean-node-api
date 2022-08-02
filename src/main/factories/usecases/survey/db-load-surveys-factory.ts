import { DbLoadSurveys } from '@/data/usecases'
import { LoadSurveys } from '@/domain/usecases'
import { SurveyMongoRepository } from '@/infra/db'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(surveyMongoRepository)
}
