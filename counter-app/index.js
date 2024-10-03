const CounterFunctional = () => {
    const [count, setCount] = React.useState(0); // Mendefinisikan state dengan hook useState

    const tambah = () => {
        setCount(count + 1); // Event handler untuk meningkatkan nilai count
    };

    const kurang = () => {
        setCount(count - 1); // Event handler untuk mengurangi nilai count
    };

    return (
        <div>
            <h1>Counter</h1>
            <h2>Count: 
                <br></br>
                {count}</h2>
            <button onClick={tambah}>+1</button>
            <button onClick={kurang}>-1</button>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <CounterFunctional />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
