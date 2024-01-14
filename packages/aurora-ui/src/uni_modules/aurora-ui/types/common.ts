export interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

export interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}
