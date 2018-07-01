import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserModel } from '../model/user.model';

@Injectable()
export class UserService {

    private userListRef = this.db.list<UserModel>('user-list');

    constructor(private db: AngularFireDatabase) { }

    getUserList() {
        return this.userListRef;
    }

    addUser(user: UserModel) {
        return this.userListRef.push(user);
    }

    updateNote(user: UserModel) {
        return this.userListRef.update(user.key, user);
    }

    removeNote(user: UserModel) {
        return this.userListRef.remove(user.key);
    }
}
