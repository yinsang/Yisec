import Component from './Component';
import render from './render';
import { autorun, observer, isObserve, addObserve, ObserveOptions, observerDeep } from './autorun';
import register, { registerComponents } from "./register";
import { addEventAlias } from "./eventAlias";
import { addPipe } from "./execExpr";
import forceUpdate, { addUpdateQueue } from "./forceUpdate";
import { VirtualDOM } from "./d";
import { FElement } from "./util";
import router from './router';
declare const _default: {
    Component: typeof Component;
    render: (Com: any, props: any, dom: FElement, vdom?: VirtualDOM | undefined) => Component;
    autorun: (fn: () => void, options?: {}) => () => void;
    observer: (obj: any, options?: ObserveOptions) => any;
    isObserve: (obj: any) => boolean;
    addObserve: (ctx: any, key: string, defaultValue?: any, options?: ObserveOptions) => void;
    observerDeep: (obj: any) => any;
    register: (name: string, Com: typeof Component) => void;
    addEventAlias: (eventName: string, fn: any) => void;
    registerComponents: {};
    addPipe: (...ctxs: any[]) => void;
    forceUpdate: (afterFn?: () => void) => void;
    addUpdateQueue: (list?: (() => any)[], key?: any) => void;
    router: (config: any) => void;
};
export default _default;
export { Component, render, autorun, observer, isObserve, addObserve, observerDeep, register, addEventAlias, registerComponents, addPipe, forceUpdate, addUpdateQueue, router };
