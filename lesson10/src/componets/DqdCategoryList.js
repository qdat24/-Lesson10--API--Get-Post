import React from 'react'

export default function dqdCategoryList({ renderdqdCateGories, onAddNew }) {
    console.log("renderdqdCategories: ", renderdqdCateGories);
    let dqdCategoryElement = renderdqdCateGories.map((dqdCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{dqdCategory.dqdId}</td>
                <td>{dqdCategory.dqdCategoryName}</td>
                <td>{dqdCategory.dqdCategoryStatus ? "Hien thi" : "Tam khoa"}</td>
            </tr>
        )
    })

    const dqdHandleAdd = ()=>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sach loai san pham</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ma loai</th>
                        <th>Ten loai</th>
                        <th>Trang thai</th>
                        <th>Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {dqdCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={dqdHandleAdd}>Them moi</button>
        </div>
    )
}