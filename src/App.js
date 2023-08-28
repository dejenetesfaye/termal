import './App.css'

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML
  var originalContents = document.body.innerHTML

  document.body.innerHTML = printContents

  window.print()

  document.body.innerHTML = originalContents
}

function App() {
  return (
    <div className='App'>
      <div id='printableArea'>
        <h1>ቆቅ እንዴት ነሽ?</h1>
      </div>
      <div>not printable area</div>

      <input
        type='button'
        name='print'
        className='noprint'
        onClick={() => printDiv('printableArea')}
        value='print a div!'
      />
    </div>
  )
}

export default App
