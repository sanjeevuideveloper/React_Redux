import _ from "lodash";
import { IsEmpty, Map } from "react-lodash"
function LodashReact(){
	const greeting = _.join(["Hello", "World", "From", "React"], " ");
	 const dailyExpenses = [4, 7, 3, 5, 6, 4, 7];
	 const emptyList=()=>{
	 	return "Empty List"
	 }
	return(
			<div>
				<h1>{greeting}</h1>

				<IsEmpty
      				value={dailyExpenses}
      				yes={emptyList}
      				no={() => (
        						<ul>
          							<Map collection={dailyExpenses} iteratee={i => <li key={i}>{i}</li>} />
        						</ul>
      					)}
    			/>
			</div>
		)
}
export default LodashReact;