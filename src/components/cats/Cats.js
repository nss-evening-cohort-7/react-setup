import React from 'react';

import './Cats.css';

class Cats extends React.Component {
  render () {
    const {cats} = this.props;
    const catComponents = cats.map((cat) => {
      return (
        <div className="cat">
          <h3>{cat.name}</h3>
        </div>
      );
    });

    return (
      <div className="cats">
        {catComponents}
      </div>
    );
  }
}

export default Cats;