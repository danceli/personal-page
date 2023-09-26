import { Subject } from 'rxjs';

export interface IGlobalAction<T> {
  action: string;
  payload?: T;
  options: any;
}

export const $global: Subject<IGlobalAction<unknown>> = new Subject();

type TYPE_GLOBAL_EMIT = (action: string, payload?: unknown, options?: any) => void


export const globalEmit: TYPE_GLOBAL_EMIT = (action, payload, options) => {
  $global.next({
    action, 
    payload,
    options
  })
}