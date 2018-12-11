import React, { Component } from 'react';

class TableMemberDataRow extends Component {
    render() {
        return (
            <tr>
              <td>{this.props.sttMB+1}</td>
              <td>{this.props.nameMB}</td>
              <td>{this.props.phoneMB}</td>
              <td>{this.props.projectjoinMB}</td>
              <td>
                <div className="btn-group">
                  <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sửa</div>
                  <div className="btn btn-danger xoa"><i className="fa fa-delete    " />Xóa</div>
                </div>
              </td>
            </tr>
        );
    }
}

export default TableMemberDataRow;