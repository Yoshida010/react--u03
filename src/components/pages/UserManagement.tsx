/** @format */

import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/layout/user/UserCard";
import { HeaderLayout } from "../templates/HeaderLayout";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/layout/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const { getUsers, loading, users } = useAllUsers();
	const { onSelectUser, selectedUser } = useSelectUser();
	const { loginUser } = useLoginUser();

	useEffect(() => getUsers(), []);

	// user情報が変わる度に設定し直す必要があるから、依存配列はusers
	const onClickUser = useCallback(
		(id: number) => {
			onSelectUser({ id, users, onOpen });
		},
		[users, onSelectUser, onOpen]
	);

	return (
		<HeaderLayout>
			{loading ? (
				<Center h="100vh">
					<Spinner />
				</Center>
			) : (
				<Wrap p={{ base: 4, md: 10 }}>
					{users.map((user) => (
						<WrapItem key={user.id} style={{ margin: "auto" }}>
							<UserCard id={user.id} imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onClick={onClickUser} />
						</WrapItem>
					))}
				</Wrap>
			)}
			<UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin} />
		</HeaderLayout>
	);
});
