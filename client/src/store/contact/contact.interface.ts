export interface IContact {
    readonly email: string;
    readonly number: string;
}

export interface IContactSearch {
    readonly email: string;
    readonly number?: string;
}