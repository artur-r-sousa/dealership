'use client'

import React, { useEffect, useState } from "react"
import {
  SmallerInfo,
  HeaderBar,
  MainTitle,
  PageContainer,
  ContentBar,
  OptionTags,
  MainImageBox,
  PageHalfContainer,
  ProductsInLine,
  ProductsBox,
  CategoryTitle,
  Row,
  Col,
  ProductTags,
  ProductTagsText1,
  ProductTagsText2,
  ProductTagsText3,
  ColumnHolder,
  SectionTitle,
  Section,
  SectionText,
  FooterBar,
  OutroText,
  Stripes,
} from "./styles"
import Image from 'next/image'
import useWindowSize from "../../utils/responsiveness";
import { missionText } from "../../utils/copy";
import ProductsInlineRow from "@/app/components/ProductsInlineRow";
import BannerCarousel from "@/app/components/BannerCarousel";

import buickImage from '../../../public/images/buick_regal_gs_car_luxury_car_mid_size_car_sedan_white_car_hd_cars-1920x1080.jpg';
import bmwImage from '../../../public/images/bmw-5-series-touring-m-sport.jpg';
import lamborghiniImage from '../../../public/images/lamborghini_egoista.jpg';
import bmwX2Image from '../../../public/images/bmw-x2-m-sport.jpg';
import luxuryMotorsportsImage from '../../../public/images/car-hd-2011.jpg';
import chevroletCamaroImage from '../../../public/images/chevrolet_camaro_coupe_muscle_car_red_car_hd_cars-1920x1080.jpg';
import jaguarImage from '../../../public/images/jaguar-car.jpg';
import fordMustangImage from '../../../public/images/ford_mustang_67.jpg';

export default function MainPage() {
  const winSize = useWindowSize();
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeigth, setImgHeigth] = useState(0);

  useEffect(() => {
    if (winSize.width && winSize.height !== undefined) {
      setImgWidth((winSize.width * 70) / 100);
      setImgHeigth((winSize.height * 69.9) / 100)
    }
  }, [winSize])

  return (
    <PageContainer>
      <HeaderBar>
        <SmallerInfo>The</SmallerInfo>
        <MainTitle>Elder store</MainTitle>
        <SmallerInfo>Entre em contato: (21) 99405-4875</SmallerInfo>
      </HeaderBar>

      <ContentBar>
        <OptionTags>opção 1</OptionTags>
        <OptionTags>opção 1</OptionTags>
        <OptionTags>opção 1</OptionTags>
        <OptionTags>opção 1</OptionTags>
      </ContentBar>

      <Row>
        <MainImageBox>
          <Image
            src={fordMustangImage}
            alt='ford_mustang_67'
            width={imgWidth}
            height={imgHeigth}
          />
        </MainImageBox>

        {/* banner */}
        <Col>
          <ColumnHolder>
            <ProductTags>
              <ProductTagsText1>Montadora</ProductTagsText1>
            </ProductTags>
            <ProductTags>
              <ProductTagsText2>Nome</ProductTagsText2>
            </ProductTags>
            <ProductTags>
              <ProductTagsText3>1967</ProductTagsText3>
            </ProductTags>
            <ProductTags>
              <ProductTagsText1>$ 100.000,00</ProductTagsText1>
            </ProductTags>
          </ColumnHolder>

        </Col>


      </Row>

      <ContentBar>
        <OptionTags>Free Shipping</OptionTags>
        <OptionTags>Cash on Delivery</OptionTags>
        <OptionTags>The Best Products</OptionTags>
        <OptionTags>Online Support 24/7</OptionTags>
      </ContentBar>

      <PageHalfContainer>
        <Stripes isLeft>{`\n`}</Stripes>
        <Stripes isRight>{`\n`}</Stripes>
        <ProductsInLine>
          <CategoryTitle>Best Selling Products</CategoryTitle>
          <ProductsInlineRow
            data={[
              {
                title: 'BMW X2 M Sport',
                value: '3000',
                imgSrc: bmwX2Image
              },
              {
                title: 'Luxury Motorsports',
                value: '9000',
                imgSrc: luxuryMotorsportsImage
              },
              {
                title: 'Chevrolet Camaro',
                value: '9000',
                imgSrc: chevroletCamaroImage
              },
              {
                title: 'Jaguar Silver Back',
                value: '9000',
                imgSrc: jaguarImage
              }
            ]}
          />
        </ProductsInLine>


        <ProductsInLine>
          <CategoryTitle>Upcoming Products</CategoryTitle>
          <ProductsInlineRow
            data={
              [
                {
                  title: 'Buick Regal GS',
                  value: '115000',
                  imgSrc: buickImage
                },
                {
                  title: 'BMW 5 Series Touring M Sport',
                  value: '3000000',
                  imgSrc: bmwImage
                },
                {
                  title: 'Lamborghini Egoista',
                  value: '100000',
                  imgSrc: lamborghiniImage
                }
              ]
            }
          />
        </ProductsInLine>

        <Section>
          <SectionTitle>About our mission</SectionTitle>
          <SectionText>{missionText}</SectionText>
        </Section>

        <Section>
          <SectionTitle>Our Newest Release</SectionTitle>
          <BannerCarousel
            imgWidth={imgWidth}
            imgHeigth={imgHeigth}
          />
          <Col backgroundColor={`#ffdf00`}>
            <SectionText>{missionText}</SectionText>
          </Col>
        </Section>
      </PageHalfContainer>
      <FooterBar>
        <MainTitle>Our brands</MainTitle>
      </FooterBar>
      <OutroText>About</OutroText>
      <SectionText>Website created for educational purposes. All related trademarks and logos are from their respective owners.</SectionText>
    </PageContainer>
  )
}