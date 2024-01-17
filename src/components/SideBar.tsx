import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Logo from "../assets/image.png"
import { RxDashboard } from "react-icons/rx";
import { FaHotel } from "react-icons/fa6";
import { LuShieldQuestion } from "react-icons/lu";
import { TfiBag } from "react-icons/tfi";
import { CiFileOn } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { PiHandbag, PiSubtitles } from "react-icons/pi";
import { TbReportSearch, TbLayersSubtract } from "react-icons/tb";
import { MdInsights } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = () => {
    return (
        <div className="">
            <Sidebar className="h-screen" backgroundColor={"#FFFFFF"}>
                <Menu className='text-[#acb2b8]' menuItemStyles={{
                    button: {
                        [`&:hover`]: {
                            backgroundColor: '#db147f',
                            color: '#ffffff',
                        },
                    }
                }}>
                    <div className="p-4 cursor-pointer"><img className="mx-auto" src={Logo}></img></div>
                    <MenuItem icon={<RxDashboard />}>Dashboard</MenuItem>
                    <MenuItem active icon={<FaHotel />}>My Centre</MenuItem>
                    <MenuItem icon={<LuShieldQuestion />}>Enquiries</MenuItem>
                    <MenuItem icon={<TfiBag />}>Visits & Tours</MenuItem>
                    <MenuItem icon={<CiFileOn />}>Applications</MenuItem>
                    <MenuItem icon={<SlPeople />}>Contacts</MenuItem>
                    <SubMenu label="Jobs" icon={<PiHandbag />}></SubMenu>
                    <MenuItem icon={<TbLayersSubtract />}>Transactions</MenuItem>
                    <MenuItem icon={<PiSubtitles />}>Subscriptions</MenuItem>
                    <MenuItem icon={<TbReportSearch />}>Reports</MenuItem>
                    <SubMenu label="Insights" icon={<MdInsights />}></SubMenu>
                    <MenuItem icon={<SiGooglemarketingplatform />}>Marketing</MenuItem>
                    <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar;