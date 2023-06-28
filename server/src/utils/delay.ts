export default async function<T> (callback, delay): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback());
        }, delay)
    })
}