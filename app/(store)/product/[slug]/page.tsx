import ProductModal from "@/components/ProductModal";
import { Product } from "@/sanity.types";

interface ProductPageProps {
  isOpen: boolean;
  closeModal: () => void;
  product: Product;
}

const ProductPage = ({ isOpen, closeModal, product }: ProductPageProps) => {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} product={product} />
  );
};

export default ProductPage;
