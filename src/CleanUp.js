import { useState, useEffect } from 'react';

function ShowTitle() {
    useEffect(() => {
        console.log('hi!');
        return () => console.log('bye');
    }, []);
    return <h1>You Clicked!</h1>;
}

function CleanUp() {
    const [showing, showingSet] = useState(false);

    const onClick = () => {
        showingSet((prev) => !prev);
    };

    return (
        <div>
            <button onClick={onClick}>
                {showing ? 'Hide' : 'Show'}
            </button>
            {showing ? <ShowTitle /> : null}
        </div>
    );
}

export default CleanUp;
