import { useEffect, useState } from "react";

const useChart = () => {

    //loading data for chart

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('chartDb.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return [data, setData];
};

export default useChart;