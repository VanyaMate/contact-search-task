export const cn = function (...classNames: (string | undefined)[]): string {
    return classNames.filter((className) => className).join(' ');
}