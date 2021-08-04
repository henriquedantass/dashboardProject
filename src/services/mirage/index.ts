import {createServer , Factory, Model} from 'miragejs'
import faker from 'faker'

interface UserProps {
  name: string;
  email: string;
  create_at: string;
}


export function makeServer(){
  const server = createServer({
    models: {
      user: Model.extend<Partial<UserProps>>({})
    },

    factories: {
      user: Factory.extend({
        name () {
          return faker.internet.userName().toLocaleLowerCase();
        },
        email () {
          return faker.internet.email().toLowerCase();

        },
        createdAt () {
          return faker.date.recent(10);

        },
      })
    },

    seeds(server) {
      server.createList('user', 10)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough()
    }
  });

  return server;
}