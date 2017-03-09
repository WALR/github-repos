import { Component, OnInit } from '@angular/core';

import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

	repositories : any = [];

	repository : IRepository = {name:"", description:""};
	newRepository : IRepository = {name:"", description:""};

  constructor(private repoService : RepositoriesService) { }

  ngOnInit() {
  	// this.repository = {name:"Angular WL", description:"Yeahhh"}

  	// setTimeout(() => {
	  // 	this.repositories = [
	  // 		{name:"Angular WL", description:"Yeahhh"},
	  // 		{name:"Django WL", description:"Django Yeaaaa"},
	  // 		{name:"Ionic WL", description:"Ionic Yeaaaa"},
	  // 		{name:"Ruby WL", description:"Ruby mm Yeah"}
	  // 	];
  	// }, 3000);

  	this.repoService.getRepos().subscribe((data) => {
  		this.repositories = data.json();
  		this.repository = this.repositories[0];
  	});
  }

  setMainRepository(repo){
  	this.repository = repo;
  }

  addNewRepo(){
  	this.repositories.unshift(this.newRepository);
  	this.newRepository = {name:"", description:""};
  }

}

interface IRepository{
	name: String,
	description: String
}
