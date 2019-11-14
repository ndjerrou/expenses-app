// Higher Order Component

import React, { Component } from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => {
    <div>
      {props.isAdmin && <p>This is private info, please don't share</p>}
      <WrappedComponent {...props} />
    </div>;
  };
};

const requireAuthentification = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthentificated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin info="there are some infos here" />,
//   document.querySelector("#root")
// );

ReactDOM.render(
  <AuthInfo isAuthentificated info="there are some details" />,
  document.querySelector("#root")
);
