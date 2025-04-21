import React,{Component} from "react";

class Two extends Component{
    state={
        count:0,
        var1:12,
        var2:'hellooo',
        var3:[10,20,30]
    }

    increment =()=>{
        this.setState({
            count: this.state.count + 1
        })

    };

    decrement=()=>{
        this.setState({
            count: this.state.count - 1
        })

    };


    render(){
        return(
            <div>
                <h1>Counter value: {this.state.count}</h1>
                <h2>{this.state.var1}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }

}

export default Two