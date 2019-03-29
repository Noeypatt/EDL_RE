import React, { Component } from 'react';
import './Content.css';
import GButton from './Contents/GButton'
import SH from '../Content/img/show.png'


class Content extends Component {

    render() {
        return (
            <div className="con" >   
                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-12" >
                        <GButton />
                        <br/>
                        </div>
                    </div>
                </div>

                
            </div>



        );
    }
}
export default Content;
