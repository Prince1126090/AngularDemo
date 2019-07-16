import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Module} from './module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  modules: Module[];

  constructor(private http: HttpClient) {
  }


  getModules() {
    return this.http.get<Module[]>('http://localhost:3001/module/');
  }

  getModuleByOid(oid: string) {
    return this.http.get<Module>('http://localhost:3001/module/' + oid);
  }

  saveModule(module: Module) {
    return this.http.put<Module>('http://localhost:3001/module/', module);
  }

}
