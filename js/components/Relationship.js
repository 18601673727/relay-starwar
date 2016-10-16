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
    fragments: {
        allComparisons: ((Component) => {
            return Relay.QL`
                fragment on Root {
                    ${Component.getFragment('leftComparison')}
                    ${Component.getFragment('rightComparison')}
                }
            `
        }),
    }
})


