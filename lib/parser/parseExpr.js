import { uniqueArr } from "./../util";
const parseExpr = (() => {
    const cache = {};
    return function parseExpr(body) {
        if (cache[body]) {
            return cache[body];
        }
        // 去除字符串，剩下的都是变量
        // 对于关键字new 和 对象的支持很懵逼
        let params = (body.replace(/'[^']*'|"[^"]*"/g, ' ') // 移除字符串
            .replace(/([A-Za-z_$][A-Za-z0-9_$]*\s*)?:/g, '') // 移除对象key
            .match(/\.?[A-Za-z_$][A-Za-z0-9_$]*/g) || [] // 获取所有变量 .?aa
        ).filter(i => i[0] !== '.'); // 去除.aa
        params = uniqueArr(params);
        const result = {
            params,
            body,
            fn: new Function(...params, `return ${body}`)
        };
        cache[body] = result;
        return result;
    };
})();
export default parseExpr;