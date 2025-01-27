import React from 'react'
import Layoutone from '../Layout/Layoutone';
import productContent from './ProductConstant';
import ProductCard from './Minor Components/ProductCard';
import pd1 from '../Assets/FoodCourt/pd1.jpg'
import pd2 from '../Assets/FoodCourt/pd2.jpg'
import pd3 from '../Assets/FoodCourt/pd3.png'
import pd4 from '../Assets/FoodCourt/pd4.png'
import pd5 from '../Assets/FoodCourt/pd5.png'
import pd6 from '../Assets/FoodCourt/pd6.png'
import pd7 from '../Assets/FoodCourt/pd7.jpeg'
import { useNavigate } from 'react-router-dom';






 function Product() {
  const navigate = useNavigate()
  const images = [pd1,pd2,pd3,pd4,pd5,pd6,pd7];
    

    return (
      <Layoutone>
        {productContent.map((content, index) => (
          <ProductCard
            key={index}
            image={images[index]}
            textHead={content.textHead}
            tectBody={content.textBody}
            textFoot={content.textFoot}
            onClick={
              () => {
                navigate('/checkout')
              }
            }
          />
        ))}
      </Layoutone>
    );
  
}
export default Product;