// Dependancies Needed.
import {Injectable} from 'angular2/core';  
import {Http, Headers} from 'angular2/http';
// End of Dependancies.
// Injectable to make the service injectable to another module.
@Injectable()
// Http Call
export class GitHubService {  
    constructor(private http: Http) {
    }
// Fetching The Repo Service
    getRepos(username) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }
    
    // Fetching the ReadMe of The Repo
    getDetails(repo) {
        let headers = new Headers();
        headers.append('Accept','application/vnd.github.VERSION.html');
        // Returning the ReadMe of the Repo
        return this.http.get('${repo.url}/readme', { headers: headers });
    }
}