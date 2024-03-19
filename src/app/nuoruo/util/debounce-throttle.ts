/**
 * @description: 节流装饰器
 * @param {number} delay
 * @return {*}
 */
export const Throttle = (delay: number = 200) => {
    let previous = 0
    return function (target: object, key: string | symbol, descriptor: PropertyDescriptor) {
        const method = descriptor.value
        descriptor.value = function (...args: any) {
            const now = Date.now()
            if (now - previous > delay) {
                previous = now
                const result = method.call(this, ...args)
                return result
            }
        }
    }
}

/**
* @description: 防抖装饰器
* @param {number} delay
* @return {*}
*/
export const Debounce = (delay: number = 200) => {
    let timer: any = null
    return function (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const method = descriptor.value
        descriptor.value = function (...args: any) {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                const result = method.call(this, ...args)
                return result
            }, delay)
        }
    }
}