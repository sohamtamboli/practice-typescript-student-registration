import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { Resolver, useForm } from "react-hook-form";

type FormValues = {
	firstName: string;
	lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.firstName ? values : {},
		errors: !values.firstName
			? {
					firstName: {
						type: "required",
						message: "This is required.",
					},
			  }
			: {},
	};
};

export default function HookForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({ resolver });

	const onSubmit = handleSubmit((data) => console.log(data));

	return (
		<form onSubmit={onSubmit}>
			<FormControl>
				<FormLabel htmlFor='name'>First name</FormLabel>
				<Input
					id='firstName'
					placeholder='name'
					{...register("firstName", {
						required: "This is required",
						minLength: { value: 4, message: "Minimum length should be 4" },
					})}
				/>
				<FormErrorMessage>
					{errors.firstName && errors.firstName.message}
				</FormErrorMessage>
			</FormControl>
			<Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
				Submit
			</Button>
		</form>
	);
}
