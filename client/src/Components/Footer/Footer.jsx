import React from 'react'
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import TwitterIcon from '@material-ui/icons/Twitter';
import './styles.css'


const Footer = () => {
    return (
        <footer class="footer">
            <div className="footer-left col-md-4 col-sm-6">
                <p className="about">
                    <span> About the company</span> The Nablus Performing Art School (Assirk Assaghir Association)
                has created a psychosocial treatment program for children through play in the year 2018.
                This is a community program that seeks to work with children in different marginalized
                areas and improve their psychological state through play, especially circus and theater games.
                The program focuses on working with children who are being harassed by the occupation and its settlers in the
                regions classified as "Area C". The program is led by a group of psychologists.
                The program has provided services to 1,500 children in Palestinian villages and camps.
                </p>

            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <div>
                    <p><span>  Shwetra Street</span>  Nablus, Palestine</p>
                </div>
                <div>
                    <p><span> 09-2330877 </span> </p>
                </div>
                <div>
                    <p><a href="#"> Mh.shafee@yahoo.com</a></p>
                </div>
                <div className="icons">
                    <a href="https://www.facebook.com" target="_blank">
                        <FacebookIcon className="ICONS" />
                    </a>
                    <Link to="">
                        <TwitterIcon className="ICONS" />
                    </Link>
                    <Link to="">
                        <EditLocationIcon className="ICONS" />
                    </Link>
                    {/* <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a> */}
                </div>


            </div>
            <div className="footer-right col-md-4 col-sm-6">

                <img src="https://media.discordapp.net/attachments/762737273590382623/796023171756982282/132539068_216880010020608_5049590644480024286_n1.png?width=662&height=676" height="150px" maxWidth="200px" />

                <p className="name"> NABLUS PERFORMING ART SCHOOL
 &copy 2021</p>
            </div>
        </footer>
    )
}
export default Footer
