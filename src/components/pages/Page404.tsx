/** @format */

import { FC, memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Page404: FC = memo(() => {
	return (
		<HeaderLayout>
			<p>404ページです</p>
		</HeaderLayout>
	);
});
