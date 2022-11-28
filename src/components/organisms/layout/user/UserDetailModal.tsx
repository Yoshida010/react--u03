/** @format */

import { Stack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { User } from "../../../../types/api/user";
import { PrimaryButton } from "../../../atoms/button/PrimaryButton";

type Props = {
	isOpen: boolean;
	onClose: () => void;
	user: User | null;
	isAdmin?: boolean;
};

export const UserDetailModal: FC<Props> = memo((props) => {
	const { isOpen, onClose, user, isAdmin = false } = props;

	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	useEffect(() => {
		setUsername(user?.username ?? "");
		setName(user?.name ?? "");
		setEmail(user?.email ?? "");
		setPhone(user?.email ?? "");
	}, [user]);

	const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
	const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
	const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
	const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

	const onClickUpdate = () => alert("click");
	return (
		<Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
			<ModalOverlay />
			<ModalContent pb={6}>
				<ModalHeader>ユーザー詳細</ModalHeader>
				<ModalCloseButton />
				<ModalBody mx={4}>
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>名前</FormLabel>
							<Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin} />
						</FormControl>
						<FormControl>
							<FormLabel>フルネーム</FormLabel>
							<Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
						</FormControl>
						<FormControl>
							<FormLabel>メール</FormLabel>
							<Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
						</FormControl>
						<FormControl>
							<FormLabel>電話</FormLabel>
							<Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
						</FormControl>
					</Stack>
				</ModalBody>
				{isAdmin && (
					<ModalFooter>
						<PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
					</ModalFooter>
				)}
			</ModalContent>
		</Modal>
	);
});
