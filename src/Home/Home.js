import React, { Component } from 'react';

import home from './home.png'
import './home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <img src={home} width='100%' />
                <br /><br />

                <div className="home">
                    <div className="home" class="container-fluid">
                        <div class="row" >
                            <div class="col-lg-12 col-sm-12 " >
                                <a  href="/App" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">เข้าสู่หน้าหลัก</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}
export default Home;
