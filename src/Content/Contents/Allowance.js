import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import YouTube from 'react-youtube';
import logoph from '../img/logoph.png'
import logodop from '../img/logodop.png'
import Namelist from './Namelist'
import '../Content.css'

class Allowance extends Component {

    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        const opts = {
            height: '340',
            width: '580',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 100
            }
        };

        return (
            <div className = "font">

                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-1" className="Barin" >
                            <a class="nav-link active" href="/APP"><h5 className="Barin" >ย้อนกลับ</h5></a>

                        </div>
                    </div>
                </div>

                <br />  

                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-5" >
                            <h5>หน่วยงานราชการ</h5><br />
                            <div >
                                <ExpansionPanel className = "font" expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography  ><h6 className = "font">หน่วยงานราชการ</h6></Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <p className = "font">
                                            เทศบาลเมืองกะทู้ โทร: 076-321500<br />
                                            <img src={logoph} width="25px" /> <a href="http://kathucity.go.th/public/">เทศบาลเมืองกะทู้</a></p>
                                            
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel className = "font" expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography ><h6 className = "font">เบี้ยยังชีพผู้สูงอายุ</h6></Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography >
                                            <strong className = "font">คุณสมบัติของผู้มีสิทธิ</strong>
                                            <p className = "font"> 1. ต้องมีสัญชาติไทย<br />
                                                2. ต้องมีอายุ 60 ปีบริบูรณ์ขึ้นไป โดยต้องเกิดก่อนวันที่ 31 มีนาคม 2492<br />
                                                หากไม่ทราบให้ถือว่าเกิดวันที่ 1 มกราคมของปีนั้นๆ<br />
                                                3. ต้องไม่เป็นผู้ได้รับเงินเดือน สวัสดิการ หรือสิทธิประโยชน์อื่นใดจากรัฐ<br />
                                                4. ต้องไม่เป็นผู้อยู่ในสถานสงเคราะห์คนชราที่รัฐดูแลอาหาร และที่พักให้อยู่แล้ว<br />
                                            </p><br />

                                            <strong className = "font">ขั้นตอนการยื่นคำขอรับเงิน</strong>
                                            <p className = "font"> 1. ผู้สูงอายุที่มีคุณสมบัติครบตามรายละเอียดข้างต้น สามารถยื่นคำขอ<br />ได้ด้วยตนเอง
                                                2. ในกรณีที่ผู้สูงอายุมีความจำเป็นที่ไม่สามารถมาลงทะเบียนยื่นคำขอรับเงินเบี้ยยังชีพผู้สูงอายุได้ด้วยตนเอง<br />
                                                หรือสามารถมอบอำนาจเป็นลายลักษณ์อักษรให้ผู้อื่นยื่นคำขอรับเงินเบี้ยยังชีพผู้สูงอายุแทนได้<br /> (สามารถขอรับแบบฟอร์มได้ที่สำนักงานเขต องค์การบริหารส่วนตำบล หรือใช้หนังสือมอบอำนาจทั่วไป)
                                            </p>

                                            <strong className = "font">หลักฐานประกอบการยื่นคำขอ</strong>
                                            <p className = "font"> 1.บัตรประจําตัวประชาชน หรือบัตรอื่นที่ออกโดยหน่วยงานของรัฐที่มีรูปถ่ายพร้อมสําเนา<br />
                                                2.ทะเบียนบ้าน (ที่เป็นปัจจุบัน) พร้อมสําเนา<br />
                                                3.สมุดบัญชีเงินฝากธนาคารในนามผู้มีสิทธิ์/ผู้ได้รับมอบอํานาจจากผู้มีสิทธิ์<br />
                                                พร้อมสําเนาสําหรับกรณีที่ผู้สูงอายุประสงค์จะรับเงินผ่านธนาคาร
                                            </p>

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography ><h6 className = "font">สิทธิผู้สูงอายุ</h6></Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <p className = "font">
                                            กรมกิจการผู้สูงอายุ (ผส.) โทร: 02-6424336<br />
                                            <img src={logodop} width="25px" /> <a href="http://www.dop.go.th/th">กรมกิจการผู้สูงอายุ</a></p>
                                            
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>

                        </div>

                        <div class="col-lg-2" >

                        </div>


                        <div class="col-lg-5" >
                            <YouTube videoId="XsAjVcBQfQ0" opts={opts} onReady={this._onReady} />
                        </div>

                    </div>
                </div>
                <br/><br/><br/><br/>

                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-12 col-xs-10 " >
                            <Namelist/><br/>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


export default Allowance
// <YouTube videoId="XsAjVcBQfQ0" opts={opts} onReady={this._onReady} />