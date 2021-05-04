import React from 'react';
import "./fotter.css";
const Footer =() =>{
    return (
        <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="column">
                    <h3>Contact Address</h3>
                    <ul>className="list-unstyled">
                     <li>Department of Computer Science</li>
                       <li>Eolas Building</li>
                          <li>North Campus</li>
                          <li>Maynooth University</li>
                           <li>Maynooth</li>
                            <li>Co Kildare</li>
                            </ul>
                </div>
                <div className="column">
                    <h3>Contact Email</h3>
                      <ul>className="list-unstyled"> 
                        <li>cathal.t.butler.2021@mumail.ie</li>
                          <li>sinead.kilmurray2021@mumail.ie</li>
                          <li>pavel.a.proshkovich.2021@mumail.ie</li>
                          <li>conor.treston.2020@mumail.ie</li>
                          <li>di.yao.2020@mumail.ie</li>
                    </ul>

                </div>
       
            </div>
            <hr/>
            <div className="row">
            <p className="column-span">&copy;{
                new Date().getFullYear()}Basic-Bill |All rights reserved |Terms Of Service|Privicy</p>
             </div>
        </div>
            <h4>Footer</h4> 
        </div>
    )
}
export default Footer;