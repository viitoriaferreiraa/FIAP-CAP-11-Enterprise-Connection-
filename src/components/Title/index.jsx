import * as Styles from "./Title.styles";
import PropTypes from "prop-types";

export const Title = ({ children }) => {
  return <Styles.Title>{children}</Styles.Title>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
