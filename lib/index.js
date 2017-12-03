import Component from './Component';
import render from './render';
import { autorun, observer, isObserve, addObserve, observerDeep } from './autorun';
import register, { registerComponents } from "./register";
import { addEventAlias } from "./eventAlias";
import { addPipe } from "./execExpr";
import forceUpdate from "./forceUpdate";
export default {
    Component,
    render,
    autorun,
    observer,
    isObserve,
    addObserve,
    observerDeep,
    register,
    addEventAlias,
    registerComponents,
    addPipe,
    forceUpdate,
};
export { Component, render, autorun, observer, isObserve, addObserve, observerDeep, register, addEventAlias, registerComponents, addPipe, forceUpdate, };