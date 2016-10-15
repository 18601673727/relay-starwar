import React from 'react';
import Relay from 'react-relay';

class Relationship extends React.Component {
  render() {
    this.props.relay.setVariables({
      leftId: this.props.leftId,
      rightId: this.props.rightId,
    });

    console.log(this.props);

    return <h2>Fetching relationships...</h2>;
  }
}

export default Relay.createContainer(Relationship, {
    initialVariables: {
      leftId: "cGVvcGxlOjE=",
      rightId: "cGVvcGxlOjE=",
    },
    fragments: {
        leftComparison: () => Relay.QL`
            fragment on Root {
                person(id: $leftId) {
                    filmConnection(first: 100) {
                      edges {
                        node {
                          id
                        }
                      }
                    }
                    starshipConnection(first: 100) {
                      edges {
                        node {
                          id
                        }
                      }
                    }
                    vehicleConnection(first: 100) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            }
        `,
        rightComparison: () => Relay.QL`
            fragment on Root {
                person(id: $rightId) {
                    filmConnection(first: 100) {
                      edges {
                        node {
                          id
                        }
                      }
                    }
                    starshipConnection(first: 100) {
                      edges {
                        node {
                          id
                        }
                      }
                    }
                    vehicleConnection(first: 100) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            }
        `,
    }
})


