import React, { useState } from 'react';
import axios from '../api/DqdApi';

export default function dqdCategoryFrom({ onCloseForm, onCategorySubmit }) {
    const [dqdCategoryName, setdqdCategoryName] = useState("");
    const [dqdCategoryStatus, setdqdCategoryStatus] = useState(true);

    const dqdHandleClose = () => {
        onCloseForm(false);
    }

    const dqdHandleSubmit = async (event) => {
        event.preventDefault();
        let dqdCategory = {
            dqdId: 0,
            dqdCategoryName: dqdCategoryName,
            dqdCategoryStatus: dqdCategoryStatus
        };
        console.log("dqdCategory", dqdCategory);
        await axios.post("dqdCategory", dqdCategory);
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name='dqdCategoryName'
                        value={dqdCategoryName}
                        onChange={(ev) => setdqdCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status</span>
                    <select
                        name='dqdCategoryStatus'
                        value={dqdCategoryStatus}
                        onChange={(ev) => setdqdCategoryStatus(ev.target.value === 'true')}
                        className='form-select'
                    >
                        <option value={true}>Hiển Thị</option>
                        <option value={false}>Tạm Khoa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={dqdHandleSubmit}>Thêm mới</button>
                <button className='btn btn-danger' onClick={dqdHandleClose}>Đóng</button>
            </form>
        </div>
    );
}