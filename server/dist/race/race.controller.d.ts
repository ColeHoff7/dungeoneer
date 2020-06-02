import { RaceService } from './race.service';
import { Race } from './race.interface';
export declare class RaceController {
    private readonly raceService;
    constructor(raceService: RaceService);
    get(): Promise<Race[]>;
    getByName(name: string): Promise<Race[]>;
    getById(id: string): Promise<Race>;
}
