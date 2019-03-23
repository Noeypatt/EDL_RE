import React, { Component } from 'react';
import './Header.css'
import Logo from '../Header/img/E.svg';


class Header extends Component {
    render() {
        return (
            <div className="Bar" >

                <div  class="container-fluid"  >
                    <div  class="row" >
                        <div  class="col-lg-2 col-xs-12 " >

                            <a  href="/"><img src={Logo} alt="Elderly" width="50px" /></a>
                        </div>


                        <div  class="col-lg-5 col-xs-12">
                            <a class="nav-link active" href="/Expand"><h5 className="Bar" align="left">หน่วยงานที่เกี่ยวข้อง</h5></a>

                        </div>


                        <div class="col-lg-5 col-xs-12">
                            <a class="nav-link " ><h5 align="right" >สายด่วน โทร. 1300</h5></a>
                        </div>


                    </div>

                </div>

            </div>
        );
    }

}
export default Header;