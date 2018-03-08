import React, {Component} from "react";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {searchText: ""};
  }
  render() {
    return (
      <div id="search" className="Search">
        <input onChange={
          (e) => {
            console.log(e.target.value);
            this.setState({searchText: e.target.value});
          }
        }
          onKeyUp={
            (e) => {
              /* this is so search will only be done on enter key */
              // debugger
              if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                this.props.loadSearch(this.state.searchText);
              }
            }
          } 
          type="search" 
          placeholder="Search..." />
      </div>
    );
  }
}
export default SearchBox;