const isNodeCheck = new Function('try {return this===global;}catch(e){return false;}')
export const isNode: boolean = isNodeCheck()

const isBrowserCheck = new Function('try {return this===window;}catch(e){ return false;}')
export const isBrowser: boolean = isBrowserCheck()

