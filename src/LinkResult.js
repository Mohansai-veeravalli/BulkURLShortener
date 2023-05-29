 import axios from "axios";
 import { useEffect, useState } from "react"
 import CopyToClipboard from 'react-copy-to-clipboard';
 import { CopyOutlined } from "@ant-design/icons"

const LinkResult = ({ inputValue }) => {
    const [shortenLink,setShortenLink] = useState([]);
    const [copied,setCopied] = useState(false);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false)

    const fetchData = async () =>{
        try {
            setLoading(true);

            for(let url of inputValue){
                if(url){
                    const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
                    shortenLink.push(res.data.result.full_short_link);
                }
            }
            setShortenLink(shortenLink);
            
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (inputValue.length) {
            fetchData(); 
        }
    },[inputValue]);

    useEffect(() => {
        const timer = setTimeout(()=> {
            setCopied(false);
        },1000);
    
        return () => clearTimeout(timer);
    }, [copied]);

    if (loading) {
        return <p className="noData">Loading...</p>
    }

    if (error) {
        return <p className="noData">something went wrong</p>
    } 


    return (
        <>
        {
            shortenLink.map((shortLink,index)=>(
                <div className="result">
                <p>{shortLink}</p>
                <CopyToClipboard text={shortLink} onCopy = {() => setCopied(true)} loading>
                <button className={copied ? "copied" : ""} title="copy"><CopyOutlined /></button>
                </CopyToClipboard>
            </div>
            ) 
           
        )}
        </>
    )
}

export default LinkResult