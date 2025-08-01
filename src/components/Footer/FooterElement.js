import styled from "@emotion/styled";

export const FooterSection = styled.div`
  ${'' /* background-color: red; */}
  background-image: url(footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
