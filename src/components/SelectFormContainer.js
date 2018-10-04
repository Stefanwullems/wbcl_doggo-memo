import React, { Component } from "react";
import SelectForm from "./SelectForm";
import { connect } from "react-redux";
class SelectFormContainer extends Component {
  render() {
    return (
      <div>
        {this.props.currentDogs && (
          <SelectForm currentDogs={this.props.currentDogs} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ currentDogs }) => {
  return {
    currentDogs
  };
};

export default connect(mapStateToProps)(SelectFormContainer);
