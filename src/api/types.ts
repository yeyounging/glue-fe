export interface BaseResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
}

export interface PaginationInfo {
  hasNext: boolean;
  isFirst: boolean;
  isLast: boolean;
}
