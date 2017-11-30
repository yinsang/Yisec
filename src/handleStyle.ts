import { getType, isString } from "./util";
export default function handleStyle(style: any) {
    switch (getType(style)) {
        case 'string': {
            return style
        }
        case 'array': {
            return style.map(handleStyle).join(';')
        }
        case 'object': {
            return Object.entries(style).map(([key, value]) => {
                if (isString(value)) {
                    const KEY = key.replace(/[A-Z]/g, $1 => '-' + $1.toLowerCase())
                    return `${KEY}: ${value}`
                } 
                return ''
            }).filter(i => i).join(';')
        }
        default: {
            return ''
        }
    }
}
