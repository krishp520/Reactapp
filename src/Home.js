import React, {useEffect} from "react";

const Home = ({ visits, setVisits }) => {
    useEffect(() => {
        setVisits(previousvisits => previousvisits +1);
    }, [setVisits]);
    
    return (
        <div>
            <h2>
                Home Page
            </h2>
            <p>
                Krish Kalpeshkumar Patel 
                <br></br><br></br>B00946672
            </p>
            <p>
                Home page visited {visits} times.
            </p>
        </div>
    );
}
export default Home;