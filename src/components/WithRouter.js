import { 
    useNavigate,
 } from "react-router-dom";

export const WithRouter = (Component)=>{
    const Wrapper = (props)=>{
        const history = useNavigate();

        return(
            <Component
            history = {history}
            {...props}
            />
        );
    };

    return Wrapper;
}
