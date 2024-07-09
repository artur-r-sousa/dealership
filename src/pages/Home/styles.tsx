'use client'

import styled from "styled-components";

interface StyleProps {
  isLeft?: boolean;
  isRight?: boolean;
  backgroundColor?: string;
  isroundedbackground?: boolean;
}

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%; 
  justify-content: center;
  align-items: center;
  background-color: #020403;
`;

export const HeaderBar = styled.div`
  display: flex;
  background-color: #0f2310;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 15px;
`;

export const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const SmallerInfo = styled.h3`
  font-size: 15px;
`;

export const ContentBar = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 15px;
`;

export const OptionTags = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  color: #000;
  align-items: center;
`;

export const MainImageBox = styled.div`
  display: flex;
  width: 200%;
  height: 100%;
  align-items: center;
  z-index: 10;
`;

export const PageHalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%; 
  align-items: center;
  justify-items: center;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #ffdf00;
  z-index: 1;
`;

export const Stripes = styled.div<StyleProps>`
  display: flex;
  position: absolute;
  top: 76%;
  left: ${(props) => props.isLeft ? '50%' : '45%'};
  right: ${(props) => props.isRight ? '50%' : '45%'};
  width: 80px;
  height: 2600px;
  border: 1px solid #000;
  background-color: #fff;
  z-index: 0;
`;

export const ProductsInLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px; 
  margin-top: 5%;
  margin-bottom: 15%;
  align-items: align-start;
  justify-items: space-between;
`;

export const ProductsBox = styled.div`
  display: flex;  
  width: 150px;
  height: 50px;
  margin-right: 7px;  
`;

export const CategoryTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 30px;
  
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;
  z-index: 10;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Col = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || '#020403'};
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  ${(props) => props.isroundedbackground && `
    border-radius: 360px;
    width: 75%;
  `};
`;

export const ColumnHolder = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #020403;
`;

export const ProductTags = styled.div`
  display: flex;
  width: auto;
`;

export const ProductTagsText1 = styled.h3`
  font-size: 50px;
  color: #fff;
`;

export const ProductTagsText2 = styled.h3`
  font-size: 44px;
  background-color: #e3242b;

`;

export const ProductTagsText3 = styled.h3`
  font-size: 38px;
  color: #fff;
`;

export const SectionText = styled.h4`
  font-size: 15px;
  color: #000;
  z-index: 10;
  background-color: 
`;

export const FooterBar = styled.div`
  display: flex;
  background-color: #d1001f;
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 0px 15px;
`;

export const OutroText = styled.h6`
  font-size: 12px;
  color: #fff;
  margin: 15px 0 15px 0;
`;