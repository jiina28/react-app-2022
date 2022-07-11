import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) {
  return <header>
    <h1><a href='/index.html' onClick={(event) => {
      event.preventDefault();
      props.onSelect();
    }}>WEB - Login</a></h1>
  </header>
}

function Article(props) {
  return <article>
    <h2>Welcome, {props.title}</h2>
    {props.body}!
</article>
}

function Nav(props) {
  const callback = e =>
    <li key={e.id}>
      <a href={'/read/' + e.id} onClick={(event) => {
        event.preventDefault();
        props.onSelect();
      }}>{e.title}</a>
    </li>

  const tag = props.data.map(callback)

  return <nav>
    <ol>
      {tag}
    </ol>
  </nav>
}

function App() {
  const [mode, setMode] = useState('WELCOME');

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]

  let content = null;
  if(mode === 'WELCOME') {
    content = <Article title='WELCOME' body='Hello, WEB'></Article>
  }
  else if(mode === 'READ') {
    content = <Article title='READ' body='Hello, READ'></Article>
  }

  return (
    <div>
      <Header onSelect={() => setMode('WELCOME')}></Header>
      <Nav data={topics} onSelect={() => setMode('READ')}></Nav>
      {content}
    </div>
  );
}

export default App;
