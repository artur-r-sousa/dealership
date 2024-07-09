// BannerCarousel.test.tsx

import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import BannerCarousel from '..';

jest.useFakeTimers(); // Allows simulating the passage of time to test setTimeout

describe('BannerCarousel', () => {
  it('should render correctly and switch images', () => {
    act(() => {
      render(<BannerCarousel imgWidth={500} imgHeigth={300}></BannerCarousel>);
    })


    // Verifies if the initial image is rendered correctly
    const initialImage = screen.getByAltText('ferrari-gtc');
    expect(initialImage).toBeInTheDocument();

    // Advance time to simulate image switch
    act(() => {
      jest.advanceTimersByTime(3000); // Advances 3 seconds (time defined in setTimeout)
    })


    // Verifies if the second image is rendered after 3 seconds
    const secondImage = screen.getByAltText('ferrari-gtc');
    expect(secondImage).toBeInTheDocument();

    // Advance time again to simulate switch to the third image
    act(() => {
      jest.advanceTimersByTime(3000); // Advances 3 seconds (time defined in setTimeout)
    })

    // Verifies if the third image is rendered after another 3 seconds
    const thirdImage = screen.getByAltText('ferrari-gtc');
    expect(thirdImage).toBeInTheDocument();

    // Advance time again to verify if the image switch returns to the first image
    act(() => {
      jest.advanceTimersByTime(3000); // Advances 3 seconds (time defined in setTimeout)
    })

    // Verifies if the first image is rendered again after another 3 seconds
    const firstImageAgain = screen.getByAltText('ferrari-gtc');
    expect(firstImageAgain).toBeInTheDocument();
  });
});