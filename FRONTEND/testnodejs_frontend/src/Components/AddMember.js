import React, { Component } from 'react';

class AddMember extends Component {


constructor(props) {
    super(props);
    this.state={
        statusedit:false
    }
}

changeStatus=()=>{
    this.setState({
        statusedit:!this.state.statusedit
    });
}

showbtn=()=>{
    if(this.state.statusedit===true){
            return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.changeStatus()}>Đóng lại</div>;
    }
    else {
        return <div className="btn btn-block btn-outline-info"  onClick={()=>this.changeStatus()}>Thêm mới Member</div>;
    }
}

showForm=()=>{
    if(this.state.statusedit===true){
        return (
<div className="card border-dark mb-3 mt-2">
            <div className="card-header">Thêm mới Member</div>
            <div className="card-body text-dark">
              <div className="form-group">
                <input type="text" className="form-control"  placeholder="Tên Member" />
                <input type="text" className="form-control"  placeholder="Số điện thoại" />
              </div>
              <div className="form-group">
                <select className="custom-select" required>
                  <option value>Không có Project</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div className="form-group">
                <div className="btn btn-block btn-primary">Thêm mới</div>
              </div>
            </div>
          </div>
        );
}

}


    render() {
        return (
            <div className="col-3">
        <div>
        {/* Hiện nút */}
            {this.showbtn()}
            {/* Hiển thị Form */}
            {this.showForm()}
        </div>
      </div>
        );
    }
}

export default AddMember;