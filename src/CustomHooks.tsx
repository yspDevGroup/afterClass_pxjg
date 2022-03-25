/*
 * @description: 自定义hooks
 * @author: zpl
 * @Date: 2021-11-24 16:39:47
 * @LastEditTime: 2021-11-24 17:38:16
 * @LastEditors: zpl
 */
import { useRef } from 'react';

/**
 * 防抖
 *
 * @export
 * @param {(...params: any) => any} fn
 * @param {number} delay
 * @return {*}
 */
export function useDebounce(fn: (...params: any) => any, delay: number) {
  const { current } = useRef<{ timer?: NodeJS.Timeout }>({});

  return (...args: any) => {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(fn.bind(undefined, ...args), delay);
  };
}

/**
 * 截流
 *
 * @export
 * @param {(...params: any) => any} fn
 * @param {number} delay
 * @return {*}
 */
export function useThrottle(fn: (...params: any) => any, delay: number) {
  const { current } = useRef<{ timer?: NodeJS.Timeout }>({});
  return function (...args: any) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      fn(...args);
    }
  };
}
