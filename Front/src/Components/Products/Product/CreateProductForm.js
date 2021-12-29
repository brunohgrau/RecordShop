import { useForm } from "react-hook-form";
import { getProduct } from "../../api";
import { useQuery } from "react-query";

const CreateProductForm = ({ onFormSubmit, isLoading }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({});

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
    console.log(data);
  });

  return (
    <>
      <div>
        <section className="container mx-auto px-4 sm:px-8 max-w-4xl mb-32 ">
          <div className="flex mt-8  justify-evenly ">
            <form className="flex" onSubmit={onSubmit}>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="artistName"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Artist Name
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("artistName", { required: true })}
                      id="artistName"
                      name="artistName"
                      type="string"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                      focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="recordName"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Record Name
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("recordName", { required: true })}
                      id="recordName"
                      name="recordName"
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("price", { required: true })}
                      id="price"
                      name="price"
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="count"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Count
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("count", { required: true })}
                      id="count"
                      name="count"
                      type="string"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="imageUrl"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Image Url
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("imageUrl", { required: true })}
                      id="imageUrl"
                      name="imageUrl"
                      type="string"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="label"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Label
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("label", { required: true })}
                      id="label"
                      name="label"
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="track1"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Track1
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("track1")}
                      id="track1"
                      name="track1"
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="track2"
                    className="ml-1 mb-2 block text-sm font-medium text-gray-700"
                  >
                    Track2
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("track2")}
                      id="track2"
                      name="track2"
                      type="string"
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                focus:outline-none focus:border-indigo-200"
                    />
                  </div>
                </div>

                <button
                  class=" mt-4 col-start-2  bg-blue-500 font-semibold 
text-white py-2 px-4 border border-blue-500 
hover:border-transparent rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateProductForm;
