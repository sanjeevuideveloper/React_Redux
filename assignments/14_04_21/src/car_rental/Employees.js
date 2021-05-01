import {useState, useEffect} from "react";
import  axios from 'axios';

import styled from 'styled-components'
import { useTable } from 'react-table'
function Employees(){
	const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 2px solid blue;
    margin:auto;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
	
	const [employees, setEmployees]=useState([]);
	const [columns, setColumns]=useState([{
        Header: 'Employees',columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Location',
            accessor: 'loc',
          },
        ]}]);
	useEffect(()=>{
		axios.get('/employees.json').then(function(res){
			console.log(res);
			let temp=[];
			res.data.forEach(item=>{
				temp.push(item);
			})
			setEmployees(temp);
			
		}).catch(err=>{
			console.log('some error came');
			console.log(err.toString());
		}).finally(()=>{
			console.log("job done");
			
		})
		
		
	},[])
	
	const {
    	getTableProps,
    	getTableBodyProps,
    	headerGroups,
    	rows,
    	prepareRow,
  		} = useTable({
    	columns,
    	data:employees
  		})
      console.log(employees)
	return(
		<Styles>
		<div>
		<table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
		</div>
		</Styles>
		)
}

export default Employees;