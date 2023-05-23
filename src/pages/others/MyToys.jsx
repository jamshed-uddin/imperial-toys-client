import React from "react";
import { Link } from "react-router-dom";

const MyToys = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center pb-4">My toys</h1>

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
                <button className="btn btn-sm bg-pink-600 hover:bg-pink-500 border-0">
                  Update
                </button>
              </th>
              <th>
                <button className="btn btn-sm bg-red-700 hover:bg-red-600 border-0">
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
