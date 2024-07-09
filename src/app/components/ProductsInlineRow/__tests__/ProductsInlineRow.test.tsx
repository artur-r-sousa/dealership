// ProductsInlineRow.test.tsx

import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import ProductsInlineRow from '..';

// Dados de exemplo para testar o componente
const testData = [
  {
    title: 'Product 1',
    value: '$100',
    imgSrc: '/path/to/image1.png', // Coloque o caminho correto da imagem aqui
  },
  {
    title: 'Product 2',
    value: '$200',
    imgSrc: '/path/to/image2.png', // Coloque o caminho correto da imagem aqui
  },
];

describe('ProductsInlineRow component', () => {
  it('renders products correctly', () => {
    const { getByAltText, getByText } = render(<ProductsInlineRow data={testData} />);

    // Verifica se os elementos de cada produto são renderizados corretamente
    testData.forEach((product, id) => {
      const productTitleElement = getByText(product.title);
      const productValueElement = getByText(product.value);
      const productImageElement = getByAltText(`first-car-option-${id}`);

      expect(productTitleElement).toBeInTheDocument();
      expect(productValueElement).toBeInTheDocument();
      expect(productImageElement).toBeInTheDocument();
    });
  });

  it('renders no products when data is empty', () => {
    const { container } = render(<ProductsInlineRow data={[]} />);
    const boxContainers = container.querySelectorAll('.BoxContainer'); // Certifique-se de ajustar isso de acordo com seus estilos

    expect(boxContainers.length).toBe(0);
  });
});