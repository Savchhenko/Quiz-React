import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { handleScoreChange } from "../redux/actions";

// генерирует число от 1 до максимальной границы - amount_of_questions
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_questions,
        score,
    } = useSelector((state) => state);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let apiUrl = `/api.php?amount=${amount_of_questions}`;

    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`);
    }

    const { response, loading } = useAxios({ url: apiUrl });
    
    const [questionIndex, setQuestionIndex] = useState(0); //номер вопроса
    const [options, setOptions] = useState([]); // варианты ответа на вопрос
    
    useEffect(() => {
        if (response?.results.length) {
            const question = response.results[questionIndex];
            let answers = [...question.incorrect_answers];
            answers.splice( //располагает варианты ответа в рандомном порядке
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers);
        }
    }, [response, questionIndex]);

    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        );
    }

    // увеличивает индекс вопроса на 1
    // и если дошли до максимума, то по клику на ответ открывает финальную страницу
    const handleClickAnswer = (e) => {
        const question = response.results[questionIndex];
        if (e.target.textContent === question.correct_answer) {
            dispatch(handleScoreChange(score + 1));
        }

        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            navigate("/score");
        }
    };

    return (
        <Box>
            <Typography variant="h4">Question {questionIndex + 1}</Typography>
            <Typography mt={5}>{response.results[questionIndex].question}</Typography>
            {options.map((data, id) => (
                <Box mt={2} key={id}>
                    <Button onClick={handleClickAnswer} variant="contained">{data}</Button>
                </Box>
            ))}
            <Box mt={5}>
                Score: {score} / {response.results.length}
            </Box>
        </Box>
    );
};

export default Questions;