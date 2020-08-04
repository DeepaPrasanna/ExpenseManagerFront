import React from 'react';
import { FaHome, FaInbox } from 'react-icons/fa';
import { IoIosNotifications, IoMdHelp } from 'react-icons/io';
import { MdNextWeek } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GrHelp } from "react-icons/gr";

import './Sidebar.css'



function Sidebar(props) {

    return (
        <div>

            <nav className="bg-light sidebar" style={{ marginTop: '90px' }}>
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">

                                <FaHome />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <IoIosNotifications />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FaInbox />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <MdNextWeek />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <AiOutlineUserAdd />

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FiSearch />

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <IoMdHelp />

                            </a>
                        </li>
                    </ul>


                </div>
            </nav>
        </div>


    );
}

export default Sidebar;