import React from "react";


class UserClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const{ name, email } = this.props;
        return (
            <div className="flex flex-col items-left justify-left p-4 border-spacing-6">
                <h1>User Class Component</h1>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>Count: {this.state.count}</p>
                    <button className="bg-blue-500 text-white p-2 rounded" onClick={() => (this.setState({
                        count: this.state.count + 1
                    }))}>Increment</button>
                </div>
            </div>
        )
    }
}

export default UserClass;