import React from 'react';
import Relay from 'react-relay';
import _ from 'lodash/fp';

class Relationship extends React.Component {
  render() {
    let filmConnections = [];

    // Compare film connections
    const { leftComparison, rightComparison } = this.props;
    const leftFilms = leftComparison.filmConnection.edges.map(film => film.node);
    const rightFilms = rightComparison.filmConnection.edges.map(film => film.node);

    filmConnections.push(<p key={0}>And they both could been seen in these <strong>films</strong>:</p>);

    leftFilms.forEach((film, key) => {
      _.indexOf(film)(rightFilms) && filmConnections.push(<h5 key={++key}>{film.title}</h5>);
    });

    // Compare spaceship connections
    // Compare vehicle connections

    return (<div>
      <hr/>
      { filmConnections.length > 1 ? filmConnections : <strong>There is no relationships between them...</strong> }
    </div>);
  }
}

export default Relay.createContainer(Relationship, {
    fragments: {
        leftComparison: () => Relay.QL`
            fragment on Person {
                id
                name
                filmConnection(first: 100) {
                    edges {
                        node {
                            id
                            title
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
        `,
        rightComparison: () => Relay.QL`
            fragment on Person {
                id
                name
                filmConnection(first: 100) {
                    edges {
                        node {
                            id
                            title
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
        `,
    }
})


