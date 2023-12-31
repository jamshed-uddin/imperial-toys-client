import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../userManagement/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [usersToys, setUsersToys] = useState([]);
  useTitle("Mytoys");

  const [loadAgain, setLoadAgain] = useState(true);

  useEffect(() => {
    fetch("https://imperial-toys.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const userSpecificToys = data?.filter(
          (singleData) => singleData?.seller_email === user?.email
        );
        setUsersToys(userSpecificToys);
      });
  }, [user, loadAgain]);

  const handleDeleteToy = (toyId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://imperial-toys.vercel.app/alltoys/${toyId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setLoadAgain(!loadAgain);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center pb-4">My toys</h1>

      <>
        {usersToys.length ? (
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
                {usersToys?.map((userToy, index) => (
                  <tr key={userToy?._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">
                            {userToy?.seller_name}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{userToy?.toy_name}</td>
                    <td>{userToy?.sub_category}</td>
                    <td>{userToy?.price}</td>
                    <td>{userToy?.quantity}</td>
                    <th>
                      <Link
                        to={`/updatetoy/${userToy?._id}`}
                        className="btn btn-sm bg-pink-600 hover:bg-pink-500 border-0"
                      >
                        Update
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDeleteToy(userToy?._id)}
                        className="btn btn-sm bg-red-700 hover:bg-red-600 border-0"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-center text-xl font-bold">
            You have no toys added to show.{" "}
            <Link className="text-pink-600 underline" to={"/addtoys"}>
              Add some toys
            </Link>
          </h1>
        )}
      </>

      {/* Put this part before </body> tag */}
    </div>
  );
};

export default MyToys;
