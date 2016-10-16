import Relay from 'react-relay';

export default class extends Relay.Route {
  static routeName = 'AppHomeRoute';
  static queries = {
    allPeople: ((Component) => {
      return Relay.QL`
          query {
              allPeople { ${Component.getFragment('allPeople')} }
          }
      `
    }),
    allPlanets: ((Component) => {
      return Relay.QL`
          query {
              allPlanets { ${Component.getFragment('allPlanets')} }
          }
      `
    }),
    allFilms: ((Component) => {
        return Relay.QL`
            query {
                allFilms { ${Component.getFragment('allFilms')} }
            }
        `
    }),
    allSpecies: ((Component) => {
      return Relay.QL`
          query {
              allSpecies { ${Component.getFragment('allSpecies')} }
          }
      `
    }),
    allVehicles: ((Component) => {
      return Relay.QL`
          query {
              allVehicles { ${Component.getFragment('allVehicles')} }
          }
      `
    }),
    allStarships: ((Component) => {
      return Relay.QL`
          query {
              allStarships { ${Component.getFragment('allStarships')} }
          }
      `
    }),
  };
}
