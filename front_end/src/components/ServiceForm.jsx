import React, { useEffect } from "react";

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  MdAddPhotoAlternate,
  MdOutlineAddPhotoAlternate,
  MdRemove,
} from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { axiosClient } from "@/api/axios";
import { useNavigate } from "react-router-dom";

export default function ServiceForm() {
  const navigate = useNavigate ();
  const [editedText, setEditedText] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    description: editedText,
    price: "",
    delivery: "",
    tags: "",
    images: [],
    extras: [],
  });
  const handlSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("category", formData.category);
    form.append("sub_category_id", formData.subcategory);
    form.append("description", editedText);
    form.append("price", formData.price);
    form.append("delivery_time", formData.delivery);
    form.append("tags", formData.tags);
    for (let i = 0; i < formData.images.length; i++) {
      form.append("images[]", formData.images[i]);
    }
    for (let i = 0; i < formData.extras.length; i++) {
      form.append("extras[]", JSON.stringify(formData.extras[i]));
    }
    console.log(form);
    axiosClient.post('/upload_service',form).then((res) => {
      console.log(res);
      navigate(-1)
    }).catch((err) => {
      console.log(err);
    })
    console.log("submit");
  };

  useEffect(() => {
    axiosClient
      .get("/get_categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
    setSubCategories(categories.filter((category) => category.id == e.target.value)[0].subcategories);
  }
  return (
    <>
      <form onSubmit={handlSubmit}>
        <div className="flex flex-col space-y-7">
          <div className="flex flex-col space-y-2">
            <label htmlFor="title" className="font-semibold">
              Service Title
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="border py-1 px-2 rounded-sm outline-none  focus:border-primary transition-all duration-300 "
              type="text"
              name="title"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <div className="flex justify-between space-x-16">
              <select
                onChange={(e) => handleCategoryChange(e)}
                
                className={`bg-white border py-2 px-2 rounded-sm w-full focus:border-primary transition-all duration-300`}
                name="category"
              >
                <option name="category" value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) =>
                  setFormData({ ...formData, subcategory: e.target.value })
                }
                className="bg-white border py-1 px-2 rounded-sm w-full focus:border-primary transition-all duration-300"
                name="subcategory"
              >
                <option value="" disabled>
                  Select a subcategory
                </option>
                {subCategories.map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="description" className="font-semibold">
              Service Description
            </label>

            <ReactQuill
              theme="snow"
              value={editedText}
              onChange={setEditedText}
            />
          </div>
          <div className="flex justrify-between space-x-16">
            <div className="flex flex-col space-y-2 w-full">
              <label
                htmlFor="price"
                className="font-semibold flex space-x-1 items-baseline"
              >
                <div>Price</div>{" "}
                <div className="text-gray-500 text-xs"> (DH)</div>
              </label>

              <input
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                type="text"
                className="border py-1 px-2 rounded-sm outline-none focus:border-primary transition-all duration-300"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="delivery" className="font-semibold">
                Delivery time
              </label>
              <select
                onChange={(e) =>
                  setFormData({ ...formData, delivery: e.target.value })
                }
                name="delivery"
                className="bg-white border py-1 px-2 rounded-sm w-full focus:border-primary transition-all duration-300"
              >
                <option value="1">Within 1 day</option>
                <option value="3">Within 3 days</option>
                <option value="7">Within 7 days</option>
                <option value="14">Within 14 days</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mb-20">
            <label
              htmlFor="title"
              className="font-semibold flex items-baseline space-x-2"
            >
              <div>Tags</div>
              <div className="text-gray-500 text-xs font-thin">
                (Separate tags with commas ",")
              </div>
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
              className="border py-1 px-2 rounded-sm outline-none focus:border-primary transition-all duration-300 "
              type="text"
              name="tags"
            />
          </div>
          {formData.images.length == 0 ? (
            <div className="w-full bg-[#e9e9e9] h-64 rounded-sm flex flex-col space-y-2 items-center justify-center">
              <label
                htmlFor="image"
                className="  h-12 cursor-pointer flex justify-center items-center 
                      text-white bg-green-500 hover:bg-green-400  transition-all ease-in-out duration-100 active:scale-95 border px-7 rounded-md space-x-2  "
              >
                <MdOutlineAddPhotoAlternate size={20} />
                <div>Add Photos</div>
              </label>
              <input
                accept=".jpg, .jpeg, .png, .webp"
                type="file"
                name="images"
                id="image"
                className="hidden"
                onInputCapture={(e) =>
                  setFormData({ ...formData, images: [e.target.files[0]] })
                }
              />
              <div className="text-gray-700">
                Dimensions: 800x470 pixels Maximum size: 5 megabytes (MB)
                Allowed number of files: 5 files
              </div>
            </div>
          ) : (
            <div className="  rounded-sm w-full m flex justify-center items-center">
              {console.log(formData.images)}
              <div className="w-[800px] h-[470px] group">
                <Carousel>
                  <CarouselContent>
                    {formData.images.map((image, index) => (
                      <CarouselItem key={index}>
                        {console.log(index)}
                        <div className="group">
                          <div className="hidden group-hover:block absolute top-0 bg-black/50 h-16  w-[800px] pl-4">
                            <div className="flex items-center justify-around space-x-2 h-full  ">
                              <div className="flex items-center  space-x-1 ">
                                <MdOutlineAddPhotoAlternate
                                  size={20}
                                  color="white"
                                />
                                <label
                                  htmlFor="add"
                                  className="text-white text-lg font-custom cursor-pointer"
                                >
                                  Add more
                                </label>
                                <input
                                  accept=".jpg, .jpeg, .png, .webp"
                                  type="file"
                                  id="add"
                                  className="hidden"
                                  onInputCapture={(e) => {
                                    setFormData({
                                      ...formData,
                                      images: [
                                        ...formData.images,
                                        e.target.files[0],
                                      ],
                                    });
                                  }}
                                />
                              </div>
                              <div className="flex items-center  space-x-1 ">
                                <FaRegEdit size={20} color="white" />
                                <label
                                  htmlFor={`update.${index}`}
                                  className="text-white text-lg font-custom cursor-pointer"
                                >
                                  Replace
                                </label>
                                <input
                                  accept=".jpg, .jpeg, .png, .webp"
                                  type="file"
                                  id={`update.${index}`}
                                  className="hidden"
                                  onInputCapture={(e) => {
                                    setFormData((prev) => {
                                      const newImages = [...prev.images];
                                      newImages[index] = e.target.files[0];
                                      return { ...prev, images: newImages };
                                    });
                                  }}
                                />
                              </div>
                              <div className="flex items-center  space-x-1 ">
                                <RxCross2 size={20} color="white" />
                                <label
                                  className="text-white text-lg font-custom cursor-pointer"
                                  onClick={(e) => {
                                    console.log(index);
                                    const removeIndex = index;

                                    if (formData.images.length === 1) {
                                      setFormData({ ...formData, images: [] });
                                    } else {
                                      const updatedImages =
                                        formData.images.filter(
                                          (_, i) => i !== removeIndex
                                        );
                                      setFormData({
                                        ...formData,
                                        images: updatedImages,
                                      });
                                    }
                                    console.log(
                                      formData.images.filter(
                                        (_, i) => i !== index
                                      )
                                    );
                                  }}
                                >
                                  Remove
                                </label>
                              </div>
                            </div>
                          </div>

                          {image ? (
                            <img
                              key={index}
                              className="w-[800px] h-[470px]"
                              src={URL.createObjectURL(image)}
                              alt=""
                            />
                          ) : null}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="w-10 h-10 ml-20 hidden group-hover:flex" />
                  <CarouselNext className="w-10 h-10 mr-20 hidden group-hover:flex" />
                </Carousel>
              </div>
            </div>
          )}
          {formData.extras.length > 0 &&
            formData.extras.map((extra, index) => (
              <div
                className="bg-gray-100 px-5 mx-10 pb-3 pt-2 flex flex-col space-y-2"
                key={index}
              >
                <div className="flex flex-col space-y-1">
                  <label className="font-semibold" htmlFor={`title-${index}`}>
                    Title
                  </label>
                  <input
                    className="border py-1 px-2 rounded-sm outline-none focus:border-primary transition-all duration-300"
                    type="text"
                    id={`title-${index}`}
                    value={extra.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        extras: formData.extras.map((extra, i) =>
                          i === index
                            ? { ...extra, title: e.target.value }
                            : extra
                        ),
                      })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    className="font-semibold"
                    htmlFor={`description-${index}`}
                  >
                    Description
                  </label>
                  <input
                    className="border py-1 px-2 rounded-sm outline-none focus:border-primary transition-all duration-300"
                    type="text"
                    id={`description-${index}`}
                    value={extra.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        extras: formData.extras.map((extra, i) =>
                          i === index
                            ? { ...extra, description: e.target.value }
                            : extra
                        ),
                      })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    className="font-semibold flex space-x-1 items-baseline"
                    htmlFor={`price-${index}`}
                  >
                    <div>Extra Charges</div>{" "}
                    <div className="text-gray-500 text-xs"> (DH)</div>
                  </label>
                  <input
                    className="border py-1 px-2 rounded-sm outline-none focus:border-primary transition-all duration-300"
                    type="text"
                    id={`price-${index}`}
                    value={extra.charge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        extras: formData.extras.map((extra, i) =>
                          i === index
                            ? { ...extra, charge: e.target.value }
                            : extra
                        ),
                      })
                    }
                  />
                </div>
                <div className="flex space-x-16">
                  <div
                    className={`flex flex-col space-y-1 ${
                      extra.will_delay === "true" ? "w-1/2" : "w-1/2 pr-8"
                    }`}
                  >
                    <label
                      className="font-semibold"
                      htmlFor={`will_delay-${index}`}
                    >
                      Will delay the delivery time ?
                    </label>
                    <select
                      name="will_delay"
                      id="will_delay"
                      defaultValue={extra.will_delay}
                      className="bg-white border py-1 px-2 rounded-sm w-full focus:border-primary transition-all duration-300"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          extras: formData.extras.map((extra, i) =>
                            i === index
                              ? { ...extra, will_delay: e.target.value }
                              : extra
                          ),
                        })
                      }
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  <div
                    className={`${
                      extra.will_delay === "true" ? "flex" : "hidden"
                    } flex flex-col space-y-1 w-1/2`}
                  >
                    <label
                      className="font-semibold"
                      htmlFor={`will_delay-${index}`}
                    >
                      How much time the service will be delayed ?
                    </label>
                    <select
                      name="delay_time"
                      id=""
                      onChange={(e) => setFormData({ ...formData, extras: formData.extras.map((extra, i) =>
                        i === index
                          ? { ...extra, delay_time: e.target.value }
                          : extra
                      ), })}
                      className="bg-white border py-1 px-2 rounded-sm w-full focus:border-primary transition-all duration-300"
                    >
                      <option value="1">For 1 day</option>
                      <option value="2">For 2 days</option>
                      <option value="3">For 3 days</option>
                      <option value="4">For 4 days</option>
                      <option value="5">For 5 days</option>
                      <option value="6">For 6 days</option>
                      <option value="7">For 1 week</option>
                      <option value="14">For 2 weeks</option>
                      <option value="30">For 1 month</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div
                    className="cursor-pointer select-none px-5  bg-red-500 text-white border hover:bg-red-600   transition-all ease-in-out duration-200  text-sm font-semibold p-2 rounded-md"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        extras: formData.extras.filter((_, i) => i !== index),
                      })
                    }
                  >
                    Cancel
                  </div>
                </div>
              </div>
            ))}
          <div className="flex justify-around ">
            <button className="bg-green-500 text-white  font-bold hover:bg-green-600 transition-all ease-in-out duration-200 active:scale-95 rounded w-3/4  ">
              Upload Service
            </button>

            <div className="flex justify-end ">
              <div
                onClick={() =>
                  setFormData({
                    ...formData,
                    extras: [
                      ...formData.extras,
                      {
                        title: "",
                        charge: 0,
                        delay_time: "1",
                        description: "",
                        will_delay: "true",
                      },
                    ],
                  })
                }
                className=" cursor-pointer select-none text-primary hover:bg-primary hover:text-white border  border-primary transition-all ease-in-out duration-200  text-sm font-semibold p-2 rounded"
              >
                Add Some Upgrades
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
