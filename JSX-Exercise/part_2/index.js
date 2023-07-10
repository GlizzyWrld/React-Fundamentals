function Tweet({date, message, name, username}) {
    return (
        <div className="tweet">
            <span className="username">{username}</span>
            <span>{name}</span>
            <span className="date">{date}</span>
            <p>{message}</p>
        </div>
    )
}

const App = () => (
    <div>
       <Tweet
       username="jollyrancher38"
       name="Jessica Stanton"
       date= {new Date().toDateString()}
       message="Now I have access to your TikTok account! Mwahhahahaha"
       />
       <Tweet
       username="GlizzyBeTwirlin"
       name="Grant Michael"
       date= {new Date().toDateString()}
       message="Hello, welcome to your account"
       />
       <Tweet
       username="Hackington727"
       name="Mark Sanchez"
       date={new Date().toDateString()}
       message="I am hacking into your account"
       />
    </div>
);


ReactDOM.render(<App/>, document.getElementById('root'));