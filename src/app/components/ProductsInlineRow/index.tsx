'use client'

import { CategoryTitle } from "@/pages/Home/styles"
import React from "react"
import { BoxContainer, BoxRow, ImageBox } from "./styles"
import Image, { StaticImageData } from "next/image"

interface ProductsInlineRowProps {
  data: {
    title: string,
    value: string,
    imgSrc: StaticImageData,
  }[]
}
export default function ProductsInlineRow({ data }: ProductsInlineRowProps) {

  return (
    <BoxRow>
      {data.length ? data.map((product, id) => {
        return (
          <BoxContainer key={`product-${id}`}>
            <ImageBox>
              <Image
                width={420}
                height={250}
                alt={`first-car-option-${id}`}
                src={product.imgSrc}
              />
            </ImageBox>

            <CategoryTitle>
              {product.title}
            </CategoryTitle>
            <CategoryTitle>
              {product.value}
            </CategoryTitle>
          </BoxContainer>

        )
      }) : <></>}


    </BoxRow>
  )
}