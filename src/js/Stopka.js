import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

class Stopka extends React.Component{
    render(){
        return (
            <div>
            <div className="footer">
                <div className="footer1">
                    <h1>Lorem ipsum dolor</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis turpis, suscipit non maximus a, mattis id arcu.
                    Proin metus nibh, dignissim eu libero in, finibus laoreet metus. Sed at convallis orci. Nam a urna rutrum, tincidunt est et, laoreet nulla.
                    Aliquam accumsan, velit id hendrerit mollis, mi ligula feugiat nisi, ut dignissim tellus urna non quam.
                </div>
                <div className="footer1">
                    <h1>Lorem ipsum dolor</h1>
                    <ul>
                        <li>consectetur adipiscing elit</li>
                        <li>ut turpis turpis</li>
                        <li>suscipit non maximus</li>
                        <li>proin metus nibh,</li>
                    </ul>
                </div>
                <div className="footer1 footer3">
                    <h1>Lorem ipsum dolor</h1>
                    <div className="footer-input">
                        <input className="footer-input" type="text"/>
                        <button type="button" className="footer-btn" >Lorem</button>
                    </div>
                    <p></p>
                    <div className="footer-icn">
                        <IoLogoFacebook className="footer-icn2" />
                        <IoLogoTwitter className="footer-icn2"/>
                        <IoLogoInstagram className="footer-icn2" />

                    </div>
                 </div>
                </div>
            <div className="footer2"> Copyright </div>
    </div>
        )}
}

export default Stopka;
