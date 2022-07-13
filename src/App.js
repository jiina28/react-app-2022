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

function Nav(props) {
  const callback = el =>
    <li key={el.id}>
      <a href={'/read/' + el.id} onClick={(event) => {
        event.preventDefault();
        props.onSelect(el.id);
      }}>{el.title}</a>
    </li>

  const tag = props.data.map(callback)

  return <nav>
    <ol>
      {tag}
    </ol>
  </nav>
}


function Article(props) {
  return <article>
    <h2>Welcome, {props.title}</h2>
    {props.body}!
</article>
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

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
  const topic = topics.filter(el => el.id === id)[0];
  content = <Article title={topic.title} body={topic.body}></Article>

  }

  const styleObj = {
    border: '1px solid red'
  }
  return (
    <div>
      <Header onSelect={() => setMode('WELCOME')}></Header>
      <Nav data={topics} onSelect={(_id) => {
        setMode('READ');
        setId(_id);
        }}>
          
        </Nav>
      {content}
    </div>
  );
}

export default App;
