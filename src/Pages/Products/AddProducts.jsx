import React, { use, useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AddProducts = () => {
  const { user } = useContext(AuthContext);

  const handleUp = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      productName: form.productName.value,
      category: form.category.value,
      pricePerKg: form.price.value,
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.photo.value,
      userEmail: form.email.value,
      createdAt: new Date().toISOString(),
      ownerName: form.ownerName.value,
    };

    try {
      const response = await axios.post(
        "https://assignmenttenserver-pi.vercel.app/products",
        formData,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Successfully Added!");
        form.reset();
      } else {
        toast.error("You can not add product!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }

    ///
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen my-10 ">
        <div className="card bg-base-100 w-[94%]  md:w-100 shrink-0 shadow-2xl   ">
          <h1 className=" text-2xl md:text-3xl pt-5 font-bold  text-center">
            Add Product
          </h1>
          <div className="card-body w-full ">
            <form onSubmit={handleUp} className="fieldset">
              {/*Product  Name */}
              <label className="label">Product Name</label>
              <input
                type="text"
                name="productName"
                className="input w-full mb-2"
                placeholder="Enter product name"
                required
              />
              {/*Owner  Name */}
              <label className="label">Owner Name</label>
              <input
                type="text"
                name="ownerName"
                className="input w-full mb-2"
                placeholder="Enter your name"
                required
              />
              {/*category*/}
              <label className="label">Category</label>
              <select
                name="category"
                defaultValue="Vegetables"
                className="select select-neutral border border-gray-300 w-full text-gray-800"
              >
                <option disabled={true}>category</option>
                <option>Vegetables</option>
                <option>Proteins</option>
                <option>Healthy Fats</option>
              </select>
              {/*pricePerKg*/}
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full mb-2"
                placeholder="Price(per kg)"
                required
              />
              {/*location*/}
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input w-full mb-2"
                placeholder="Location"
                required
              />
              {/*availability*/}
              <label className="label">Availability</label>
              <input
                type="text"
                name="availability"
                className="input w-full"
                placeholder="Availability"
                required
              />
              {/*description*/}
              <label className="label">Description</label>
              <textarea
                name="description"
                className="input w-full mb-2 rounded h-30  text-wrap overflow-y-auto"
                rows={7}
                wrap="soft"
                placeholder="Description"
                required
                maxLength={500}
              />
              {/*cover Image  */}
              <label className="label">Cover Image Url</label>
              <input
                type="text"
                name="photo"
                className="input w-full mb-2"
                placeholder="https://..."
              />

              {/*Email*/}
              <label className="label">Email</label>
              <input
                type="text"
                name="email"
                className="input w-full"
                placeholder="Availability"
                required
                defaultValue={user.email}
              />

              <div className="addBtn flex justify-center item-center ">
                <button className="btn px-6  shadow-xl shadow-green border border-green-700 py-3 mt-5 font-semibold rounded-md text-black bg-green-500  hover:text-white hover:border-white transition-all duration-300 ">
                  {" "}
                  Add Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
