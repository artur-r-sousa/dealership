'use client'

import { CategoryTitle } from "@/pages/Home/styles"
import React from "react"
import { BoxContainer, BoxRow, ImageBox } from "./styles"
import Image from "next/image"

interface ProductsInlineRowProps {
  data: {
    title: string,
    value: string,
    imgSrc: string,
  }[]
}
export default function ProductsInlineRow({ data }: ProductsInlineRowProps) {

  return (
    <BoxRow>
      {data.length ? data.map((product, id) => {
        console.log(id)
        return (
          <BoxContainer key={`product-${id}`}>
            <ImageBox>
              <Image
                width={420}
                height={250}
                alt="first-car-option"
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