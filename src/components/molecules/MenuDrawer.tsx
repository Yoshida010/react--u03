/** @format */

import { FC, memo, useCallback } from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";

type Props = {
	onClose: () => void;
	isOpen: boolean;
	onClickHome: () => void;
	onClickUserManagement: () => void;
	onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
	const { onClose, isOpen, onClickHome, onClickSetting, onClickUserManagement } = props;

	return (
		<Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerBody p={0} bg="gray.100">
						<Button onClick={onClickHome} w="100%">
							TOP
						</Button>
						<Button onClick={onClickUserManagement} w="100%">
							ユーザー一覧
						</Button>
						<Button onClick={onClickSetting} w="100%">
							設定
						</Button>
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
});
