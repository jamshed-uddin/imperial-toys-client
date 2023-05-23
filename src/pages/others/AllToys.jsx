import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../useTitle";

const AllToys = () => {
  const [alltoys, setAllToys] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useTitle("Alltoys");
  useEffect(() => {
    setLoading(true);
    fetch("https://imperial-toys.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoading(false);
      });
  }, []);

  console.log(alltoys);
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center pb-4">All toys</h1>
      <div className="form-control   pb-4">
        <div className="input-group justify-center">
          <input
            type="text"
            name="search"
            placeholder="Search toys"
            className="input input-bordered"
          />
          <button className="btn bg-pink-600 hover:bg-pink-500 border-0">
            Search
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="h-[50vh] flex justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>SN</th>
                <th>Seller name</th>
                <th>Toy name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {alltoys.slice(0, 20).map((toy, index) => (
                <tr key={toy?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{toy?.seller_name}</div>
                      </div>
                    </div>
                  </td>

                  <td>{toy?.toy_name}</td>
                  <td>{toy?.sub_category}</td>
                  <td>{toy?.price}</td>
                  <td>{toy?.quantity}</td>
                  <th>
                    <Link
                      to={`../toydetails/${toy?._id}`}
                      className="btn btn-sm bg-pink-600 hover:bg-pink-500 border-0"
                    >
                      details
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllToys;
