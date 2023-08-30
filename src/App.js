import './App.css'
import { useBarcode } from '@createnextapp/react-barcode';

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML
  var originalContents = document.body.innerHTML

  document.body.innerHTML = printContents

  window.print()

  document.body.innerHTML = originalContents
}

function App() {
  const { inputRef } = useBarcode({
    value: '123456789145',
    options: {
      // background: '#ffff00',
    },
  });
  return (
    <div className='App' id="blockContainer" style={{ width: '100%' }}>
      <div id='printableArea'>
       <div>
        <row style={{ float: 'right', textAlign: 'right' }}>
          <p>123456789145</p>
          <p>Shop0040-Woliso1</p>
          <p>ssbwoliso1.cashier5</p>
          <p>2023/03/21 11:23:32 (UTC-7)</p>
        </row>
      </div>
      <div>
        <row>
          <p>
            <b style={{ float: 'left' }}>Win</b>
            <b style={{ float: 'right' }}>Br 50.00</b>
          </p>
        </row>
      </div>
      <div>
        <row style={{ float: 'left' }}>
          <p>Keno 2023/03/21 01:08:00 #1062</p>
          <p style={{ marginLeft: '15px' }}>3,4,67,4, 35.00</p>
        </row>
      </div>
      <div>
        <row>
          <p>
            <b style={{ float: 'left' }}>Total Stake</b>
            <b style={{ float: 'right' }}>Br 50.00</b>
          </p>
        </row>
      </div>
      <div>
        <row>
          <table style={{ width: '100%' }}>
            <tr>
              <td style={{ float: 'left' }}>Min Payout (incl. stake)</td>
              <td style={{ float: 'right' }}>Br 50.00</td>
            </tr>
            <tr>
              <td style={{ float: 'left' }}>Max Payout (incl. stake)</td>
              <td style={{ float: 'right' }}>Br 1750.00</td>
            </tr>
          </table>
        </row>
      </div>
      <div>
        <row style={{ textAlign: 'center' }}>
          <div>
            <img ref={inputRef} alt="barcode" />
          </div>
        </row>
      </div>
      <div>
        <row style={{ textAlign: 'center', backgroundColor: 'red' }}>
          <p>Standard Shop Terms & Conditions Apply</p>
          <p>801934D44A7AB</p>
        </row>
      </div>
      </div>

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
