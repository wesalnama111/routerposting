import React, { Component } from 'react';
import './Blog.css';
//import axios from '../../axios';
import Posts from './Posts/Posts';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                             to="/posts/" 
                            exact
                              activeClassName="my-active"
                             activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                             }}>
                            Posts</NavLink></li>
                            <li>
                                <NavLink to={{                            
                                //pathname: this.props.match.url+ '/new-post',
                                pathname: '/new-post',
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }} exact>New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
            {/* <Route path="/" exact render={()=>
            
            <h1>Home</h1>}/>

            <Route path="/"  render={()=>
            
            <h1>Home taken2 </h1>}/> */}
               
            <Switch>
                 <Route path="/new-post"  component={NewPost}/>
           
                 <Route path="/posts/"  component={Posts}/>
                 <Redirect from ="/" to="/posts" />
                 {/* <Route path="/"  component={Posts}/> */}
            
            </Switch>
            </div>
        );
    }
}
export default Blog;