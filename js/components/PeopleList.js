import React from 'react';

export default class PeopleList extends React.Component {
  _onChange(e) {
    const currentPerson = this.props.getCurrentPerson();
    this.props.setCurrentPerson(e.target.checked ? [...currentPerson, e.target.value] : currentPerson.filter(current => current !== e.target.value));
  }

  render() {
    const styles = {
      label: {
        display: 'block'
      }
    };

    return (
      <div>
        { this.props.data.map((person, key) => {
          return (
            <label htmlFor={person.id} style={styles.label} key={key}>
              <input type="checkbox" id={person.id} value={key} onChange={this._onChange.bind(this)} /> {person.name}
            </label>
          )
        })}
      </div>
    );
  }
}
