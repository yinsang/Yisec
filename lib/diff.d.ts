export interface Add {
    before: {
        key: any;
        arr: any[];
    };
    after: {
        key: any;
        arr: any[];
    };
}
export default function diff(oldArr?: never[], newArr?: never[], isKeyExist?: boolean): {
    del: {
        arr: never[];
    };
    add: Add;
};
