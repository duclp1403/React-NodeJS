import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state={
      tempValue:''
    }
  }
  
  isChange=(event)=>{
    console.log(event.target.value);
    this.setState({
      tempValue:event.target.value
    });
    this.props.checkConnectProps(this.state.tempValue);
  }
  //this.props.checkConnectProps
    render() {
        return (
            <div className="col-12">
        <div className="form-group">
          <div className="btn-group">
            <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} placeholder="Nhập tên Member" />
            <div className="btn btn-info" onClick={(dtsm)=>this.props.checkConnectProps(this.state.tempValue)}>Tìm Member</div>
          </div>
        </div>
        <hr/>
      </div>
        );
    }
}

export default Search;