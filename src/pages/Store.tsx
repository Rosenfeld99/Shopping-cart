import StoreItem from "../components/StoreItem";
import products from "../data/items.json";

const Store = () => {
  // console.log(products);

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((prod) => (
        <StoreItem {...prod} key={prod.id}/>
      ))}
    </div>
  );
};

export default Store;
