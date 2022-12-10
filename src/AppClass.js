import React, { Component } from "react";

class App extends Component {
    state = {
        todoData: [
            { id: "1", title: "이닦기", checked: false },
            { id: "2", title: "이불개기", checked: false },
        ],
        value: "",
        num: 3,
    };
    btnStyle = {
        color: "#fff",
        border: "none",
        cursor: "pointer",
    };

    getStyle = (checked) => {
        return {
            borderBottom: "1px solid",
            color: "black",
            textDecoration: checked ? "line-through" : "none",
        };
    };
    checkHandler = (id) => {
        console.log(id)
          let newTodoData = this.state.todoData.map((v) =>{
            if(v.id === id) {
           v.checked = !v.checked
            }
            return v
          });
         this.setState({todoData: newTodoData})
      };
    handleClick = (id) => {
        let newTodoData = this.state.todoData.filter((v) => v.id !== id);
        this.setState({ todoData: newTodoData });
    };
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ value: e.target.value });
    };

    onSubmit = (e) => {
        let dummyData = {
            id: (this.state.num++).toString(),
            title: this.state.value,
            checked: false,
        };
        // 직접 state를 바꾸는 행위?
        // let newData = this.state.todoData.concat(dummyData);
        // this.setState({ todoData: newData });
        this.setState({
            todoData: [...this.state.todoData, dummyData],
            value: "",
        });

        e.preventDefault();
    };
  
    render() {
        return (
            <div className='container'>
                <div className='totoBlock'>
                    <div className='title'>
                        <h1>할 일 목록</h1>
                    </div>
                    {this.state.todoData &&
                        this.state.todoData.map((v, i) => (
                            <div style={this.getStyle(v.checked)} key={i}>
                                <input
                                    type='checkbox'
                                    defaultChecked={false}
                                    onClick={()=>this.checkHandler(v.id)}
                                />
                                {v.title}
                                <button
                                    style={this.btnStyle}
                                    onClick={() => this.handleClick(v.id)}>
                                    x
                                </button>
                            </div>
                        ))}
                    <form onSubmit={this.onSubmit}>
                        <input
                            type='text'
                            placeholder='할 일 입력 ㄱ'
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <button type='submit'>입력</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
