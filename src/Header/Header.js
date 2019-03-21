import React, { Component } from 'react';
import './Header.css'
import Logo from '../Header/img/E.svg';


class Header extends Component {
    render() {
        return (
            <div  className="Bar" >
                <dir class="container-fluid" className="Bar"  >
                    <div class="container-fluid"  >
                        <div class="row" width='100%'>
                            <div class="col-lg-2 col-sm-12 col-xs-12" >

                                <a href="/"><img src={Logo} alt="Elderly" width="50px" position="left" /></a>
                            </div>

                            <div class="col-lg-8 col-sm-12 col-xs-12">
                                <div>
                                    <ul class="nav">
                                        <a class="nav-link active" href="/Expand"><h5 className="barL">หน่วยงานที่เกี่ยวข้อง</h5></a>
                                        <a class="nav-link active" href="/#"><h5 className="barL" >สิทธิของผู้สูงอายุ</h5></a>


                                    </ul>
                                </div>
                            </div>
                            <dir className="barR">
                                <div class="col-lg-2 col-sm-12 col-xs-12 "className="barR">
                                    <a class="nav-link " ><h5 className="barR">สายด่วน โทร. 1300</h5></a>
                                </div>
                            </dir>

                        </div>

                    </div>

                </dir>
                </div>
        );
    }

}
export default Header;