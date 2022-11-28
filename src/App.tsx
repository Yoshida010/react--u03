/** @format */
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";
import { Router } from "./router/Router";

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router />
		</ChakraProvider>
	);
};
