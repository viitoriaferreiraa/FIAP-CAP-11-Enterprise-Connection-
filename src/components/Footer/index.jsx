import * as Styles from "./Footer.styles";

export const Footer = () => {
  return (
    <Styles.FooterContainer>
      © {new Date().getFullYear()}{" "}
      <Styles.GithubLink
        href="https://github.com/viitoriaferreiraa"
        target="_blank"
      >
        Vitória Ferreira -{" "}
      </Styles.GithubLink>
      <Styles.GithubLink
        href="https://github.com/giselearaujos"
        target="_blank"
      >
        Gisele Araujo
      </Styles.GithubLink>
    </Styles.FooterContainer>
  );
};
