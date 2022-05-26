import styles from "../Products.module.css";
const ProductImage = ({ productImg }) => {
  return (
    <>
      <img src={productImg} className={`${styles.prod_img}`}></img>
    </>
  );
};
export { ProductImage };
