import Relay from 'react-relay';

export default class extends Relay.Route {
  static routeName = 'RelationshipRoute';
  static paramDefinitions = {
    leftId: {required: true},
    rightId: {required: true},
  };
  static queries = {
    leftComparison: () => Relay.QL`
      query { person(id: $leftId) }
    `,
    rightComparison: () => Relay.QL`
      query { person(id: $rightId) }
    `,
  };
}
