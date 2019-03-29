import React, { Component } from 'react';
import './home.css';
import Header from '../Header/Header';
import Content from '../Header/Contents/Conhme'



class Home extends Component {
    render() {
        return (
            <div>

                <Header />

                <Content />
                <br /> <br /> <br /> <br />


                <div className="home">
                    <div className="home" class="container-fluid">
                        <div class="row" >
                            <div class="col-lg-12 col-sm-12 " >
                                <a href="/App" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">เข้าสู่หน้าหลัก</a>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        )

    }
}
export default Home;
