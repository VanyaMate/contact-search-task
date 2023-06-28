import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import delay from "../../../utils/delay";

@Injectable()
export class FakeService {

    validateUser (): Promise<void> {
        return delay(() => console.log('Валидация пользователя'), 1000);
    }

    validateInput (): Promise<void> {
        return delay(() => console.log('Валидация введенных данных'), 500);
    }

    receivingFiles (): Promise<void> {
        return delay(() => console.log('Получение файлов'), 2000);
    }

    dataTransformation (): Promise<void> {
        return delay(() => console.log('Данные трансформированы'), 1500);
    }

}