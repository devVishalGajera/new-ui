// ** React Imports
import { useContext } from "react";

// ** Component Imports
import { AbilityContext } from "src/layouts/components/acl/Can";

const CanViewNavLink = (props) => {
  // ** Props
  const { children, navLink } = props;

  // ** Hook
  const ability = useContext(AbilityContext);

  // if (navLink && navLink.auth === false) {
  //   return <>{children}</>
  // } else {
  //   return ability && ability.can(navLink?.action, navLink?.subject) ?
  // : null
  // we can remove after all the code implementation is done
  return <>{children}</>;
  // }
};

export default CanViewNavLink;
