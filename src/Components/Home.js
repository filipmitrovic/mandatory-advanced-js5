import React, {Component} from "react";
import {Dropbox} from 'dropbox';
import {Link, Redirect} from "react-router-dom";
import {Helmet} from "react-helmet";

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {filelist:"",entries:[]};
    }
    componentDidMount() {
        const accessToken = localStorage.token;
        console.log(accessToken)
        const dbx = new Dropbox({accessToken, fetch});
        dbx
            .filesListFolder({path: ''})
            .then(response => {
                let data =  JSON.parse(response)
                this.setState({
                    filelist: data,
                    entries:data.entries
                })
                console.log(this.state.filelist)
                console.log(this.state.entries)
            })
    }

    render() {

        console.log(this.state.entries);
        return (
            <div className="main--home">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">FileName</th>
                            <th scope="col">path</th>
                            <th scope="col">size</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.state.entries.map(x => 
                         <tr>
                             <th scope="row">1</th>
                             <td>{x.name}</td>
                             <td>{x.path_display}</td>
                             <td>{x.size}</td>
                         </tr>)}
                       
                    </tbody>
                </table>
            </div>
        )
    }
}

export default home
