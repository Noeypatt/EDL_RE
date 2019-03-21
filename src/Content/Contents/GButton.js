import React, { Component } from 'react';

class GButton extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-12" >
                            <div >
                                <h1 align='center' >Hello</h1>
                                <br />

                                <div class="container-fluid" align="center" >
                                    <div class="row" >
                                    <div class="col-lg-1" >
                                            
                                        </div>

                                        <div class="col-lg-2" >
                                            <a ><button  type="button" class="btn btn-primary">เรื่องเล่าวันใหม่</button></a>
                                        </div>

                                        <div class="col-lg-2" >
                                            <a ><button  type="button" class="btn btn-primary">อาหาร</button></a>
                                        </div>

                                        <div class="col-lg-2" >
                                            <a href="/Allowance" ><button  type="button" class="btn btn-primary">เบี้ยยังชีพผู้สูงอายุ</button></a>
                                        </div>

                                        <div class="col-lg-2" >
                                            <a href="/Health"><button  type="button" class="btn btn-primary">ปัญหาสุขภาพ</button></a>
                                        </div>

                                        <div class="col-lg-2" >
                                            <a href="/Wecare" ><button  type="button" class="btn btn-primary">Wecare</button></a>
                                        </div>

                                        <div class="col-lg-1" >
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

}
export default GButton
/*
<div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-5" >


                        </div>

                        <div class="col-lg-5" >


                        </div>


                        <div class="col-lg-2" >
                            <div className="GB">
                                <h1 align='center' >Hello</h1>
                                <br />
                                <div align='left'>
                                    <button type="button" class="btn btn-outline-info">เรื่องเล่าวันใหม่</button><br /><br />
                                    <button type="button" class="btn btn-outline-info">Success</button><br /><br />
                                    <button type="button" class="btn btn-outline-info">เหตุฉุกเฉิน</button><br />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
*/