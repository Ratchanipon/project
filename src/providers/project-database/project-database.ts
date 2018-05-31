import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Project } from '../../model/interface/project';

/*
  Generated class for the ProjectDatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectDatabaseProvider {

  constructor(
    private database:AngularFireDatabase
  ) { }



  save(project:Project){
    //user.sort = this.countUser();
    return this.database.list('/project').push(project);
  }

  getList():FirebaseListObservable<Project[]>{
    return this.database.list('/project');
  }

  get(key:string):FirebaseObjectObservable<Project>{
    return this.database.object('/project/'+key);
  }

  update(project:Project){
    //user.sort = this.countUser();
    return this.database.list('/project').update(project.$key,project);
  }

  delete(project:Project){
    //user.sort = this.countUser();
    return this.database.list('/project').remove(project.$key);
  }

}
