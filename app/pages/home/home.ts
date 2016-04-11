import {Page, NavController} from 'ionic-angular';
import {GitHubService} from '/home/anthony/ionic2-tutorial-github/app/providers/github/github.ts'
import {DetailsPage} from '../details/details';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHubService]
})
export class HomePage {
    public foundRepos;
    public username;
    
  constructor(private github: GitHubService,
              private nav: NavController) {
  }
//   3 Functions Here Below

// 1.Get and Handle the data
  getRepos() {
      this.github.getRepos(this.username).subscribe(
          data => {
              this.foundRepos = data.json();
          },
        //   2.Handles Errors
          err => console.error(err),
        //   3.Method for when Observable is called without errors
          () => console.log('getRepos completed')
      );
  }
  
  goToDetails(repo) {
      this.nav.push(DetailsPage, { repo: repo});
  }
}
