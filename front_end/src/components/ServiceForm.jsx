import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { RxCross2 } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
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

export default function ServiceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      subcategory: "",
      price: "50",
      description: "",
      delivery: "1",
      images: [{value: ""}],
    },
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "images",
  });
  const onSubmit = (data) => console.log(data);
  console.log("tags");
  console.log(watch("tags"));
  console.log("images");
  console.log(watch("images"));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-7">
          <div className="flex flex-col space-y-2">
            <label htmlFor="title" className="font-semibold">
              Service Title
            </label>
            <input
              {...register("title")}
              className="border py-1 px-2 rounded-sm outline-none focus:border-primary transition-all duration-300 "
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
                {...register("category")}
                className={`bg-white border py-2 px-2 rounded-sm w-full focus:border-primary transition-all duration-300`}
                name="category"
              >
                <option name="category" value="" disabled>
                  Select a category
                </option>
                <option name="category" value="1">
                  Option 1
                </option>
                <option name="category" value="2">
                  Option 2
                </option>
                <option name="category" value="3">
                  Option 3
                </option>
              </select>
              <select
                {...register("subcategory")}
                className="bg-white border py-1 px-2 rounded-sm w-full focus:border-primary transition-all duration-300"
                name="subcategory"
              >
                <option value="" disabled>
                  Select a subcategory
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="description" className="font-semibold">
              Service Description
            </label>
            <textarea
              name="description"
              className="border py-1 px-2 rounded-sm outline-none focus:border-primary transition-all duration-300"
            ></textarea>
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
                {...register("price")}
                onFocus={() => setPriceHovered(true)}
                type="text"
                className="border py-1 px-2 rounded-sm outline-none focus:border-primary transition-all duration-300"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="delivery" className="font-semibold">
                Delivery time
              </label>
              <select
                {...register("delivery")}
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
              {...register("tags")}
              className="border py-1 px-2 rounded-sm outline-none focus:border-primary transition-all duration-300 "
              type="text"
              name="tags"
            />
          </div>
          {fields.length === 1 && fields[0].value === "" ? (
            <div className="w-full bg-[#e9e9e9] h-64 rounded-sm flex flex-col space-y-2 items-center justify-center">
              <label
                htmlFor="image"
                className="  h-12 cursor-pointer flex justify-center items-center 
                     font-semibold text-white bg-green-500 hover:bg-green-400  transition-all ease-in-out duration-75 active:scale-95 border px-7 rounded-md space-x-2  "
              >
                <MdOutlineAddPhotoAlternate size={20} />
                <div>Add Photos</div>
              </label>
              <input
                {...register(`images.${0}.value`)}
                accept=".jpg, .jpeg, .png"
                type="file"
                name="images"
                id="image"
                className="hidden"
                onInputCapture={(e) => {
                  update(0,{ value: e.target.files[0] });
                }}
              />
              <div className="text-gray-700">
                Dimensions: 800x470 pixels Maximum size: 5 megabytes (MB)
                Allowed number of files: 5 files
              </div>
            </div>
          ) : (
            <div className="  rounded-sm w-full m flex justify-center items-center">
              <div className="w-[800px] h-[470px] group">
                <Carousel >
                  <CarouselContent>
                    {fields.map((field, index) => (
                      <CarouselItem >
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
                              
                                {...register(`images.${index}.value`)}
                                accept=".jpg, .jpeg, .png"
                                type="file"
                                key={field.id}
                                id="add"
                                className="hidden"
                                onInputCapture={(e) => {
                                  console.log(e.target.id);
                                  append({ value: e.target.files[0] });
                                }}
                              />
                            </div>
                            <div className="flex items-center  space-x-1 ">
                              <FaRegEdit
                                size={20}
                                color="white"
                              />
                              <label
                                htmlFor="update"
                                className="text-white text-lg font-custom cursor-pointer"
                              >
                                Replace
                              </label>
                              <input
                                {...register(`images.${index}.value`)}
                                accept=".jpg, .jpeg, .png"
                                type="file"
                                
                                id={`update.${index}`}
                                className="shidden"
                                onInputCapture={(e) => {
                                  const originalString = e.target.id;
                                  console.log(originalString.substring(7));
                                  update(0,{ value: e.target.files[0] });
                                }}
                              />
                            </div>
                            <div className="flex items-center  space-x-1 ">
                              <RxCross2 
                                size={20}
                                color="white"
                              />
                              <button
                                className="text-white text-lg font-custom cursor-pointer"
                                onClick={() => remove(index)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                        {console.log(field.value)}
                        {
                          field.value ? (
                            <img
                            className="w-[800px] h-[470px]"
                            src={URL.createObjectURL(field.value) }
                            alt=""
                          />
                          ) : null
                        }
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
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
}
