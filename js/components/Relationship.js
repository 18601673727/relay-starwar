import React from 'react';
import Relay from 'react-relay';
import _ from 'lodash/fp';

class Relationship extends React.Component {
  render() {
    const { leftComparison, rightComparison } = this.props;

    // Compare basic connections
    let friendShipPossiblity = 0;
    if (leftComparison.eyeColor === rightComparison.eyeColor) {
      friendShipPossiblity += 20;
    }
    if (leftComparison.hairColor === rightComparison.hairColor) {
      friendShipPossiblity += 20;
    }
    if (leftComparison.skinColor === rightComparison.skinColor) {
      friendShipPossiblity += 20;
    }

    const basicConnections = (
      <p>
        They <strong>{leftComparison.homeworld.name === rightComparison.homeworld.name ? "are" : "are not"}</strong> living on the same planet,
        they <strong>{friendShipPossiblity > 50 ? "maybe" : "maybe not"}</strong> friends.
      </p>
    );

    // Compare film connections
    let filmConnections = [];
    const leftFilms = leftComparison.filmConnection.edges.map(film => film.node);
    const rightFilms = rightComparison.filmConnection.edges.map(film => film.node);

    filmConnections.push(<p key={0}>And they both could been seen in these <strong>films</strong>:</p>);

    leftFilms.forEach((film, key) => {
      if (typeof _.find({'id': film.id})(rightFilms) !== 'undefined') {
        filmConnections.push(<h5 key={++key}>{film.title}</h5>);
      }
    });

    // Compare starship connections
    let starshipConnections = [];
    const leftStarships = leftComparison.starshipConnection.edges.map(starship => starship.node);
    const rightStarships = rightComparison.starshipConnection.edges.map(starship => starship.node);

    starshipConnections.push(<p key={0}>And they{String.fromCharCode(39)}ve onboarded with these <strong>starships</strong> together:</p>);

    leftStarships.forEach((starship, key) => {
      if (typeof _.find({'id': starship.id})(rightStarships) !== 'undefined') {
        starshipConnections.push(<h5 key={++key}>{starship.name}</h5>);
      }
    });

    return (<div>
      {basicConnections}
      <hr/>
      { filmConnections.length > 1 ? filmConnections : <p>There is no film relationships between them...</p> }
      <hr/>
      { starshipConnections.length > 1 ? starshipConnections : <p>There is no starship relationships between them...</p> }
    </div>);
  }
}

export default Relay.createContainer(Relationship, {
    fragments: {
        leftComparison: () => Relay.QL`
            fragment on Person {
                eyeColor
                hairColor
                skinColor
                homeworld {
                    name
                }
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
                            name
                        }
                    }
                }
            }
        `,
        rightComparison: () => Relay.QL`
            fragment on Person {
                eyeColor
                hairColor
                skinColor
                homeworld {
                    name
                }
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
                            name
                        }
                    }
                }
            }
        `,
    }
})


