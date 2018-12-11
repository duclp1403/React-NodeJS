import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableDataMember from './TableDataMember';
import AddMember from './AddMember';
import DataMember from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    

    this.state={
      dataMember:DataMember,
      searchTextMember:''
    }
  }
  getTextSearchMember=(dtsm)=>{
    this.setState({
      searchTextMember:dtsm
    });
  }
  
  render() {
    // console.log(this.state.dataMember);
    var result=[];
    this.state.dataMember.forEach((itemMB)=>{
        if(itemMB.name.indexOf(this.state.searchTextMember)!==-1){
          result.push(itemMB);
        }
    })
    console.log(result);
    



    return (
      <div>
       <Header/>
       <div className="searchForm">
          <div className="container">
              <div className="row">
                  <Search checkConnectProps={(dtsm)=>this.getTextSearchMember(dtsm)}/>
                  <TableDataMember dataMemberProps={result}/>
                  <AddMember/>
              </div>
          </div>
       </div>
      </div>
    );
  }
}

export default App;
