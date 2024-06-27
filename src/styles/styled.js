import styled from "styled-components";
import pixelToVW from "../utils/responsiveness/pixelToVW";

const Default = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;

`;

export const Row = styled(Default)`
  flex-direction: row;
`;

export const Col = styled(Default)`
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 100%;
`;