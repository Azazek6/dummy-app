import { LuPackage } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { BiLoaderCircle } from "react-icons/bi";

const OrderCard = () => {
  return (
    <div className="w-full border border-black rounded-[.56rem] flex flex-col">
      <div className="flex flex-col p-4 gap-4">
        <div className="flex items-center gap-4">
          <LuPackage className="text-[#2664eb] text-xl" />
          <div className="flex flex-col">
            <h3 className="font-bold text-lg ">Pedido #1760483651377</h3>
            <p className="flex items-center gap-2 text-sm">
              <CiCalendarDate className="text-lg" /> 14 de octube de 2025, 18:14
            </p>
          </div>
        </div>
        <span className="border w-fit py-2 px-4 text-xs flex items-center rounded-[.6rem] gap-2 border-[#4077ed] bg-[#b8caf1] text-[#2664eb] font-semibold">
          <BiLoaderCircle className="text-base" /> En proceso
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
