import { Model } from 'mongoose';
import { Race } from './race.interface';
export declare class RaceService {
    private raceModel;
    constructor(raceModel: Model<Race>);
    get(): Promise<Race[]>;
    getById(id: string): Promise<Race>;
    getByName(name: string): Promise<Race[]>;
}
