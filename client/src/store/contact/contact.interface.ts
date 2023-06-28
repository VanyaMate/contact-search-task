export interface IContact {
    readonly email: string;
    readonly number: string;
}

export interface IContactSearch {
    email: string;
    number?: string;
}