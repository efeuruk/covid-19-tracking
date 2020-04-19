import React, {useState, useEffect} from 'react';
import loading from '../../../src/assets/loading.gif';

export default function Card(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tested, setTested] = useState(0);
    const [infected, setInfected] = useState(0);
    const [deceased, setDeceased] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [lastUpdate, setLastUpdate] = useState('');


    useEffect(() => {
        fetch(props.api)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setTested(result?.tested);
                setInfected(result?.infected);
                setDeceased(result?.deceased);
                setRecovered(result?.recovered);
                setLastUpdate(result?.lastUpdatedAtSource);
                if (props.country === "Belgium") {
                    setDeceased(result?.deaths);
                }
                else if (props.country === "Italy") {
                    setTested("N/A")
                    setInfected(result?.totalCases);
                    setRecovered(result?.dischargedHealed);
                }
                else if (props.country === "Spain" || props.country === "Germany") {
                    setLastUpdate(result?.lastUpdatedAtApify);
                }
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    }
    else if (!isLoaded) {
        return <img src={loading} width="10%" height="40%" />
    }
    else {
        return (
            <div className="card">
                <h2 className={props.short}>
                    <span className="flag"></span>
                    <span className="title">{props.country}</span>
                </h2>
                <p>Total tested: {tested}</p>
                <p>Total infected: {infected}</p>
                <p style={{color: '#f23030'}}>Total deceased: {deceased}</p>
                <p style={{color: '#00c91e'}}>Total recovered: {recovered}</p>
                <p>Last Update: {lastUpdate?.substr(0,10)}</p>
            </div>
        )
    }
}
