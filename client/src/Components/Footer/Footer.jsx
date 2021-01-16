import React from 'react'
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import TwitterIcon from '@material-ui/icons/Twitter';
import './styles.css'


const Footer = () => {
    return (
        <footer className="footer">
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
                    <a href="https://www.facebook.com/Nablus.Circus.School/" target="_blank" rel="noreferrer" >
                        <FacebookIcon className="ICONS" />
                    </a>
                    <a href="https://twitter.com/NablusCircus" target="_blank" rel="noreferrer" >
                        <TwitterIcon className="ICONS" />
                    </a>
                    <a href="https://www.google.com/maps/dir//32.2232843,35.2546059/@32.223299,35.2544316,19z" target="_blank" rel="noreferrer" >
                        <EditLocationIcon className="ICONS" />
                    </a>
                    {/* <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a> */}
                </div>


            </div>
            <div className="footer-right col-md-4 col-sm-6">

                <img alt="Logo" src="https://cdn.discordapp.com/attachments/762737273590382623/798268702746476554/8afa6b538377df54.png" height="150px" max-width="200px" />

                <p className="name"> NABLUS PERFORMING ART SCHOOL © 2021</p>
            </div>
        </footer>
    )
}
export default Footer
