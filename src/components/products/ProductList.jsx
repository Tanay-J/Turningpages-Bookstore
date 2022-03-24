import { getFinalProducts } from "../../utils/getFinalProducts";

const ProductList = () => {
  const { finalProducts } = getFinalProducts();
  return (
    <main className="mx-auto p-s">
      <div className="flex flex-wrap gap-2">
        {finalProducts.length === 0 ? (
          <h3>No Products</h3>
        ) : (
          finalProducts.map(
            ({
              _id,
              author,
              badge,
              binding,
              discount,
              inStock,
              lang,
              price,
              productImg,
              rating,
              title,
            }) => {
              return (
                <div
                  className="card-vertical card-shadow position-rel br-m mx-auto"
                  key={_id}
                >
                  {badge && (
                    <small className="card-badge font-bold my-s px-xs">
                      {badge}
                    </small>
                  )}
                  {!inStock && (
                    <strong className="overlay-text alert secondary ">
                      Out of Stock
                    </strong>
                  )}
                  <div
                    className={`${
                      !inStock ? "opacity" : ""
                    } card-img mx-auto p-s`}
                  >
                    <img src={productImg} alt="book cover" />
                  </div>
                  <div className="card-details px-s">
                    <div className="text-xs font-light ">{title}</div>
                    <div className="sub-title">
                      {lang}, {binding}, {author}
                    </div>
                    <small
                      className={`${
                        rating < 3 ? "text-danger" : "text-success  "
                      }`}
                    >
                      {rating} <i className="fas fa-star"></i>
                    </small>
                    <div className="font-bold">
                      ₹ {Math.floor(price - (price * discount) / 100)}{" "}
                      <small className="text-gray">
                        <strike> {price}</strike>
                      </small>
                      <small className="font-bold">
                        <em className="text-success"> ( -{discount}% ) </em>
                      </small>
                    </div>
                  </div>
                  <div className="card-props flex p-s">
                    <button className="btn btn-primary" disabled={!inStock}>
                      Add to Cart
                    </button>

                    <button
                      className="btn btn-outline outline-primary mx-xs"
                      disabled={!inStock}
                    >
                      Save for Later
                    </button>
                  </div>
                </div>
              );
            }
          )
        )}
      </div>
    </main>
  );
};

export { ProductList };
