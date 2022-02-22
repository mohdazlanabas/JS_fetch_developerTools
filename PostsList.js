
export class PostsList extends Component {
    state = {
        posts: []
    }


componentDidMount() {
    fetch('https://jsonlaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => posts.slice(0,10))
        .then(posts => this.setState({posts}))
}

render() {
    const posts = this.state.posts
        .map(post => <li>{posts.title}</li>)
        return (
            <div>
                <h2> All posts</h2>
                <ul>
                    {posts}
                </ul>
            </div>
        )   
    }
}