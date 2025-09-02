import { useEffect, useState } from "react";
import Products from "./Products";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=0");
    const jsonData = await data.json();
    setProducts(jsonData.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageClick = (p) => {
    setCurrentPage(p);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const PAGE_SIZE = 10;
  const totalProducts = products?.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  return (
    <>
      <div className="flex">Pagination</div>
      <button
        onClick={() => goToPrev()}
        disabled={currentPage === 0}
        className="border p-2 mr-2 cursor-pointer"
      >
        ⬅️
      </button>
      {[...Array(noOfPages).keys()].map((page) => (
        <button
          className={
            "border p-2 mr-2 cursor-pointer " +
            (page === currentPage ? "bg-sky-600" : "")
          }
          onClick={() => handlePageClick(page)}
        >
          {page + 1}
        </button>
      ))}

      <button
        onClick={() => goToNext()}
        disabled={currentPage == noOfPages - 1}
        className="border p-2 mr-2 cursor-pointer"
      >
        ➡️
      </button>
      <div className="flex flex-wrap">
        {products.slice(start, end).map((p) => (
          <Products
            key={p?.id}
            image={p?.thumbnail}
            title={p?.title}
            desc={p?.description}
            price={p?.price}
          />
        ))}
      </div>
    </>
  );
};

export default Pagination;
