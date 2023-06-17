export const emailValidator = function (email: string): boolean {
    return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i).test(email)
}

export const numberValidator = function (number: string): boolean {
    return new RegExp(/^\d{2}-\d{2}-\d{2}$/).test(number) || new RegExp(/^\d{6}$/).test(number);
}