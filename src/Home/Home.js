import React, { Component } from 'react';

import home from './home.png'
import './home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <img src={home} width='100%' />
                <br /><br />
                <div class="container">
                    <div class="row" >
                        <div class="col-lg-5 " >
                        </div>

                        <div className="home" class="col-lg-2 col-sm-12 " >
                            <a href="/App" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">เข้าสู่หน้าหลัก</a>
                        </div>

                        <div class="col-lg-5 " >

                        </div>

                    </div>
                </div>

            </div>
        )

    }
}
export default Home;
