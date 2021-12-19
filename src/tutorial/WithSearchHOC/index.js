 import React from "react";
 

 function WithSearch(WrappedComponent){
  class WithSearchWrapper extends React.Component {
    state = {
      searchTerm: ""
    };
    handleSearch = event => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      let { searchTerm } = this.state;
      
      
      return (
        <>
          <input
            onChange={this.handleSearch}
            value={searchTerm}
            type="text"
            placeholder="Search"
          />
          <WrappedComponent {...this.props} searchTerm={searchTerm} />
        </>
      );
    }
  };
  return WithSearchWrapper;
};

export { WithSearch };

  