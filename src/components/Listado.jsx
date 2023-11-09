import React, { useEffect, useState } from "react"


function Listado() {      
    const [list,setList] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    async function fetchData(){
    fetch('https://espaciosucm-apitest.onrender.com/api/v2/espaciosdeportivos/')
      .then(response => response.json())
      .then(json => setList(json))
    }

  return(
<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 relative overflow-x-auto  bg-[url(/src/assets/campus1.png)]">
    <table class="min-w-full text-sm text-left ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    UserID
                </th>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Estado
                </th>
            </tr>
            {
                list.map(item =>(
                <tr key={item.id} class="bg-white dark:bg-gray-800">
                    <td class="px-6 py-4 dark:text-white border-b font-medium dark:border-neutral-500">{item.userId}</td>
                    <td class="px-6 py-4 dark:text-white border-b font-medium dark:border-neutral-500">{item.id}</td>
                    <td class="px-6 py-4 dark:text-white border-b font-medium dark:border-neutral-500">{item.title}</td>
                    <td class="px-6 py-4 dark:text-white border-b font-medium dark:border-neutral-500">{JSON.stringify(item.completed)}</td>
                </tr>
                ))
            }
            </table>
    </div>
  )
}
export default Listado