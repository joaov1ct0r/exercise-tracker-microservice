export default interface ICreateExercisesService {
  execute(
    userId: string,
    description: string,
    duration: string,
    date: Date
  ): Promise<Object>;
}
