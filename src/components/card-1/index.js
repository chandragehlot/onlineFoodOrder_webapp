import React from "react";
import ItemCount from "../item-count";
import { getImageUrl } from "../../config";
import { BiFoodTag } from "react-icons/bi";
import classNames from "classnames";

// props :
// {
//   "orderItem": {
//       "id": 1,
//       "name": "masala dosa",
//       "foodtype": "veg",
//       "mainCategory": "south",
//       "price": 200,
//       "courseType": "starter",
//       "rating": 4,
//       "description": "This is the description placeholder",
//       "itemImage": 1,
//       "IMAGE_MAPPING": {
//           "id": 1,
//           "imagekey": "south",
//           "imageurl": "south_wwebkYnGEzQ.jpg?updatedAt=1639146161359",
//           "CDN_fileId": null
//       },
//       "quantity": 4
//   }
// }

const Card1 = (props) => {
  const { orderItem : { name, description, IMAGE_MAPPING, foodtype, quantity, mainCategory,courseType, price }} = props;
  return (
    <div className="card-1-container bg-white">
      <div className="border-b border-gray-300 p-6">
        <div className="flex flex-row">
          <div className="basis-1/4 flex items-start justify-center">
            <div className="h-[120px] w-[140px]">
              <img src={getImageUrl(IMAGE_MAPPING.imageurl)} alt="" className="h-full w-full object-cover"></img>
            </div>
          </div>
          <div className="content basis-3/4 flex flex-col pl-5">
            <div className="font-sans text-lg font-normal text-gray-800 text-left flex align-center">
              <div className="">
              <BiFoodTag className={classNames(foodtype === 'veg' ? 'text-green-500' : 'text-red-500')} />
              </div>
              <div className="pl-2 leading-none uppercase">
              {name}
              </div>
                
            </div>
            <div className="text-base font-sans font-normal text-gray-500 text-left">
              {`( ${mainCategory}  ,  ${ courseType} )`}
            </div>
            <div className="text-base font-sans font-normal text-gray-500 pt-4 text-left">
              {description}
            </div>
            <div className="flex flex-row pt-4">
              <div className="text-base line-through text-gray-500">
                {" "}
                {/* ₹2,646 */}
              </div>
              <div className="text-lg font-bold mr-4 text-black"> ₹{price * quantity}</div>
              {/* <div className="text-base text-green-700">19% off</div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-2">
          <div className="basis-1/4 ">
            <div className="flex justify-center">
              <ItemCount quantity={quantity}></ItemCount>
            </div>
          </div>
          <div className="basis-3/4  flex items-center pl-5">
            <div className="text-base font-semibold">REMOVE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
