import React, { Component } from 'react';
import './Content.css';
import GButton from './Contents/GButton'
import SH from '../Content/show.png'


class Content extends Component {

    render() {
        return (
            <div className="pic" >
               
                 <img  src ={SH} width="100%"  /><br/><br/>
                
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
