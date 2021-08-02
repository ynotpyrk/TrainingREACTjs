import React from 'react';

class HelloWorld extends React.Component {
    render() {
        let isAnonymous = false;
        const items = ['rice', 'chicken', 'cookies']

        return(
            <div>
            <h1> Hellow Wold! </h1>
            <p>welcome to React!</p>
            {/* <p>Hi my name is {myName}</p> */}
            {/* <p>{isAnonymous ?'Anonymous': myName}</p> */}
            <ul>
                {items.map(item=>{
                    return<li>{item}</li>
                })}

            </ul>
            <p>{this.props.name}</p>
            </div>
        );
    }
}

export default HelloWorld;