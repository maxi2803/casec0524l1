import React, { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { id: 1, name: "A", price: 20 },
                { id: 2, name: "AB", price: 30 },
                { id: 3, name: "C", price: 25 },
                { id: 4, name: "D", price: 31 },
            ],
            inpId: "",
            inpName: "",
            inpPrice: "",
            inpSearch: '',
            listSerach: [],
            listSort: [],
            isUp: 'Up'
        };
    }
    changeInp = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    add = () => {
        this.state.list.push({
            id: this.state.inpId,
            name: this.state.inpName,
            price: this.state.inpPrice,
        })
        this.setState({
            list: this.state.list,
            inpId: '',
            inpName: '',
            inpPrice: '',
        })
    }
    search = () => {
        let rs = this.state.list.filter(e => e.name.includes(this.state.inpSearch));
        this.setState({ listSerach: rs })
    }
    up = () => {
        let rs = [...this.state.list];
        if (this.state.isUp  === 'Up') {
            rs.sort((a, b) => a.price - b.price);
            this.setState({ listSort: rs, isUp: 'Down' })
        } else {
            rs.sort((a, b) => b.price - a.price);
            this.setState({ listSort: rs, isUp: 'Up' })
        }
    }
    render() {
        return (
            <>
                <h1>Hello Product</h1>
                {this.state.list.map(e => (
                    <h2>{e.id}, {e.name}, {e.price}</h2>
                ))}
                <hr />
                <input type="text" name="inpId" onChange={this.changeInp} value={this.state.inpId} />
                <input type="text" name="inpName" onChange={this.changeInp} value={this.state.inpName} />
                <input type="text" name="inpPrice" onChange={this.changeInp} value={this.state.inpPrice} />
                <button onClick={() => { this.add(); }}>Add</button>
                <hr />
                <input type="text" name="inpSearch" onChange={this.changeInp} value={this.state.inpSearch} />
                <button onClick={() => { this.search(); }}>Search</button>
                {this.state.listSerach.map(e => (
                    <h2>{e.id}, {e.name}, {e.price}</h2>
                ))}
                <hr />
                <button onClick={() => { this.up(); }}>{this.state.isUp}</button>
                {this.state.listSort.map(e => (
                    <h2>{e.id}, {e.name}, {e.price}</h2>
                ))}
            </>
        )
    }
}
export default Product;