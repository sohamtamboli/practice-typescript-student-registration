import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	useMediaQuery,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IStudentDetails<T> {
	name: String;
	rollNo: Number;
	stream: T;
	// subjects?: T[];
}
type CSE = {
	subject?: String;
};

const schema = yup
	.object()
	.shape({
		name: yup.string().required(),
		rollNo: yup.number().required(),
		stream: yup.string().required(),
		// subjects: yup.number().required(),
	})
	.required();

export default function StudentRegistration() {
	const [isSmallerThan300] = useMediaQuery("(max-width: 300px)");
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IStudentDetails<CSE>>({
		mode: "onTouched",
		resolver: yupResolver(schema),
	});

	return (
		<>
			{console.log(errors)}
			<Box m={2} w={isSmallerThan300 ? "260px" : "300px"}>
				<form onSubmit={handleSubmit((d) => console.log(d))}>
					<FormControl>
						<FormLabel htmlFor='name'>Full Name</FormLabel>
						<Input id='name' placeholder='Full Name' {...register("name")} />
						<FormHelperText color='red'>
							{errors?.name && errors?.name?.message}
						</FormHelperText>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor='rollNo'>Roll Number</FormLabel>
						<Input
							id='rollNo'
							placeholder='Roll Number'
							{...register("rollNo")}
						/>
						<FormHelperText color='red'>
							{errors?.rollNo && errors?.rollNo?.message}
						</FormHelperText>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor='stream'>Stream</FormLabel>
						<Input id='stream' placeholder='Stream' {...register("stream")} />
						<FormHelperText color='red'>
							{errors?.stream && errors?.stream?.message}
						</FormHelperText>
					</FormControl>
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
