import React from "react";
import ReactDom from "react-dom";

//normal component
const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is : {props.info}</p>
    </div>
  );
};

//HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {!props.isAuthenticated ? (
        <p>please login to view the info</p>
      ) : (
        <WrappedComponent {...props} />
      )}
    </div>
  );
};

//calls the HOC function with the normal component as an argument
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDom.render(
//   <AdminInfo isAdmin={false} info="these are the info" />,
//   document.getElementById("app")
// );

ReactDom.render(
  <AuthInfo isAuthenticated={true} info="these are the info" />,
  document.getElementById("app")
);
