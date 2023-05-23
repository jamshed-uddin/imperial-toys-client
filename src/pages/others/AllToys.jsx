import React from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
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
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>

              <td>batman</td>
              <td>dc</td>
              <td>34.43</td>
              <td>112</td>
              <th>
                <Link className="btn btn-sm bg-pink-600 hover:bg-pink-500 border-0">
                  details
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
