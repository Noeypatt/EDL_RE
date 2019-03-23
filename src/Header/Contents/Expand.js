import React, { Component } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../../Header/Header.css'
import Map from '../../Content/Map';
import FB from '../../Header/img/FB.svg';


class SimpleExpansionPanel extends Component {
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

        return (
            <div>
                <div class="container-fluid" className="Barin"   >
                    <div class="row" >
                        <div class="col-lg-1 " >
                            <a href="/APP"><h5 className="Barin">ย้อนกลับ</h5></a>

                        </div>
                    </div>
                </div>

                <br />

                <div class="container-fluid">
                    <div class="row" >
                        <div class="col-lg-4" >
                            <h5 >หน่วยงานดูเเลผู้สูงอายุ ภายในจังหวัดภูเก็ต</h5>
                            <br />
                        </div>
                    </div>
                </div>


                <div class="container-fluid">
                    <div class="row" >
                        <div class="col-lg-5 col-xs-12 " >
                            <ExpansionPanel className="left" expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography >ศูนย์พัฒนาคุณภาพชีวิตและส่งเสริมอาชีพผู้สูงอายุ ตำบลไม้ขาว</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails >
                                    <Typography>
                                        ที่อยู่: ต.ไม้ขาว อ.ถลาง จ.ภูเก็ต <br />
                                        <img src={FB} alt="FB" height="20" width="20" /> <a href="https://www.facebook.com/pages/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%82%E0%B8%B2%E0%B8%A7/838768079586892">
                                            ศูนย์พัฒนาคุณภาพชีวิตและส่งเสริมอาชีพผู้สูงอายุ ตำบลไม้ขาว
                                    </a>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel className="left" expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>ศูนย์พัฒนาการจัดสวัสดิการสังคมผู้สูงอายุภูเก็ต ป่าคลอก</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        ที่อยู่: 132 ต.ป่าคลอก อ.ถลาง จ.ภูเก็ต 83110<br />
                                        โทร: 076-529699 หรือ 076-529700<br />
                                        <img src={FB} alt="FB" height="20" width="20" /> <a href="https://www.facebook.com/people/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3-%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A1%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%84%E0%B8%99%E0%B8%8A%E0%B8%A3%E0%B8%B2-%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%81/100003943813556">
                                            ศูนย์พัฒนาการจัดสวัสดิการ สังคมผู้สูงอายุภูเก็ต บ้านพักคนชรา ป่าคลอก
                                    </a>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel className="left" expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>สำนักงานพัฒนาสังคม และความมั่นคงของมนุษย์จังหวัดภูเก็ต</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        ที่อยู่: 107/1 ม.3 ซ.สุรินทร์ ต.เชิงทะเล อ.ถลาง <br />
                                        ประเภทองค์กร: กลุ่มสวัสดิการชุมชน - กลุ่มผู้สูงอายุ<br />
                                        โทร: 084-6256007
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel className="left" expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>ศูนย์ณิชา เนอสซิ่งแคร์</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        ที่อยู่: 59/368 ซ.กะทู้ 3 ต.กะทู้ อ.กะทู้ จ.ภูเก็ต  <br />
                                        โทร: 095-4233253
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel className="left" expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')} >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>กลุ่มชมรมผู้สูงอายุ ตำบลกะรน</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        ที่อยู่: ต.กะรน อ.เมืองภูเก็ต จ.ภูเก็ต  <br />
                                        โทร: 086-6917149
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel className="left" expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')} >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>ศูนย์เอนกประสงค์ผู้สูงอายุ เทศบาลตำบลวิชิต</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        ที่อยู่: ต.วิชิต อ.เมืองภูเก็ต จ.ภูเก็ต   <br />
                                        <img src={FB} alt="FB" height="20" width="20" /> <a href="https://www.facebook.com/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8-%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B4%E0%B8%95-1988185711409050/">
                                            ศูนย์เอนกประสงค์ผู้สูงอายุ เทศบาลตำบลวิชิต
                                    </a>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel className="left" expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')} >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>ศูนย์ประสานงานชมรมผู้สูงอายุ จังหวัดภูเก็ต</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        ที่อยู่: ถ.ภูเก็ต ต.ตลาดใหญ่ อ.เมืองภูเก็ต จ.ภูเก็ต  <br />
                                        <img src={FB} alt="FB" height="20" width="20" /> <a href="https://www.facebook.com/pages/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B2%E0%B8%99%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%8A%E0%B8%A1%E0%B8%A3%E0%B8%A1%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95/348213025232164">
                                            ศูนย์ประสานงานชมรมผู้สูงอายุ จังหวัดภูเก็ต
                                    </a>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel className="left" expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')} >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>ภูเก็ตเนอร์สซิ่งแคร์</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        ที่อยู่: อ.ถลาง จ.ภูเก็ต <br />
                                        โทร:  076-604548<br />
                                        <img src={FB} alt="FB" height="20" width="20" /> <a href="https://www.facebook.com/phuketnursingcare">
                                            ภูเก็ตเนอร์สซิ่งแคร์
                                    </a>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                        </div>

                        <div class="col-lg-1 col-xs-12" >

                        </div>

                        <div class="col-lg-6 col-xs-12" >
                            <Map />
                        </div>



                    </div>
                </div>

            </div>
        );
    }
}

export default SimpleExpansionPanel;