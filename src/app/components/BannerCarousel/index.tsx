'use strict'

import { Col, ColumnHolder, MainImageBox, ProductTags, ProductTagsText1, ProductTagsText2, ProductTagsText3, Row, SectionText, SectionTitle } from "@/pages/Home/styles"
import { missionText } from "@/utils/copy"
import Image from "next/image"
import React, { useEffect, useState } from "react"

interface BannerCarouselProps {
  imgWidth: number,
  imgHeigth: number
}
export default function BannerCarousel({ imgWidth, imgHeigth }: BannerCarouselProps) {
  const imgArr = [require('../../../../public/images/ferrari-gtc-1.png'), require('../../../../public/images/ferrari-gtc-2.png'), require('../../../../public/images/ferrari-gtc-3.png')]
  const [currPos, setCurrPos] = useState(0)
  const [currImg, setCurrImg] = useState(imgArr[currPos])

  setTimeout(() => {
    if (currPos < 2) {
      setCurrPos(currPos + 1)
      setCurrImg(imgArr[currPos])
    } else {
      setCurrPos(0)
      setCurrImg(imgArr[currPos])
    }
  }, 3000)
  return (
    <Col isroundedbackground>
      <MainImageBox>
        <Image
          src={currImg}
          alt='ferrari-gtc'
          width={imgWidth}
          height={imgHeigth}
        />
      </MainImageBox>

    </Col>
  )
}