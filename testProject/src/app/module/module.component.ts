import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../module.service';
import {Module} from '.././module.model';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  modules: Module[];

  constructor(private moduleService: ModuleService) {

  }

  ngOnInit() {
    this.showModule();
  }

  showModule() {
    this.moduleService.getModules().subscribe(modules => this.modules = modules);
    console.log(this.modules);
  }

}
