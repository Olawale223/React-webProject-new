import React from 'react'
import Layoutone from './Layoutone';
import productContent from './ProductConstant';
import ProductCard from './Minor Components/ProductCard';

export default function Product() {
    const images = [image1, image2, image3, image7, image5, image6, image8, image9, image11];
    // replace these with the actual images

    return (
      <Layoutone>
        {productContent.map((content, index) => (
          <ProductCard
            key={index}
            image={images[index]}
            textHead={content.textHead}
            tectBody={content.textBody}
            textFoot={content.textFoot}
          />
        ))}
      </Layoutone>
    );
  
}
