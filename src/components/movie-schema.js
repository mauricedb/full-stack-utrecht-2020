import * as yup from "yup";

const movieSchema = yup.object({
  title: yup.string().required(),
  vote_average: yup.number().min(0).max(10),
  overview: yup.string().required(),
});

export default movieSchema;
