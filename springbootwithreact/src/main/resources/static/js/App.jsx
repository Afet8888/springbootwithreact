class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date:new Date()}
    }
    componentDidMount(){
        this.timeId = setInterval(
            () => this.tick(),
            1000
        );
    }
    tick(){
        this.setState( {
            date : new Date()
        });
    }
    componentWillUnmount() {
        clearInterval(this.timeId);
    }
    render() {
        return (
            <div className="test">
                <h1>Hello step!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
