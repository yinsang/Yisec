import Component from './Component';
import render from './render';
import { autorun, observer, isObserve, addObserve, ObserveOptions, observerDeep, AutorunOption } from './autorun';
import register, { registerComponents } from "./register";
import { addEventAlias } from "./event/alias";
import { addPipe } from "./execExpr";
import forceUpdate from "./forceUpdate";
import { VirtualDOM } from "./d";
import { YisecElement } from "./util";
import router from './plugins/router';
import cssModule from './plugins/cssModule';
declare const _default: {
    observer: (obj: any, options?: ObserveOptions) => any;
    isObserve: (obj: any) => boolean;
    addObserve: (ctx: any, key: string, defaultValue?: any, options?: ObserveOptions) => void;
    observerDeep: (obj: any) => any;
    autorun: (fn: () => void, options?: AutorunOption) => () => void;
    Component: typeof Component;
    render: (Com: any, props: any, dom: YisecElement, vdom?: VirtualDOM | undefined) => Component;
    register: (name: string, Com: typeof Component) => void;
    registerComponents: {};
    addEventAlias: (eventName: string, fn: any) => void;
    addPipe: (...ctxs: any[]) => void;
    forceUpdate: (afterFn?: () => void) => void;
    router: (config: any) => void;
    cssModule: (styles: any) => (target: any) => void;
};
export default _default;
export { observer, isObserve, addObserve, observerDeep, autorun, Component, render, register, registerComponents, addEventAlias, addPipe, forceUpdate, router, cssModule };
