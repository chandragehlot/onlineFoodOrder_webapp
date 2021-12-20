import React , { createRef }from "react";
import SearchBox from "../SearchBox";

 function WithSearch(WrappedComponent){
  class WithSearchWrapper extends React.Component {
    emailRef = createRef()
    state = {
      searchTerm: ""
    };

    componentDidMount(){
      this.emailRef.current.focus();
    }

    handleSearch = event => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      let { searchTerm } = this.state;
      return (
        <>
          {/* <input
            onChange={this.handleSearch}
            value={searchTerm}
            type="text"
            placeholder="Search"
          /> */}
          <div className="search-container">
            <SearchBox val={searchTerm} handleSearch={this.handleSearch} ref={this.emailRef}></SearchBox>
          </div>
          <WrappedComponent {...this.props} searchTerm={searchTerm} />
        </>
      );
    }
  };
  return WithSearchWrapper;
};

export { WithSearch };

  