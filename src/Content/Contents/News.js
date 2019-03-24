import React, {Component} from 'react'
import '../../Header/Header.css'
import Sheets from '../Contents/Sheets'



class News extends Component {
    render()
    {
        return(
            <div>
                 <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-1" className="Barin">
                            <a href="/APP"><h5 className="Barin">ย้อนกลับ</h5></a>

                        </div>
                    </div>
                </div>

                <br/>

                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-12 col-xs-12">
                            <Sheets/>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default News