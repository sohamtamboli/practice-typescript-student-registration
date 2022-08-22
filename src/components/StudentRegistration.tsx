import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldError, useForm } from "react-hook-form";
import * as yup from "yup";
import { SingleInputData } from "../assets/InputData";
import { IStudentDetails } from "../types";
import SingleInput from "./SingleInput";

type Props = {};

const schema = yup
	.object()
	.shape({
		name: yup.string().required(),
		rollNo: yup.number().required(),
		stream: yup.string().required(),
		// subjects: yup.number().required(),
	})
	.required();

export default function StudentRegistration({}: Props) {
	const [isSmallerThan300] = useMediaQuery("(max-width: 300px)");
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IStudentDetails<string>>({
		mode: "onTouched",
		resolver: yupResolver(schema),
	});

	return (
		<>
			<Box m={2} w={isSmallerThan300 ? "260px" : "300px"}>
				<form onSubmit={handleSubmit((d) => console.log(d))}>
					{/* <SingleInput
						htmlFor='name'
						label='Name'
						inputId='name'
						placeholder='Full Name'
						validationId='name'
						errorObject={errors?.name}
						validationRegister={register}
					/>
					<SingleInput
						htmlFor='rollNo'
						label='Roll Number'
						inputId='rollNo'
						placeholder='Roll Number'
						validationId='rollNo'
						errorObject={errors?.rollNo}
						validationRegister={register}
					/>
					<SingleInput
						htmlFor='stream'
						label='Stream'
						inputId='stream'
						placeholder='Stream'
						validationId='stream'
						errorObject={errors?.stream}
						validationRegister={register}
					/> */}
					{SingleInputData.map(
						(
							{
								htmlFor,
								label,
								inputId,
								placeholder,
								validationId,
								errorFieldName,
							},
							idx
						) => (
							<SingleInput
								key={idx * Math.random()}
								htmlFor={htmlFor}
								label={label}
								inputId={inputId}
								placeholder={placeholder}
								validationId={validationId as keyof IStudentDetails<string>}
								// errorObject={errors[errorFieldName as keyof errors]}
								errorObject={errors}
								errorFieldName={errorFieldName}
								validationRegister={register}
							/>
						)
					)}

					<Button
						mt={4}
						colorScheme='teal'
						isLoading={isSubmitting}
						type='submit'>
						Submit
					</Button>
				</form>
			</Box>
		</>
	);
}
