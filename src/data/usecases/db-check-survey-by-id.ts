import { CheckSurveyByIdRepository } from '@/data/protocols'
import { CheckSurveyById } from '@/domain/usecases'

export class DbCheckSurveyById implements CheckSurveyById {
  constructor (private readonly checkSurveyByIdRepository: CheckSurveyByIdRepository) {}

  async checkById (id: string): Promise<CheckSurveyById.Result> {
    return this.checkSurveyByIdRepository.checkById(id)
  }
}
