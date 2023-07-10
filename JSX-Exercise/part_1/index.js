function First () {
    return <h1>My very first component</h1>
}

const NamedComponent = (props) => {
    return (       
            <p>My name is {props.name}</p>      
    )
}

const App = () => (
    <div>
        <First/>
        <NamedComponent name="Grant"/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));