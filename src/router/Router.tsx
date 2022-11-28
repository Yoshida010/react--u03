/** @format */

import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
	return (
		<LoginUserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/home/user_management" element={<UserManagement />} />
					<Route path="/home/setting" element={<Setting />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</LoginUserProvider>
	);
});
