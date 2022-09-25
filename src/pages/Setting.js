import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";

const Setting = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
            <form onSubmit={handleSubmit}>
                <SelectField label="Category"/>
                <SelectField label="Difficulty"/>
                <SelectField label="Type"/>
                <TextFieldComp />
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" type="submit">
                        Get Started
                    </Button>
                </Box>
            </form>
        </>
    )
};

export default Setting;