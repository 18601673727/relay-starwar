import React from 'react';
import Relay from 'react-relay';
import Relationship from './Relationship';
import RelationshipRoute from '../routes/RelationshipRoute';

export default class RelationshipList extends React.Component {
  render() {
    let message = (<div>Please pick 2 people to compare..</div>);
    let report = (<div></div>);

    if (this.props.checkedPersons.length > 0 && this.props.checkedPersons.length < 3) {
      message = (
        <div>You{String.fromCharCode(39)}ve selected: {
          this.props.checkedPersons.map((checkedKey, key) => {
            return (
              <span key={key}>
                {key === 1 && ', '}
                <strong>{this.props.data[checkedKey].name}</strong>
              </span>
            );
          })
        }</div>
      );
    }

    if (this.props.checkedPersons.length === 2) {
      report = (
        <Relay.RootContainer
          Component={Relationship}
          route={new RelationshipRoute({
            leftId: this.props.data[this.props.checkedPersons[0]].id,
            rightId: this.props.data[this.props.checkedPersons[1]].id,
          })}/>
      );
    }

    return (
      <div>
        {message}
        {report}
      </div>
    );
  }
}
