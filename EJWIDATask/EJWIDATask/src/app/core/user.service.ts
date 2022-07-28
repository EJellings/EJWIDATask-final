import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, pipe, tap } from 'rxjs';
import { Todos } from '../shared/todos';
import { AssignUser, User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userS:User[];
  private todoS:Record<number,Todos[]> = {};

  GetAllUsers() : Observable<User[]>{

    if(!!this.userS){
      return of(this.userS);
    }
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
                    .pipe(tap(data => {
                      this.userS = data;
                    }));
  }

  GetTodos(user:User) : Observable<Todos[]> {
    if(!!this.todoS[user.id]){
      return of(this.todoS[user.id])
    }
    return this.http.get<Todos[]>(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
                    .pipe(tap(data => {
                      this.todoS[user.id] = data;
                    }));
  }

  PutUser(user:User) : Observable<User>{
    return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
                      .pipe(tap(data => {
                        for(let i = 0; i < this.userS.length; i++){
                          const currentUser = this.userS[i];

                          if(data.id == currentUser.id){

                            AssignUser(data, currentUser);
                          }
                        }
                      }));

  }
}
