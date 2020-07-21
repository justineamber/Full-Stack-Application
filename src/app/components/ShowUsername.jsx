import React from "react";
import { connect } from "react-redux";

export const ShowUsername = ({ name }) => <span>{name}</span>;

const mapStateToProps = (state, ownProps) => {
  return state.users.find(user => user.id === ownProps.id);
};

export const ConnectedShowUsername = connect(mapStateToProps)(ShowUsername);
