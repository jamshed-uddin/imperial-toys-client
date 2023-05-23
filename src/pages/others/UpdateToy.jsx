import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateToy = () => {
  const [singleToy, setSingleToy] = useState([]);
  const { toyId } = useParams();

  useEffect(() => {
    fetch(`https://imperial-toys-server.vercel.app/singletoy/${toyId}`)
      .then((res) => res.json())
      .then((data) => setSingleToy(data));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedToyInfo = { price, quantity, description };
    console.log(updatedToyInfo);

    fetch(`https://imperial-toys.vercel.app/singletoy/${toyId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToyInfo),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  console.log(singleToy);
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center font-bold">
        Upadate details of {singleToy?.toy_name}
      </h1>
      <div className="flex items-center justify-center py-10">
        <form onSubmit={handleUpdate}>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Price</span>
            </label>
            <input
              type="number"
              required
              name="price"
              defaultValue={singleToy?.price}
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Quantity</span>
            </label>
            <input
              type="number"
              required
              name="quantity"
              defaultValue={singleToy?.quantity}
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Description</span>
            </label>
            <input
              type="text"
              required
              name="description"
              defaultValue={singleToy?.description}
              placeholder="Description"
              className="input input-bordered"
            />
          </div>
          <div className=" text-center mt-6 lg:col-start-2 ">
            <input
              type="submit"
              className="btn btn-wide  bg-pink-600 hover:bg-pink-500 border-0"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
