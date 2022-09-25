import { Typography } from "@mui/material";
import SelectField from "../components/SelectField";

const Setting = () => {
    return (
        <>
            <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
            <form>
                <SelectField label="Category"/>
            </form>
        </>
    )
};

export default Setting;