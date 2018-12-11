import React, { Component } from 'react';
import TableMemberDataRow from './TableMemberDataRow';

class TableDataMember extends Component {
  
  mappingDataMember = () => this.props.dataMemberProps.map((value,key)=>(
    <TableMemberDataRow nameMB={value.name} key={key} sttMB={key} phoneMB={value.phone} projectjoinMB={value.projectjoin}/>
  ))
  
  
    render() {
      // console.log(this.props.dataMemberProps);
        return (
            <div className="col-9">
        <p className="h1">Bảng Member</p>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Tên Project Tham gia</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.mappingDataMember()}
          </tbody>
        </table>
      </div>
        );
    }
}

export default TableDataMember;