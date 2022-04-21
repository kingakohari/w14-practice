import React, { Component } from 'react'

class ButtonWithClass extends Component {
  constructor(){
      super()
      this.state = {
          key1: "This is the default state of a class component.",
          key2: 0,
          title: {
            main: "main title",
            sub: "subtitle"
          },
          countries: []
      }
  }
  

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countriesData => this.setState(
      () => {
        return {countries: countriesData}
      },
      () => console.log(this.state)
      ))
    }
    

/*  ButtonOnClick = () => {
    this.setState({
        key1: "This is the NEW state of a class component."
    });
    } */ 

  render() {
    return (
    <>
      <div>{this.state.key1}</div>

      <div>{this.state.key2}</div>

      {/* <button onClick={this.ButtonOnClick}>Click me</button> */}

      <button onClick={() => this.setState({key1: "This is the NEW state of a class component."})}>Click me</button>

      <button onClick={() => this.setState({key2: 1})}>Click me</button> 

{/*   <button onClick={() => this.state.key2 = 1}>{this.state.key2}</button> 
      Itt nem lett új érték a state-hez hozzárendelve -> React nem rendereli újra */}
      
      {/* <button onClick={() => {
         setState: aszinkron művelet 
        
        this.setState({title: {
        main: "h1",
        sub: "string"
      }
    })
    console.log(this.state);
  }}>{this.state.title.main}</button>  */}

    <button onClick={() => {
            
            
            this.setState(
              () => {
                return {
                  title: {
                    main: "h1",
                    sub: "string"
                  }
                }
            },
            () => {
        console.log(this.state);
        }
      )
    }}>{this.state.title.main}</button> 

    <div className="countries'">
      {this.state.countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
    </div>
    </>
    
    )
  }
}

export default ButtonWithClass