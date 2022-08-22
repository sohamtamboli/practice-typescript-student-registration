import { DeepRequired, FieldErrorsImpl } from "react-hook-form";

export interface IStudentDetails<T> {
	name: string;
	rollNo: number;
	stream: T;
	subjects?: string[];
}

export enum CSESubjects {
	MATHS = "Maths",
	C_LANGUAGE = "C Language",
	PHYSICS = "Physics",
}

export interface ISingleInputStruct {
	htmlFor: string;
	label: string;
	inputId: string;
	placeholder: string;
	validationId: string;
	errorFieldName: keyof IStudentDetails<string>;
}
