import { render } from '@testing-library/react';
import React from 'react';

class DataBindingActivity extends React.Component{
    state = {
        Fname: 'John',
        Lname: 'Wick'
    }
    render(){
        return(
            <div>
                First Name: <input
                    type="text"
                    value={this.state.Fname}
                    onchange={(e) => this.setState({ Fname: e.target.value })}
                /> <br />
                Last Name: <input
                    type="text"
                    value={this.state.Lname}
                    onchange={(e) => this.setState({ Lname: e.target.value })}
                /><br />
                <button >Reset</button><br />
                <h1>Welcome, {this.state.Fname} {this.state.Lname}!</h1>
            </div>
        )
    }
}

export default DataBindingActivity;