import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
  // <Fragment key={title}>
  //   <h2>{title}</h2>
  //   <div className="products-container">
  //     {categoriesMap[title].map((product) => (
  //       <CategoryPreview props={categoriesMap} />
  //     ))}
  //   </div>
  // </Fragment>
};

export default CategoriesPreview;
