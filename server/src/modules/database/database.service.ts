import {Injectable} from "@nestjs/common";
import {DatabaseModels} from "./database.models";
import * as path from "path";
import * as fs from "fs";

@Injectable()
export class DatabaseService {

    async create<T> (model: DatabaseModels, data: T): Promise<boolean> {
        const databaseData: T[] = this._readModel<T>(model);
        return this._writeModel<T>(model, [...databaseData, data]);
    }

    async findOne<T> (model: DatabaseModels, filter: Partial<T>): Promise<T> {
        const databaseData: T[] = this._readModel<T>(model);
        const [item, index]: [T, number] = this._findOne(databaseData, filter);

        return item;
    }

    async findMany<T> (model: DatabaseModels, filter: Partial<T>): Promise<T[]> {
        const databaseData: T[] = this._readModel<T>(model);
        const filterKeys: string[] = Object.keys(filter);

        return databaseData.filter((item) => {
            for (let i: number = 0; i < filterKeys.length; i++) {
                const key: string = filterKeys[i];
                if (item[key] !== filter[key]) {
                    return false;
                }
            }

            return true;
        })
    }

    async update<T> (model: DatabaseModels, filter: Partial<T>, data: Partial<T>): Promise<boolean> {
        const databaseData: T[] = this._readModel<T>(model);
        const [item, index]: [T, number] = this._findOne<T>(databaseData, filter);

        if (item !== null) {
            databaseData[index] = {...databaseData[index], ...data};
            return this._writeModel(model, databaseData);
        }

        return false;
    }

    async delete<T> (model: DatabaseModels, filter: Partial<T>): Promise<boolean> {
        const databaseData: T[] = this._readModel<T>(model);
        const [item, index]: [T, number] = this._findOne<T>(databaseData, filter);

        if (item !== null) {
            databaseData.splice(index, 1);
            return this._writeModel(model, databaseData);
        }

        return false;
    }

    private _findOne<T> (databaseData: T[], filter: Partial<T>): [T, number] {
        const filterKeys: string[] = Object.keys(filter);
        if (!filterKeys.length) return [null, -1];

        for (let i: number = 0; i < databaseData.length; i++) {
            const item: T = databaseData[i];
            let approach: boolean = true;

            for (let j: number = 0; j < filterKeys.length; j++) {
                const key: string = filterKeys[i];
                if (item[key] !== filter[key]) {
                    approach = false;
                    break;
                }
            }

            if (approach) {
                return [item, i];
            }
        }

        return [null, -1];
    }

    private _readModel<T> (model: DatabaseModels): T[] {
        const filePath = this._getFilePath(model);

        if (!fs.existsSync(filePath)) {
            this._writeModel<T>(model, []);
            return [];
        }

        const file: string = fs.readFileSync(filePath, { encoding: 'utf-8' });
        return JSON.parse(file);
    }

    private _writeModel<T> (model: DatabaseModels, data: T[]): boolean {
        const filePath: string = this._getFilePath(model);
        const fileData: string = JSON.stringify(data);
        fs.writeFileSync(filePath, fileData, { encoding: 'utf-8' });

        return true;
    }

    private _getFilePath (model: DatabaseModels): string {
        const fileFolder: string = path.resolve(__dirname, '..', '..', '..', 'database-store');
        return `${ fileFolder }/${ model }.data.json`;
    }

}