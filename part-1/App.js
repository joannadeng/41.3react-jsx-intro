const App = () => {
    return <div>
        <FirstComponent/>
        <NamedComponent name="Will" />
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"))