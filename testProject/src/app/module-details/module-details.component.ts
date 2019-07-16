import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Module} from '../module.model';
import {ModuleService} from '../module.service';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {
  modules:  Module[];
  module: Module;
  oid: string;
  constructor( private route: ActivatedRoute, private moduleService: ModuleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.oid = params.get('moduleOid');
      console.log(params.get('moduleOid'));
      this.showModuleDetails(this.oid);
    });
  }

  showModuleDetails(oid: string){
    this.moduleService.getModuleByOid(this.oid).subscribe(module => {
      this.module = module;
      this.module = this.module;
    });
  }

  edit(module: Module){
    this.moduleService.saveModule(module).subscribe(response => {console.log(response)});
  }

}
