import React from 'react';
import Relay from 'react-relay';
import PeopleList from './PeopleList';
import RelationshipList from './RelationshipList';
import { Flex, Item } from 'react-flex';
import 'normalize.css';
import 'react-flex/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedPersons: []
    }
  }

  getCurrentPerson() {
    return this.state.checkedPersons;
  }

  setCurrentPerson(currentPerson) {
    this.setState({
      checkedPersons: currentPerson
    });

    // setTimeout(() => console.log(this.getCurrentPerson()), 1)
  }

  render() {
    const styles = {
      global: {
        color: '#222',
        fontFamily: '-apple-system, BlinkMacSystemFont',
      },
      anchor: {
        color: '#888',
      },
      stat: {
        fontSize: '120%',
      },
      header: {
        padding: '5em',
        fontSize: '300%',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      footer: {
        color: '#888',
        padding: '1em',
        fontSize: '120%',
        textAlign: 'center',
      },
      legend: {
        fontSize: '120%',
        fontWeight: '500',
        borderTop: '2px solid #000',
        borderBottom: '2px solid #000',
        marginBottom: '1em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
      },
    };

    return (
      <Flex style={styles.global} column alignItems="stretch">
        <div style={styles.header}>
          Relay For Star Wars
        </div>
        <Flex flex alignItems="stretch">
          <Item flex={1}>
            <div style={styles.legend}>&nbsp;&nbsp;&nbsp;&nbsp;Statistics</div>
            <ul style={styles.stat}>
              <li>People: {this.props.allPeople.totalCount}</li>
              <li>Planets: {this.props.allPlanets.totalCount}</li>
              <li>Films: {this.props.allFilms.totalCount}</li>
              <li>Species: {this.props.allSpecies.totalCount}</li>
              <li>Vehicles: {this.props.allVehicles.totalCount}</li>
              <li>Starships: {this.props.allStarships.totalCount}</li>
            </ul>
          </Item>
          <Item flex={1}>
            <div style={styles.legend}>People list</div>
            <PeopleList
              data={this.props.allPeople.people}
              getCurrentPerson={this.getCurrentPerson.bind(this)}
              setCurrentPerson={this.setCurrentPerson.bind(this)}/>
          </Item>
          <Item flex={3}>
            <div style={styles.legend}>Relationships between you choose</div>
            <RelationshipList
              data={this.props.allPeople.people}
              checkedPersons={this.state.checkedPersons}/>
          </Item>
        </Flex>
        <div style={styles.footer}>
          <p>Data from <a style={styles.anchor} href="https://github.com/phalt/swapi">swapi</a>, star this on <a style={styles.anchor} href="https://github.com/18601673727/relay-starwar">Github</a>!</p>
        </div>
      </Flex>
    );
  }
}

export default Relay.createContainer(App, {
    fragments: {
        allPeople: () => Relay.QL`
            fragment on PeopleConnection {
                totalCount
                people {
                    id
                    name
                }
            }
        `,
        allPlanets: () => Relay.QL`
            fragment on PlanetsConnection {
                totalCount
                planets {
                    id
                    name
                }
            }
        `,
        allFilms: () => Relay.QL`
            fragment on FilmsConnection {
                totalCount
                films {
                    id
                    title
                }
            }
        `,
        allSpecies: () => Relay.QL`
            fragment on SpeciesConnection {
                totalCount
                species {
                    id
                    name
                }
            }
        `,
        allVehicles: () => Relay.QL`
            fragment on VehiclesConnection {
                totalCount
                vehicles {
                    id
                    name
                }
            }
        `,
        allStarships: () => Relay.QL`
            fragment on StarshipsConnection {
                totalCount
                starships {
                    id
                    name
                }
            }
        `,
    },
});
