import { useState } from "react";
import { Cart, Search, User, Wishlist } from "../Icons/Icons";
import {menCategory, womenCategory, kidsCategory} from '../data/category'

const NavBar = () => {
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);
  let mensClothing = []
  let womensClothing = []
  let kidsClothing = []
   for (const [key, value] of Object.entries(menCategory)) {
    let data =   {
       id: key,
      category: key,
      subCategory: value
     }
     mensClothing.push(data)
  }
   for (const [key, value] of Object.entries(womenCategory)) {
    let data =   {
       id: key,
      category: key,
      subCategory: value
     }
     womensClothing.push(data)
  }
   for (const [key, value] of Object.entries(kidsCategory)) {
    let data =   {
       id: key,
      category: key,
      subCategory: value
     }
     kidsClothing.push(data)
  }
  
console.log(mensClothing);

  return (
    <>
        <section className={` navbar w-full fixed hover:bg-white  ${(men||women||kids)? 'bg-white':''} z-10`}>
          <div className=" flex p-4">
            <div className="  cursor-pointer mr-10 w-28 text-3xl font-bold">EnVogue</div>
            <div className=" ">
              <ul className=" flex gap-x-2 cursor-pointer">
                <li
                  className={`  px-4 py-1 rounded-3xl ${
                    men ? "text-white" : "text-black"
                  } ${
                    men ? "bg-left-bottom" : "bg-left-top"
                  } transition-all ease-linear duration-[200ms]  bg-[length:100px_200px] bg-gradient-to-t from-black from-50% to-transparent to-50% `}
                  onClick={() => {
                    setMen(true);
                    setWomen(false);
                    setKids(false);
                  }}
                >
                  Men
                </li>
                <li
                  className={`px-4 py-1 rounded-3xl  transition-all ease-linear duration-[200ms] ${
                    women ? "text-white" : "text-black"
                  } ${
                    women ? "bg-left-bottom" : "bg-left-top"
                  }  bg-[length:100px_200px] bg-gradient-to-t from-black from-50% to-transparent to-50% `}
                  onClick={() => {
                    setWomen(true);
                    setMen(false);
                    setKids(false);
                  }}
                >
                  Women
                </li>
                <li
                  className={` px-4 py-1 rounded-3xl transition-all ease-linear duration-[200ms] ${
                    kids ? "text-white" : "text-black"
                  } ${
                    kids ? "bg-left-bottom" : "bg-left-top"
                  }  bg-[length:100px_200px] bg-gradient-to-t from-black from-50% to-transparent to-50% `}
                  onClick={() => {
                    setKids(true);
                    setMen(false);
                    setWomen(false);
                  }}
                >
                  Kids
                </li>
              </ul>
            </div>
            <div className=" justify-self-end ml-auto flex gap-x-4 items-center ">
          <div className=" flex gap-2 items-center hover:border-2 hover:border-black px-2 py-1 ">
            <Search />
            <input
              type="search"
              placeholder=" Search..."
              className=" outline-none bg-transparent text-black placeholder:text-black caret-transparent hover:caret-black"
            />
          </div>
              <User />
              <Wishlist />
              <Cart />
            </div>
          </div>
          {men || women || kids ? (
            <div
              className=" overlay bg-white h-72 w-screen  relative text-sm"
              onClick={() => {
                setMen(false);
                setWomen(false);
                setKids(false);
              }}
            >
              <div className="absolute text-black w-full  h-44 flex gap-10 ml-[180px] mt-2">
                {men && mensClothing.map((value)=>(
                     <div className=" h-full flex flex-col">
                      <h4 className=" font-semibold ">{value.category}</h4>
                     <ul className=" cursor-pointer space-y-1 text-[12px] mt-2">
                     {value.subCategory.map((data)=>(
                       <li
                       onClick={(event) => {
                         event.stopPropagation();
                       }}
                     >
                       {data}
                     </li>
                     ))}
                     </ul>
                   </div>
                ))}
                {women && womensClothing.map((value)=>(
                     <div className=" h-full flex flex-col">
                      <h4 className=" font-semibold ">{value.category}</h4>
                     <ul className=" cursor-pointer space-y-1 text-[12px] mt-2">
                     {value.subCategory.map((data)=>(
                       <li
                       onClick={(event) => {
                         event.stopPropagation();
                       }}
                     >
                       {data}
                     </li>
                     ))}
                     </ul>
                   </div>
                ))}
                {kids && kidsClothing.map((value)=>(
                     <div className=" h-full flex flex-col">
                      <h4 className=" font-semibold ">{value.category}</h4>
                     <ul className=" cursor-pointer space-y-1 text-[12px] mt-2">
                     {value.subCategory.map((data)=>(
                       <li
                       onClick={(event) => {
                         event.stopPropagation();
                       }}
                     >
                       {data}
                     </li>
                     ))}
                     </ul>
                   </div>
                ))}
              </div>
              <div className=" absolute right-20 top-0 h-5 w-5 px-2 py-2 rounded-full shadow-xl my-auto hover:underline cursor-pointer">
                Close
              </div>
            </div>
          ) : (
            ""
          )}
        </section>
       
    </>
  );
};

export default NavBar;
