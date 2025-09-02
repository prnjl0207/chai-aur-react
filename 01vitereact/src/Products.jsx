const Products = ({ image, title, desc, price }) => {
  return (
    <div className="w-[350px] border m-2 p-4">
      <img src={image} alt={title} width={150} height={150} />
      <div>{title}</div>
      <div>{desc}</div>
      <div>₹ {price}</div>
    </div>
  );
};

export default Products;
