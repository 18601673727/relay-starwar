import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    const { id, title } = this.props.film;

    return (
      <div>
        <h1>{id} - {title}</h1>
        {/*<h1>Film list</h1>*/}
        {/*<ul>{ this.props.films.map(*/}
          {/*film => <li key={film.id}>{film.title} (ID: {film.id})</li>*/}
        {/*)}</ul>*/}
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    film: () => Relay.QL`
      fragment on Film {
        id
        title
      }
    `,
  },
});
