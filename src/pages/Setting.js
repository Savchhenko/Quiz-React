import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Setting = () => {
    const { response, error, loading } = useAxios({ url: "api_category.php"});
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

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