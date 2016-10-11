import Relay from 'react-relay';

export default class extends Relay.Route {
  static routeName = 'AppHomeRoute';
  static queries = {
      film: () => Relay.QL`
          query {
              film(id: "ZmlsbXM6MQ==")
          }
      `,
  };
}
