export default interface IListUsersLogService {
  execute(
    userId: string,
    findConditions: string,
    limit: number
  ): Promise<Object>;
}
