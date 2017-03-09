import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class RepositoriesService {

	baseUrl : String = "https://api.github.com";
	username: String = "walr";

  constructor(private http: Http) { }

  getRepos(){
  	return this.http.get(this.baseUrl+"/users/"+this.username+"/repos")
  }

}
