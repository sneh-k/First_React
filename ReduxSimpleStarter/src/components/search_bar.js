import React, { Component } from 'react'; //stmnt is equal to var Component = React.Component

class SearchBar extends Component{

  //every class must have single render function
  render() {
    return (
      <input onChange={this.onInputChange} />
    );
  }

  onInputChange() {

  }

}

 export default SearchBar;
