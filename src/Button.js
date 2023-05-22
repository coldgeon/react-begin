import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { useState, useEffect } from 'react';

function Button({ text }) {
    const [count, countSet] = useState(0);
    const [search, searchSet] = useState(''); //이거 할 때 초기값 지정 안해줬더니 에러 뜨더라

    const onClick = () => {
        countSet((prev) => prev + 1);
    };

    const onChanges = (event) => {
        searchSet(event.target.value);
    };
    // console.log('I run all the time');
    useEffect(() => {
        console.log('Call The API...');
    }, []);

    useEffect(() => {
        if (search !== '') {
            console.log('search for ', search);
        }
    }, [search]);

    useEffect(() => {
        console.log('count on ', count);
    }, [count]);
    return (
        <div>
            <input
                value={search}
                onChange={onChanges}
                type="text"
                placeholder="search here..."
            />
            <h3>{count}</h3>
            <button
                className={styles.btn}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
