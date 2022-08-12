import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, useColorMode } from "@chakra-ui/react";
import StudentRegistration from "./components/StudentRegistration";

interface IAppProps {}

function App<IAppProps>() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Grid gap={2} placeItems='center' h='100vh'>
			<Box pos='absolute' top='0' right='0' m={4}>
				<Button onClick={() => toggleColorMode()}>
					{colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
				</Button>
			</Box>
			<StudentRegistration />
		</Grid>
	);
}

export default App;
