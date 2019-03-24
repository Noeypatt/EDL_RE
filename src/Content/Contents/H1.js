import React, { Component } from 'react';
import '../Content.css';
import Tabletop from 'tabletop';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import '../Content.css'


class H1 extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1EMLOUvKUe8BQwcsrgy_61kHv4JqWIYECWp1bfG9AXJA',
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
                    <div class="container-fluid" >
                        <div class="row" >
                            <div class="col-lg-6 col-sm-12 col-xs-12" >
                                <Table className="content" >
                                    <TableHead className = "font">
                                        <TableRow align="center">
                                            <TableCell><h6>อันดับที่</h6></TableCell>
                                            <TableCell><h6>โรค</h6></TableCell>
                                            <TableCell><h6>เพศชาย</h6></TableCell>
                                            <TableCell><h6>เพศหญิง</h6></TableCell>
                                            <TableCell><h6>รวม</h6></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className = "font">

                                        {data.map(obj => (
                                            <TableRow key={obj.อันดับที่}>
                                                <TableCell align="center"><p>{obj.อันดับที่}</p></TableCell>
                                                <TableCell align="left"><p>{obj.โรค}</p></TableCell>
                                                <TableCell align="left"><p>{obj.เพศชาย}</p></TableCell>
                                                <TableCell align="left"><p>{obj.เพศหญิง}</p></TableCell>
                                                <TableCell align="left"><p>{obj.รวม}</p></TableCell>
                                            </TableRow>
                                        ))
                                        }
                                    </TableBody>
                                </Table>

                            </div>

                            <div class="col-lg-4 col-sm-12 col-xs-12" >

                            </div>

                            <div class="col-lg-4 col-sm-12 col-xs-12" >

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default H1