import React from 'react'


export default class ScheduleTable extends React.Component {
    
    render() {
        console.log(this.props.employees)
        return(
            <div className="schedule-container">
                <table className="schedule-weekly-table">
                    <tr className="weekly-time">
                        <td></td>
                        <th>9:00AM</th>

                        <th>10:00AM</th>

                        <th>11:00AM</th>

                        <th>12:00PM</th>

                        <th>1:00PM</th>

                        <th>2:00PM</th>

                        <th>3:00PM</th>

                        <th>4:00PM</th>

                        <th>5:00PM</th>

                        <th>6:00PM</th>

                        <th>7:00PM</th>

                        <th>8:00PM</th>

                        <th>9:00PM</th>

                        <th>10:00PM</th>
                    </tr>
                        <tr className="test">
                            <th className='day' rowspan="4">Monday</th>
                            <td colspan="14">hi</td>
                        </tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>
                            
                        <tr className="test">
                            <th className='day' rowspan="4">Tuesday</th>
                            <td colspan="14">hi</td>
                        </tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>

                        
                        <tr className="test">
                            <th className='day' rowspan="4">Wednesday</th>
                            <td colspan="14">hi</td>
                        </tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>

                        
                        <tr className="test">
                            <th className='day' rowspan="4">Thursday</th>
                            <td colspan="14">hi</td>
                        </tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>


                        <tr className="test">
                            <th className='day' rowspan="4">Friday</th>
                            <td colspan="14">hi</td>
                        </tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>


                        <tr className="test">
                            <th className='day' rowspan="4">Saturday</th>
                            <td colspan="14">hi</td>
                        </tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>


                        <tr className="test">
                            <th className='day' rowspan="4">Sunday</th>
                            <td colspan="14">hi</td>
                        </tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>
                        <tr><td colspan="14">hi</td></tr>

                </table>
                
            </div>
        )
    }
}