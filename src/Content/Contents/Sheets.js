import React, { Component } from 'react';
import '../Content.css'
import Tabletop from 'tabletop';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class Sheets extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1mPsLDG_yN00jPw7srBREF-sXf5WYSxxoaJV0_6CI31Q',
            callback: googleData => {
                this.setState({
                    data: googleData
                })

            },
            simpleSheet: true
        })
    }

    render() {
        const { data } = this.state
        return (
            <div  >
                <h4 align="center"> ตารางเเสดงจำนวนประชากรผู้สูงอายุ 14 จังหวัดภาคใต้ </h4><br />

                <div class="container-fluid" >
                    <div class="row" >

                        <div class="col-lg-1 col-xs-12" >
                        </div>

                        <div class="col-lg-10 col-xs-12" >
                            <Table >
                                <TableHead>
                                    <TableRow className = "font">
                                        <TableCell><h6  align="center" ><img src='https://image.flaticon.com/icons/svg/1482/1482511.svg' alt="จังหวัด" width='30px' /> จังหวัด</h6></TableCell>
                                        <TableCell><h6 align="center"><img src='https://image.flaticon.com/icons/svg/1320/1320735.svg' alt="เพศชาย" width='30px' /> เพศชาย (คน)</h6></TableCell>
                                        <TableCell><h6 align="center"><img src='https://image.flaticon.com/icons/svg/921/921076.svg' alt="เพศหญิง" width='30px' /> เพศหญิง (คน)</h6></TableCell>
                                        <TableCell><h6 align="center"><img src='https://image.flaticon.com/icons/svg/646/646342.svg' alt="รวม" width='30px' /> รวม</h6></TableCell>
                                        <TableCell><h6 align="center"><img src='https://image.flaticon.com/icons/svg/291/291224.svg' alt="ร้อยละ" width='30px' /> ร้อยละ</h6></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {data.map(obj => (
                                        <TableRow key={obj.ลำดับที่} className = "font">
                                            <TableCell align="center" ><p>{obj.จังหวัด}</p></TableCell>
                                            <TableCell align="center"><p>{obj.ชาย60ปีขึ้นไป}</p></TableCell>
                                            <TableCell align="center"><p>{obj.หญิง60ปีขึ้นไป}</p></TableCell>
                                            <TableCell align="center"><p>{obj.รวม}</p></TableCell>
                                            <TableCell align="center"><p>{obj.ร้อยละ}</p></TableCell>
                                        </TableRow>
                                    ))
                                    }
                                </TableBody>
                            </Table>

                        </div>

                        <div class="col-lg-1 col-xs-12" >
                        </div>



                    </div>
                </div>

            </div>

        );
    }
}
export default Sheets;
