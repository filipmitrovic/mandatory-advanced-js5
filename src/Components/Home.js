import React, {Component} from "react";
import {Dropbox} from 'dropbox';
import {Link, Redirect} from "react-router-dom";
import {Helmet} from "react-helmet";

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filelist: "",
            entries: [],
            mainpath:{path: ''}
        };
        this.download = this
            .download
            .bind(this)

    }
    componentDidMount() {
        console.log(this.state.mainpath)
        const accessToken = localStorage.token;
        console.log(accessToken)
        const dbx = new Dropbox({accessToken, fetch});
        dbx
            .filesListFolder(this.state.mainpath)
            .then(response => {
                let data = JSON.parse(response)
                this.setState({filelist: data, entries: data.entries})
                console.log(this.state.filelist)
                console.log(this.state.entries)
            })
    }
    download(path) { //this function created bu Filip edited by Hesham
        console.log(path)
        let ACCESS_TOKEN = localStorage.token;
        let dbx = new Dropbox({accessToken: ACCESS_TOKEN});

        dbx
            .filesGetTemporaryLink({path: path})
            .then((response) => {
                console.log(response)
                let data = JSON.parse(response)
                window.location.href = data.link
            })
            .catch((err) => {
                console.log(err);
            })

    }
    render() {
        let pointerstyle = {
            cursor: "pointer"
        }
        console.log(this.state.entries);
        return (
            <div className="main--home">
                <div className="path-container">
                <h2>/home{this.state.mainpath.path}</h2>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Fav</th>
                            <th scope="col">FileName</th>
                            <th scope="col">path</th>
                            <th scope="col">size</th>
                            <th scope="col">Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this
                            .state
                            .entries
                            .map(x => <tr>
                                <th scope="row">
                                    <i style={pointerstyle} className="far fa-star"></i>
                                </th>
                                <td>{x.name}</td>
                                <td>{x.path_display}</td>
                                <td>{x.size}</td>
                                <td>
                                    <i style={pointerstyle} onClick={()=>{this.download(x.path_display)}} class="fas fa-cloud-download-alt"></i>
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default home
