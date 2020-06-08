import { DataSource } from '@angular/cdk/table';
import { IGameRound } from '../interfaces/igame-round';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { environment } from 'src/environments/environment';

export class GameTableDataSource extends DataSource<IGameRound>{

    constructor(private gameId: number, private http: HttpClient) {
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<IGameRound[] | readonly IGameRound[]> {
        let path: string = environment.url + 'games/' + this.gameId + '.json';
        return this.http.get<IGameRound[]>(path);
    }

    disconnect(collectionViewer: CollectionViewer): void { }
}