import {useState} from 'react';
function UnderstandingState(){
	console.log('Function UnderstandingState Running');
	const [no, setNo]=useState(0);
	const [students,setStudents]=useState(['sanjeev', 'anil']);
	const increase=()=>{
		setNo(no+1);
	}
	const addStudent=(event)=>{
		event.preventDefault();
		const studentName=event.target.studentName.value;
		const newStudentsArray=students.concat(studentName);
		setStudents(newStudentsArray);
	}
	const removeStudent=(indexToDelete)=>{
      let newArr=students.filter((val, index)=>{	
 			if(index ==indexToDelete)
 				return false;
 		return true;	
      });
      setStudents(newArr)
	}

	return(
		<div>
			The no is {no}<br/>
			<button onClick={increase}>
			Increase
			</button>
			<div>{students[0]}</div>
			<div>{students[1]}</div>
			{
				students.map(function(value, index){
                   return <div>{value} <button onClick={()=>removeStudent(index)}>deleteStudent</button></div>
				})
			}
			<form onSubmit={addStudent}>
				<input type="text" name="studentName"/>
				<button>Add Student</button>
			</form>
		</div>
		)
}

export default UnderstandingState;