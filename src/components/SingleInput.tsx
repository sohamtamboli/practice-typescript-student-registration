import {
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";

import {
	DeepRequired,
	FieldError,
	FieldErrorsImpl,
	UseFormRegister,
} from "react-hook-form";
import * as yup from "yup";
import { CSESubjects, IStudentDetails } from "../types";

type Props = {
	htmlFor: string;
	label: string;
	inputId: string;
	validationId: keyof IStudentDetails<string>;
	placeholder: string;
	// errorObject: FieldError | undefined;
	errorObject: FieldErrorsImpl<DeepRequired<IStudentDetails<string>>>;
	validationRegister: UseFormRegister<IStudentDetails<string>>;
	errorFieldName: keyof FieldErrorsImpl<DeepRequired<IStudentDetails<string>>>;
};

const SingleInput = ({
	htmlFor,
	label,
	inputId,
	validationId,
	placeholder,
	errorObject,
	validationRegister,
	errorFieldName,
}: Props) => {
	return (
		<FormControl mb={3}>
			<FormLabel htmlFor={htmlFor}>{label}</FormLabel>
			<Input
				id={inputId}
				placeholder={placeholder}
				{...validationRegister(validationId)}
			/>
			<FormHelperText color='red'>
				{errorObject[errorFieldName] && errorObject[errorFieldName]?.message}
				{/* {errorObject && errorObject?.message} */}
			</FormHelperText>
		</FormControl>
	);
};

export default SingleInput;
