import { useState, useEffect } from "react";
import axios from "../api/axios";

const Testing = () => {
    const [test, setTest] = useState({"abcd" : "xyz"});

    useEffect(() => {
      let isMounted = true;
      const controller = new AbortController();

      const getTest = async () => {
        try {
            const response = await axios.get("/testing", {
                signal : controller.signal
            });
            console.log(response.data);
            isMounted && setTest(response.data);
        } catch (error) {
            console.error(error);
        }
      }

      getTest();
    
      return () => {
        isMounted = false;
        controller.abort();
      }
    }, [])

    return (
        <div>{test?.abcd}</div>
    )
    
}

export default Testing;