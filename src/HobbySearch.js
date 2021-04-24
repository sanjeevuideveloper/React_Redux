import {useState} from 'react';
function HobbySearch(){
	let defaultData=[
	{
	"name":"Jatin",
	"location":"Chennai",
	"hobbies":["reading","Writing"],
	"personInfo":{
		"age":22,
		"bankacc":123112,
		"pan":"asfas12"

		}

	  },
	  {
	"name":"Kashyap",
	"location":"Chennai",
	"hobbies":["reading","Writing","Cricket"],
	"personInfo":{
		"age":23,
		"bankacc":12311231,
		"pan":"asfas12as"

		}

	  },
	  {
	"name":"Pooja",
	"location":"Pune",
	"hobbies":["Movies","Writing","Music"],
	"personInfo":{
		"age":22,
		"bankacc":123112,
		"pan":"asfas12"

		}

	  }
	];
	let [user, setUser]  =useState(defaultData);
	let [searchResult, setSearchResult]=useState([]);
	const search=(e)=>{
		e.preventDefault();
		setSearchResult([]);
		let searchText=e.target.searchText.value;
		let searchData=[];
		console.log(searchText);
		user.forEach((val)=>{
			if(val.hobbies.includes(searchText)){
				searchData.push(val.name)
			}
		})
		console.log(searchData);
		setSearchResult(searchData);
	}
	return(
		<div>
			<h1>Hobby search</h1>
				<form onSubmit={search}>
					<input type="text" name="searchText"/>
					<button>search</button>
				</form>
				{
					searchResult.map((val)=>{
						return<div>{val}</div>
					})
				}
			
		</div>
		);
}
export default HobbySearch;