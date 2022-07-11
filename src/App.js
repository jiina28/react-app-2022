import logo from './logo.svg';
import './App.css';

function Header() {
  return <header>
  <h1><a href="/index.html">WEB - Login</a></h1>
</header>
}

function Article() {
  return <article>
  <h2>Welcome</h2>
  Hello, WEB!
</article>
}

function Nav() {
  return  <nav>
  <ol>
    <li><a href="/read/1.html">HTML</a></li>
    <li><a href="/read/2.html">CSS</a></li>
    <li><a href="/read/3.html">JavaScript</a></li>
  </ol>
</nav>
}

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

export default App;
