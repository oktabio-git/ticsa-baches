import Auth from './auth';
import travel from './travel';
import analythic from './analythic';

const factories = client => ({
  auth: Auth(client),
  travel: travel(client),
  analythic: analythic(client),
});

export default factories