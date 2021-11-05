import React, { Component } from "react";

class Repos extends Component{
    constructor(props){
        super(props);
        this.state = { repos: [] };

        const FetchRepos = async (user) => {
            const API_Call = await fetch(`https://api.github.com/users/${user}/repos`)
            const data = await API_Call.json();
            return { data }
        }

        FetchRepos(props.user).then((res) => {
            if(res.data.length > 0 & !res.data.message) {
                let items = [];
                for(let i = 0; i < 5; i++) {
                    if(i===4) {
                        this.setState({ repos: items })
                    }
                }
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                                <div>
                                <div>
                                    <h3>here Last 5 repo</h3>
                                    <div className="lastfiveRepo">
                                        {this.state.repos.map( res => (
                                            <div key={res.id}>
                                                <a key={res.id} href={res.html_url}>
                                                    {res.name}
                                                </a>
                                            </div>
                                        ))}

                                    </div>
                                    </div>

                                </div>
            </React.Fragment>
        );
    }
}
export default Repos;