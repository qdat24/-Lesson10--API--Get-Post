import './App.css';
import DqdCategoryList from './componets/DqdCategoryList.js';
import { useEffect, useState } from 'react';
import axios from './api/DqdApi.js';
import DqdCategoryFrom from './componets/DqdCategoryForm.js';

function App() {
  const [DqdCategories, setDqdCategories] = useState([]);
  
  const getCategories = async () => {
    try {
      const DqdResponse = await axios.get("DqdCategory");
      setDqdCategories(DqdResponse.data);  
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const [DqdCategoryIsFrom, setDqdCategoryIsFrom] = useState(false);

  const DqdHandleAddNew = (param) => {
    setDqdCategoryIsFrom(param);

  }

  const DqdHandleCategoryCloseForm = (param) => {
    setDqdCategoryIsFrom(param);
  }

  const DqdHandleCategorySubmit = (param) => {
    let id = DqdCategories[DqdCategories.length - 1].DqdId;
    console.log("ma: ", id);
    param.DqdId = id + 1;
    DqdCategories.push(param);
    setDqdCategories((prev) => {
      return [...prev];
    })
    setDqdCategoryIsFrom(false);
  }

  return (
    <div className="container border my-3">
      <h1>Trương Đình Tuyển Call API</h1>
      <DqdCategoryList renderDqdCateGories={DqdCategories} onAddNew={DqdHandleAddNew} />
      <hr />
      {
        DqdCategoryIsFrom === true ? <DqdCategoryFrom onCloseForm={DqdHandleCategoryCloseForm} onCategorySubmit={DqdHandleCategorySubmit} /> : ""
      }
      
    </div>
  );
}

export default App;