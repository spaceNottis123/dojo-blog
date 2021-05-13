import useFetch from '../useFetch';
import BlogList from './BlogList'

const Home = () => { 

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs') //fetching data using a custom hook = useFetch()

    return (
        <div className="Home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="all blogs!" />}
        </div>
    );
}

export default Home;