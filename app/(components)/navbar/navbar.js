import Link from 'next/link'
import React from 'react'
import {FaStaylinked} from "react-icons/fa"
export default function Navbar() {
  return (
    <div>
       <nav>
            <Link href="/" className="logo">Xplore<FaStaylinked/>kill
            </Link>
            <div className="nav-links" id="navLinks">
                <i className="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/Courses">Course</Link></li>
                    <li><Link href="/Blog">Blog</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="Contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()"></i>
        </nav>
    </div>
  )
}
