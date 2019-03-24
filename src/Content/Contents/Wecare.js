import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import YouTube from 'react-youtube';
import logoph from '../../Content/logoph.png'
import logodop from '../../Content/logodop.png'
import './GB.css'

class Wecare extends Component{
    render()
    {
        return(
            <div>
                 <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-1" className="Barin" >
                            <a href="/APP"><h5 className="Barin">ย้อนกลับ</h5></a>

                        </div>
                    </div>
                </div>
                <br/>
                <h2>โรงพยาบาล</h2>
            </div>
        )
    }
}
export default Wecare