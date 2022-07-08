import React, {useCallback, useState} from 'react';
import calculate from '../apis/calculate';

const App = () => {
  const [int1, setInt1] = useState("");
  const [int2, setInt2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const updateInt = useCallback((e) => {
    // Clear display screen if result is already displayed.
    if (result !== "") {
      clearValues();
      setInt1(e.target.textContent);
      return;
    }

    // Fill display screen.
    if (operator === "") {
      if (int1 === "") {
        setInt1(e.target.textContent);
      } else {
        setInt1(int1 + e.target.textContent);
      }
    } else {
      if (int2 === "") {
        setInt2(e.target.textContent);
      } else {
        setInt2(int2 + e.target.textContent);
      }
    }
  }, [int1, int2, operator, result])

  const sendRequest = async () => {
    if (int1 !== "" && int2 !== "" && operator !== "") {
      const calcObj = {
        "int1": parseInt(int1),
        "int2": parseInt(int2),
        "operator": operator
      };
    
      try {
        const response = await calculate.post('/calculate', calcObj);
        setResult(response.data.result);
      } catch (error) {
        alert(error);
      }
    } else {
      return null;
    }
  }

  const clearValues = () => {
    setInt1("");
    setInt2("");
    setOperator("");
    setResult("");
  };

  const buttonStyle = {
    width: '3rem',
    margin: '1rem 0 1rem 0'
  };

  const displayStyle = {
    margin: '1rem 1rem 1rem 1rem',
    border: '1px solid black',
    height: '8vh'
  };

  const renderValues = () => {
    if (int1 === "" && int2 === "" && operator === "") {
      return "";
    } else {
      return `${int1} ${operator} ${int2}`;
    }
  }

  const renderResult = () => {
    if (result === "") {
      return "";
    } else {
      return `= ${result}`;
    }
  }
  const renderScreen = () => {
    return (
      <>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div style={displayStyle} className='col-10'>
              <div className='row d-flex justify-content-end'>
                <strong className='col-xs-5 d-flex justify-content-end'>
                  {renderValues()}
                </strong>
              </div>
              <div className='row d-flex justify-content-end'>
                <strong className='col-xs-5 d-flex justify-content-end'>
                  {renderResult()}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderButtons = () => {
    return (
      <>
        <div className='row'>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>1</button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>2</button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>3</button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => setOperator(e.target.textContent)} style={buttonStyle} className='btn btn-outline-primary'>+</button>
          </div>
        </div>
        <div className='row'>
        <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>4</button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>5</button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>6</button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => setOperator(e.target.textContent)} style={buttonStyle} className='btn btn-outline-primary'>-</button>
          </div>
        </div>
        <div className='row'>
        <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>7</button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>8</button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>9</button>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <button onClick={(e) => setOperator(e.target.textContent)} style={buttonStyle} className='btn btn-outline-primary'>x</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-4 d-flex justify-content-center'>
            <button onClick={(e) => updateInt(e)} style={buttonStyle} className='btn btn-outline-primary'>0</button>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <button onClick={clearValues} style={buttonStyle} className='btn btn-outline-primary'>C</button>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <button onClick={sendRequest} style={buttonStyle} className='btn btn-outline-primary'>=</button>
          </div>
        </div>
      </>
    );
  };

  const renderCalculator = () => {
    return (
      <>
        <div className='row d-flex justify-content-center'>
          <div style={{border: '3px solid gray'}} className='col-6'>
            {renderScreen()}
            {renderButtons()}
          </div>
        </div>
      </>
    );
  };

  return (
    <main className='container pt-3 d-flex justify-content-center'>
      <div className='calculator-body'>
        {renderCalculator()}
      </div>
    </main>
  );
};

export default App;