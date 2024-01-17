import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdOutlineBarChart } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { RiShoppingCartFill, RiServiceFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Logo from "../assets/react.svg"

const SideBar = () => {
    return (
        <div className="">
            <Sidebar>
                <Menu className='bg-white text-[#acb2b8]' menuItemStyles={{
                    button: {
                        [`&.hover`]: {
                            backgroundColor: '#db147f',
                            color: '#b6c8d9',
                        },
                    },
                }}>
                    <div className="p-4"><img className="mx-auto" src={Logo}></img></div>
                    <MenuItem active >Dashboard</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar;