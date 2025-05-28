import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser(id?: string): JSON {
    if (id) {
      // Replace this with actual logic to find a user by id
      return JSON.parse(JSON.stringify({ id, name: 'User ' + id, email: '' }));
    }
    return JSON.parse('{"name": "John Doe", "email": ""}');
  }
}
