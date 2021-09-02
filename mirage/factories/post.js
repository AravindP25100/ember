import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title(i) {
    return `Post ${i + 1}`;
  },
  body() {
    return faker.lorem.paragraph();
  },
  name() {
    return faker.name.firstName();
  },
  phoneNumber() {
    return faker.phone.phoneNumberFormat();
  },
});
