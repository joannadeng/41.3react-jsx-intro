const App = () => {
    return <div>
        <Person age="18" name="William" hobbies={["hiking","swimming","gaming"]}/>
        <Person age="12" name="Alexander" hobbies={["writing","drawing","running"]}/>
        <Person age="31" name="Archibald" hobbies={["coding","cooking","swimming"]}/>
    </div>
}

ReactDOM.render(<App/>,document.getElementById("root"))