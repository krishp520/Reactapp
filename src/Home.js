import React, {useEffect} from "react";

const Home = ({ visits, setVisits }) => {
    useEffect(() => {
        setVisits( visits + 1);
    }, [setVisits]);
    
    return (
        <div>
            <h2>
                Home Page
            </h2>
            <p>
                Krish Kalpeshkumar Patel 
                <br></br>B00946672
            </p>
        </div>
    );
}
export default Home;