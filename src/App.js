import logo from './logo.svg';
import './App.css';
import { render, Printer, Text } from 'react-thermal-printer';

async function print() {
  const port = await window.navigator.serial.requestPort();
  await port.open({ baudRate: 9600 });

  const writer = port.writable?.getWriter();
  if (writer != null) {
    await writer.write(data);
    writer.releaseLock();
    console.log(data);
  }
}
const data = await render(
  <Printer type="epson">
    <Text>Hello World, this is sample react app</Text>
  </Printer>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={print}>click</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
