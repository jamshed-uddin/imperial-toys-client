import React from "react";

const AddToys = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toy_name = form.toy_name.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const sub_category = form.sub_category.value;
    const image_url = form.image_url.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;

    const toyInfo = {
      toy_name,
      seller_name,
      seller_email,
      sub_category,
      image_url,
      price,
      rating,
      quantity,
      description,
    };

    console.log(toyInfo);
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
              name="seller_name"
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
            <select name="sub_category" className="select select-bordered w-52">
              <option defaultValue>Marvel</option>
              <option>DC</option>
              <option>Star-wars</option>
            </select>
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
              type="number"
              step="0.01"
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
          <div className=" text-center mt-6 lg:col-start-2 ">
            <input
              type="submit"
              className="btn btn-wide  bg-pink-600 hover:bg-pink-500 border-0"
              value="Add toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
