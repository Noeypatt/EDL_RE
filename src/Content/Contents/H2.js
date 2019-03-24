import React, { Component } from 'react';
import '../Content.css';
import Tabletop from 'tabletop';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class H2 extends Component {
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
            <div className = "font" >
                <div >
                    <div align="center" class="container-fluid" >
                        <div class="row" >
                            <div class="col-lg-9 col-sm-12 col-xs-12" >
                                <Table  className="content" >
                                    <TableHead className = "font" >
                                        <TableRow  >
                                            <TableCell align="center"><h6 >จังหวัด</h6></TableCell>
                                            <TableCell><h6 >อำเภอ</h6></TableCell>
                                            <TableCell><h6 >อปท</h6></TableCell>
                                            <TableCell><h6 >ผู้พิการ</h6></TableCell>
                                            <TableCell><h6 >ผู้ที่ไม่สามารถใช้ชีวิตประจำวันเองได้</h6></TableCell>
                                            <TableCell><h6 > ชาย</h6></TableCell>
                                            <TableCell><h6 > หญิง</h6></TableCell>
                                           
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className = "font">

                                        {data.map(obj => (
                                            <TableRow key={obj.ลำดับที่ }>
                                                <TableCell align="center"><p>{obj.จังหวัด}</p></TableCell>
                                                <TableCell ><p>{obj.อำเภอ}</p></TableCell>
                                                <TableCell ><p>{obj.อปท}</p></TableCell>
                                                <TableCell ><p>{obj.ผู้พิการ}</p></TableCell>
                                                <TableCell  align="center"><p>{obj.ไม่สามารถใช้ชีวิตประจำวันเองได้}</p></TableCell>
                                                <TableCell ><p>{obj.ชาย}</p></TableCell>
                                                <TableCell ><p>{obj.หญิง}</p></TableCell>                                   
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
export default H2
