import * as Styles from "./Card.styles";
import PropTypes from "prop-types";

export const Card = ({ imageUrl }) => {
  return (
    <Styles.CardContainer>
      <img
        src={imageUrl}
        alt="Imagem"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </Styles.CardContainer>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
