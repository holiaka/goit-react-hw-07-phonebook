import { selectError } from "redux/selector";
import { ErrorText } from "./Error";

export const Error = () => {
    return (
        <>
            <ErrorText>
                The request ended with an error!!!
            </ErrorText>
            <ErrorText>
                Error text: {selectError()}
            </ErrorText>
        </>
    )
}