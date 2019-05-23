import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import style from './style/App.css'
var data = require('./movies.json');

class App extends React.Component {
  render() {
    const columns = [
     { name: "id", label: "id", options: {filter: false} },
     { name: "imdb_id", label: "imdb_id", options: {filter: false} },
     { name: "title", label: "title", options: {filter: true} },
     { name: "release_date", label: "release_date", options: {filter: false} },
     { name: "overview", label: "overview", options: {sort: false, filter: false} },
     { name: "vote_average", label: "vote_average",options: {filter: false} },
     { name: "runtime", label: "runtime", options: {filter: false} },
     { name: "budget", label: "budget", options: {sort: true, filter: false} },
     { name: "revenue", label: "revenue",options: {sort: true, filter: false} }
    ];
    const options = { filterType: 'checkbox'};
    
    return (
      <div>
        <div>
          <p id="title">app</p>
          <MUIDataTable
            title={"movies"}
            data={data.movies}
            columns={columns}
            options={options}
          />
        </div>
        <div className={style.footer}>
         <p>
         View on <a href="https://github.com/ridhwaans/boilerstack/tree/master/single-page-react">Github</a>&emsp;
         Made by <a href="https://github.com/ridhwaans">@ridhwaans</a>&emsp;
         Code licensed <a href="https://github.com/ridhwaans/boilerstack/blob/master/single-page-react/LICENSE">GNU GPLv3</a>
         </p> 
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
