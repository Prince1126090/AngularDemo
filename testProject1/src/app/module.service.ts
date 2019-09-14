import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) {
  }

  getConfigs() {
    return this.http.get<any[]>('http://localhost:9099/');
  }

}
