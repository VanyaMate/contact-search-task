export const convertToContactNumber = function (str: string): string {
    return (str.match(/\d/g) ?? []).join('');
}