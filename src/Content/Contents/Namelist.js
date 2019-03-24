import React, { Component } from 'react';
import '../Content.css';
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
            key: '1lTvlri1R_Jjt6_YnhvwnDxYCnNXJHHXaJxEOqETOwi0',
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
            <div >
                <h4  align="center" className="content" > ตารางเเสดงจำนวนประชากรผู้สูงอายุที่ได้รับเบี้ยยังชีพ </h4><br />
                <div >
                    <div align="center" class="container-fluid" >
                        <div class="row" >
                            <div class="col-lg-12 col-sm-12 col-xs-12" >
                                <Table  className="content" >
                                    <TableHead >
                                        <TableRow className = "font"  >
                                            <TableCell align="center"><h6  >จังหวัด</h6></TableCell>
                                            <TableCell><h6 >อำเภอ</h6></TableCell>
                                            <TableCell><h6 >อปท</h6></TableCell>
                                            <TableCell><h6 >60-69 ปี</h6></TableCell>
                                            <TableCell><h6 > 70-79 ปี</h6></TableCell>
                                            <TableCell><h6 > 80-89 ปี</h6></TableCell>
                                            <TableCell><h6 > >=90 ปี</h6></TableCell>
                                            <TableCell><h6 >รวม</h6></TableCell>
                                            <TableCell><h6 >จำนวนเงินทั้งสิ้น</h6></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className = "font">

                                        {data.map(obj => (
                                            <TableRow align="center" key={obj.จังหวัด}>
                                                <TableCell ><p align="center">{obj.จังหวัด}</p></TableCell>
                                                <TableCell ><p align="center">{obj.อำเภอ}</p></TableCell>
                                                <TableCell ><p>{obj.อปท}</p></TableCell>
                                                <TableCell ><p>{obj.อายุ60ถึง69ปี}</p></TableCell>
                                                <TableCell ><p>{obj.อายุ70ถึง79ปี}</p></TableCell>
                                                <TableCell ><p>{obj.อายุ80ถึง89ปี}</p></TableCell>
                                                <TableCell ><p>{obj.อายุมากกว่าหรือเท่ากับ90ปี}</p></TableCell>
                                                <TableCell ><p>{obj.รวม}</p></TableCell>
                                                <TableCell ><p>{obj.จำนวนเงินทั้งสิ้น}</p></TableCell>
                                            </TableRow>
                                            
                                        ))
                                        }
                                    </TableBody>
                                </Table>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Sheets;
