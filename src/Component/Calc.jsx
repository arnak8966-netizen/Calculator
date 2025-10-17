import { useState } from 'react';
import './Calc.css';

const Calc = () => {
    const [count, setCount] = useState('');

    const handleClick = (e) => {
        setCount((prev) => prev + e.target.value);
    };

const handleResult = () => {
    const result = eval(count);

    if (result === undefined || result === null) {    
        return;
    };

    setCount(result.toString());
};



    const handleClear = () => {
        setCount('');
    };

    const handleDelete = () => {
        setCount((prev) => prev.slice(0, -1));
    };

    return (
        <div className="calc">
            <div className="input">
                <div className="text">{count || '0'}</div>
            </div>
            <div className="numbers">
                <button onClick={handleClear} className="orange button">C</button>
                <button className='orange button' onClick={handleDelete}>DEL</button>
                <button onClick={handleClick} value={'/'} className="orange button">➗</button>
                <button onClick={handleClick} value={'*'} className="orange button">✖️</button>

                <button onClick={handleClick} value={7} className="button">7</button>
                <button onClick={handleClick} value={8} className="button">8</button>
                <button onClick={handleClick} value={9} className="button">9</button>
                <button onClick={handleClick} value={'-'} className="orange button">-</button>

                <button onClick={handleClick} value={4} className="button">4</button>
                <button onClick={handleClick} value={5} className="button">5</button>
                <button onClick={handleClick} value={6} className="button">6</button>
                <button onClick={handleClick} value={'+'} className="orange button">+</button>

                <button onClick={handleClick} value={1} className="button">1</button>
                <button onClick={handleClick} value={2} className="button">2</button>
                <button onClick={handleClick} value={3} className="button">3</button>
                <button onClick={handleResult} className="orange button">=</button>

                <button onClick={handleClick} value={0} className="button zero">0</button>
            </div>
        </div>
    );
};

export default Calc;
