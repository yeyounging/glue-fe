export interface BaseResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
}
