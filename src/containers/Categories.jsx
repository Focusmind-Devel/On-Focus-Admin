import React from 'react';

import SideBar from '../components/Utils/SideBar';
import Button from '../components/Utils/Button'
import Search from '../components/Utils/Search'
import Table from '../components/Utils/Tables/TableCategories'


import '../assets/styles/components/CourseAdmin.scss';

const Categories = (props) => {

  return(
    <div className="App flex">
        <SideBar/>
        <div>
            <div className="course__admin flex">
                <h1>Categorías</h1>
                <Button text={'Añadir nuevo'} position={"btn__primary--course__admin"}/>
                <Search/>
            </div>
                <div className="course__admin__categories flex">
                    <p>Todos</p>
                    <p>Categorias</p>
                </div>
                <Table/> 

                
        </div>
    </div>
  );
}

export default Categories;