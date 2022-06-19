import styles from "./Products.module.css";
import { useFilter } from "../../contexts/filter-context";
import { useCategories } from "../../hooks";

const FilterAndSort = () => {
  const { filterState, filterDispatch } = useFilter();
  const { categories } = useCategories();

  return (
    <aside className={`${styles.aside_container} px-m py-s`}>
      <div className="flex justify-content-space-bet">
        <h6 className="h6">Filters</h6>
        <button
          className="link link-secondary"
          onClick={() => filterDispatch({ type: "CLEAR" })}
        >
          Clear
        </button>
      </div>
      <div className="my-xs">
        <label>
          <input
            type="radio"
            name="sorting"
            checked={filterState.sorting === "lth"}
            onChange={() =>
              filterDispatch({ type: "LOW_TO_HIGH", payload: "lth" })
            }
          />
          <small>Price: Low to High</small>
        </label>
        <label>
          <input
            type="radio"
            name="sorting"
            checked={filterState.sorting === "htl"}
            onChange={() =>
              filterDispatch({ type: "HIGH_TO_LOW", payload: "htl" })
            }
          />
          <small>Price: High to Low</small>
        </label>
      </div>
      <form className="flex flex-col my-xs">
        <h5 className="my-xs">Categories</h5>
        {categories.map(
          (cat) =>
            (cat.categoryType === "genre" ||
              cat.categoryType === "special") && (
              <label key={cat._id}>
                <input
                  type="checkbox"
                  checked={filterState.categoryName.includes(cat.categoryName)}
                  onChange={() =>
                    filterDispatch({
                      type: "SET_CATEGORY",
                      payload: cat.categoryName,
                    })
                  }
                />
                <small>{cat.categoryName}</small>
              </label>
            )
        )}
      </form>
      <form className="flex my-s">
        <h5>Price</h5>
        <label>
          <input
            className="mx-s"
            type="range"
            min="50"
            max="2000"
            value={filterState.maxPrice}
            onChange={(e) =>
              filterDispatch({ type: "SET_MAX_PRICE", payload: e.target.value })
            }
          />
          {filterState.maxPrice}
        </label>
      </form>
      <form>
        <label className="my-xs">
          <input
            type="checkbox"
            checked={filterState.includeOOS}
            onChange={(e) =>
              filterDispatch({
                type: "INCLUDE_OUT_OF_STOCK",
                payload: e.target.checked,
              })
            }
          />
          <small>Include Out of Stock</small>
        </label>
        <label className="my-xs">
          <input
            type="checkbox"
            checked={filterState.fastDeliveryOnly}
            onChange={(e) =>
              filterDispatch({
                type: "FAST_DELIVERY_ONLY",
                payload: e.target.checked,
              })
            }
          />
          <small>Fast Delivery Only</small>
        </label>
      </form>

      <form className="flex flex-col my-xs">
        <h5 className="my-xs">Format</h5>
        <label htmlFor="pb">
          <input
            type="checkbox"
            checked={filterState.binding.includes("Paperback")}
            id="pb"
            onChange={(e) => {
              return e.target.checked
                ? filterDispatch({ type: "SET_BINDING", payload: "Paperback" })
                : filterDispatch({
                    type: "REMOVE_BINDING",
                    payload: "Paperback",
                  });
            }}
          />
          <small>Paperback</small>
        </label>
        <label htmlFor="hc">
          <input
            type="checkbox"
            checked={filterState.binding.includes("Hardcover")}
            id="hc"
            onChange={(e) => {
              return e.target.checked
                ? filterDispatch({ type: "SET_BINDING", payload: "Hardcover" })
                : filterDispatch({
                    type: "REMOVE_BINDING",
                    payload: "Hardcover",
                  });
            }}
          />
          <small>Hardcover</small>
        </label>
      </form>
      <form className="flex flex-col my-xs">
        <h5 className="my-xs">Ratings</h5>
        <label htmlFor="4plus">
          <input
            type="radio"
            name="rating"
            id="4plus"
            onChange={() => filterDispatch({ type: "SET_RATING", payload: 4 })}
          />
          <small>4 stars & above</small>
        </label>
        <label htmlFor="3plus">
          <input
            type="radio"
            name="rating"
            id="3plus"
            onChange={() => filterDispatch({ type: "SET_RATING", payload: 3 })}
          />
          <small>3 stars & above</small>
        </label>
        <label htmlFor="2plus">
          <input
            type="radio"
            name="rating"
            id="2plus"
            onChange={() => filterDispatch({ type: "SET_RATING", payload: 2 })}
          />
          <small>2 stars & above</small>
        </label>
        <label htmlFor="1plus">
          <input
            type="radio"
            name="rating"
            id="1plus"
            onChange={() => filterDispatch({ type: "SET_RATING", payload: 1 })}
          />
          <small>1 star & above</small>
        </label>
      </form>
    </aside>
  );
};

export { FilterAndSort };
