//formatted camel case to kebabCase: forExample => for-example
export const camelToKebab = (str) => str.split('').map(el => el === el.toUpperCase() ? `-${el.toLowerCase()}` : el).join('');
