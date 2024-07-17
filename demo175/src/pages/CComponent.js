import axios from 'axios';
import React, { Component } from 'react'

export default class CComponent extends Component {
    constructor(){
        super();
        this.state={
            list: [],
            inpName:''
        }
    }
    getAll(){
        axios.get('https://restcountries.com/v3.1/all?fields=name,area,population,flags').then((res)=>{
            this.setState({
                list:res.data
            });
        });
    }
    componentDidMount(){
        this.getAll();
    }
    changeInp(e){
        this.setState({
            inpName: e.target.value
        });
    }
  render() {
    return (
        <>
            <div id='main_content'>
                <div className='col country_list'>
                    <h1>Country list:</h1>
                    {
                        this.state.list.map((country, key)=>(
                            <p className='country_row' key={key}><img src={country.flags.png} alt={country.name.common}/>Name: {country.name.common}, Area: {country.area}, Population: {country.population}</p>
                        ))
                    }
                </div>
                <div className='col search'>
                    <input type="" name=""  placeholder='Search...' onChange={(e)=> {this.changeInp(e)}} />
                </div>
            </div>
            
        </>
    )
  }
}