import React, { Component}  from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class Dashboard extends Component  {
    //constructor(props) {
    //    super(props);
    //}

    render() {
        return (
            <div>
                
                <LineChart data={{"2017-05-13": 2, "2017-05-14": 5}} />

            </div>
        );
    }


}
export default Dashboard;