import React, { Component } from 'react';
import H1 from "../Contents/H1"
import H2 from "../Contents/H2"
import '../Content.css'


class Health extends Component {

    render() {
        return (
            <div className = "font" >

                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-1" className="Barin">
                            <a class="nav-link active" href="/APP"><h5 className="Barin">ย้อนกลับ</h5></a>

                        </div>
                    </div>
                </div>

                <br />
                <div>
                <h4 >5 โรคเฝ้าระวังในผู้สูงอายุ</h4><br />
                <H1 /><br /><br />
                </div>

                <div>
                <h4>สุขภาพของผู้สูงอายุในเเต่ละอำเภอ</h4><br />
                <H2/>
                </div>

            </div>
        );
    }
}
export default Health