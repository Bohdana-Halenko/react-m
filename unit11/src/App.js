import React, { Component } from 'react';

class Count extends Component{
    state = {
        count: 0,
    }

    componentDidMount() {
        console.log("Компонент був доданий в DOM")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Компонент оновлено. Попередній стан:', prevState, '. Поточний стан: ', this.state)
    }

    componentWillUnmount() {
        console.log("Компонент було видалено з DOM");
    }

    increment = () => {
        this.setState(prev => ({count: prev.count + 1}))
    }

    render() {
        return (
            <div>
                <h2>Життєвий цикл компонента</h2>
                <p>Поточне значення лічильника: { this.state.count }</p>
                <buuton onClick = {this.increment}>+ 1</buuton>
            </div>
        )
    }
}


class App extends Component{
    state = {
        showCount: true,
    }

    toggleCount = () => {
        this.setState(prev => ({showCount: !prev.showCount}))
    }

    render() {
        return (
          <div>
            <h2>Життєвий цикл</h2>
            <button onClick={this.toggleCount}>
              {this.state.showCount ? "Сховати" : "Показати"} компонент
                </button>
                
                {this.state.showCount && <Count />}
          </div>
        );
    }
}

export default App;
