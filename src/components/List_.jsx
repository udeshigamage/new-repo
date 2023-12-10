import React from 'react';
import Services from './Services';
import './List.css';

export default function List_() {
  const[data,setData]=React.useState([]);
  const[dataTable,setDataTable]=React.useState([]);

  React.useEffect(()=>{
    fetchdata();


  },[]);

  function fetchdata(){
    Services.getUsers().then((response)=>{
      console.log(response.data);
      setData(response.data);
      setDataTable(response.data);

    }).catch((error)=>{
      console.error(error);

    });
  }

  function search(search_val){
    let search_Result=data.filter((d)=>d.name.toLowerCase().includes(search_val.toLowerCase()));
    setDataTable(search_Result);
  }
  return (
    <div>
      <div className='wrap'>
      <div className='search_' id='search_'>
        

        <input type='text' id='search_bar' placeholder='Type Name Here' onChange={(e)=>search(e.target.value)}/>
        
        

      </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Company Name</th>
          
            </tr>
          </thead>
          <tbody>
            {
              dataTable.map((element)=>
              <tr>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.username}</td>
                <td>{element.email}</td>
                <td>{element.phone}</td>
                <td>{element.company.name}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
