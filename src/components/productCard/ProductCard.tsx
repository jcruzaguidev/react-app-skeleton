import { useState } from 'react';
import { useProduct } from 'hook/useProduct';
import { OnChangeArgs, ProductsData } from 'interfaces/product.interface';
import { StylesProductCard } from './ProductCard.styled';
import { ProductCardModal } from './ProductCardModal';

interface Props {
  product: ProductsData;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductCard = (props: Props) => {
  const { product, onChange } = props;
  const { counter, setCounter, increaseBy } = useProduct({ product, onChange });
  const { menuKey, menuName, menuDescription, menuPrice } = product;
  const [showModal, setShowModal] = useState(false);

  const addProduct = () => {
    setShowModal(true);
  };

  return (
    <>
      <StylesProductCard
        img={process.env.PUBLIC_URL + 'menu/' + menuKey + '.jpg'}
      >
        <div className="card mb-3" onClick={addProduct}>
          <div className="row g-0">
            <div className="col-4 image" />
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{menuName}</h5>
                <p className="card-text">
                  {menuDescription.substring(0, 96) + '...'}
                </p>
                <small className="card-price">S/ {menuPrice}</small>
                <img
                  className="btn-image"
                  src={process.env.PUBLIC_URL + '/assets/card.svg'}
                  alt="EnUna"
                />
              </div>
            </div>
          </div>
        </div>
      </StylesProductCard>
      <ProductCardModal
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
        counter={counter}
        setCounter={setCounter}
        increaseBy={increaseBy}
      />
    </>
  );
};
