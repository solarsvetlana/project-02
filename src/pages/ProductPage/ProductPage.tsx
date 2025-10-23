
import useProductsPage from '../../hooks/useProductsPage';

export default function ProductPage() {
  const { product } = useProductsPage();

  return (
    <div>
      ProductPage
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  );
}
