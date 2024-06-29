const App = () => {
    return <div>
        <Tweet username="Duang-Duang" name="Lulu" date="09/09/2023" message="I like learning react"/>
        <Tweet username="Hello Kitty" name="Lisa" date="04/01/2024" message="I like Hello Kitty"/>
        <Tweet username="Watermelon" name="Kim" date="11/09/2023" message="I like watermelon"/>
    </div>
}

ReactDOM.render(<App/>, document.getElementById("root"))