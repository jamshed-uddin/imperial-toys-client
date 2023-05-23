import React from "react";

const AddToys = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center py-4">
        Add your toy here.
      </h1>
      <div>
        <form
          onSubmit={handleAddToy}
          className="grid grid-cols-1 lg:grid-cols-3"
        >
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Toy name</span>
            </label>
            <input
              type="text"
              required
              name="toy_name"
              placeholder="Toy name"
              className="input input-bordered"
            />
          </div>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Seller name</span>
            </label>
            <input
              type="text"
              required
              name="
              seller_name"
              placeholder="Seller name"
              className="input input-bordered"
            />
          </div>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Seller email</span>
            </label>
            <input
              type="email"
              required
              name="seller_email"
              placeholder="Seller email"
              className="input input-bordered"
            />
          </div>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Sub Category</span>
            </label>
            <input
              type="text"
              required
              name="
              sub_category"
              placeholder="Sub Category"
              className="input input-bordered"
            />
          </div>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Image url</span>
            </label>
            <input
              type="text"
              required
              name="image_url"
              placeholder="Image url"
              className="input input-bordered"
            />
          </div>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Price</span>
            </label>
            <input
              type="number"
              required
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="mx-auto">
            <label className="label">
              <span className="label-text text-lg">Ratings</span>
            </label>
            <input
              type="text"
              required
              name="rating"
              placeholder="Ratings"
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
              placeholder="Description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control text-center mt-6">
            <input
              type="submit"
              className="btn btn-primary  bg-pink-600 hover:bg-pink-500 border-0"
              value="Add toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
