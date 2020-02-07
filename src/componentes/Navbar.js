import React from 'react'
import { FaHome, FaTooth} from 'react-icons/fa'
import { IoMdPerson } from 'react-icons/io'
import { MdAccessTime } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand navbar-light bg-dark mb-5">
            <a className="navbar-brand text-white text-uppercase" href="/">
                odonto
            </a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a  href="/index" className="nav-link text-white"> <FaHome /> Home</a></li>
                    <li className="nav-item"><a  href="/dentistas" className="nav-link text-white"> <FaTooth /> Dentistas</a></li>
                    <li className="nav-item"><a  href="/pacientes" className="nav-link text-white"> <IoMdPerson /> Pacientes</a></li>
                    <li className="nav-item"><a  href="/consultas" className="nav-link text-white"> <MdAccessTime /> Marcar consultas</a></li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-2" type="search" placeholder="Buscar..."/>
                    <button className="btn btn-primary" type="button"> <GoSearch /> </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;