import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { Banner } from "flowbite-react";
function Annoncment() {
    return (
        <Banner>
            <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-2 animate-fade-in">
                <div className="mx-auto flex items-center">
                    <p className="flex items-center text-sm font-normal text-gray900 ">
                        <MdAnnouncement className="mr-4 h-4 w-4" />
                        Vi kommer inte att spara din data!
                    </p>
                </div>
                <Banner.CollapseButton color="gray" className=" text-gray900">
                    <HiX className="h-4 w-4" />
                </Banner.CollapseButton>
            </div>
        </Banner>
    );
}

export default Annoncment;
