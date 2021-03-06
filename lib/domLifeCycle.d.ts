import { VirtualDOM } from './d';
/**
 * dom加载成功后，同步做某些事情
 * @param vdom
 */
export declare function handleEnter(vdom: VirtualDOM): void;
/**
 * 判断dom是否可以异步卸载
 * @param vdom
 */
export declare function handleLeave(vdom: VirtualDOM): boolean | Promise<void>;
