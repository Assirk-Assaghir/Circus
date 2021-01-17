import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import RoomIcon from '@material-ui/icons/Room';
import TwitterIcon from '@material-ui/icons/Twitter';
import './styles.css'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left col-md-4 col-sm-6">
                <h3>Address</h3>
                <div>
                    <p><span>  Shwetra Street</span><br /><span> Nablus, Palestine</span></p>
                </div>
                <div>
                    <p><span> tel: (+970) 09-2330877 </span> </p>
                </div>
                <div>
                    <p>
                        <a href="mailto:Mh.shafee@yahoo.com">Mh.shafee@yahoo.com</a></p>
                </div>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <h3>Find Us</h3>
                <div className="icons">
                    <a href="https://www.facebook.com/Nablus.Circus.School/" target="_blank" rel="noreferrer" >
                        <FacebookIcon className="ICONS" />
                    </a>
                    <a href="https://twitter.com/NablusCircus" target="_blank" rel="noreferrer" >
                        <TwitterIcon className="ICONS" />
                    </a>
                    <a href="https://www.google.com/maps/dir//32.2232843,35.2546059/@32.223299,35.2544316,19z" target="_blank" rel="noreferrer" >
                        <RoomIcon className="ICONS" />
                    </a>
                    {/* <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a> */}
                </div>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
                <div className='center'>
                    <img alt="Logo" src="https://cdn.discordapp.com/attachments/762737273590382623/798268702746476554/8afa6b538377df54.png" height="100px" max-width="200px" />
                    <p className="name"> NABLUS PERFORMING ART SCHOOL © 2021</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
