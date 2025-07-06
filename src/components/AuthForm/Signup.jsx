import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
    Alert,
    Button,
    Field,
    Input,
    InputElement,
    InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSignUpWithEmailAndPassword } from "../../hooks/useSignUpWithEmailAndPassword";
import { useShowToast } from "../../hooks/useShowToast";
export const Signup = () => {
    const toaster = useShowToast();
    const [validator, setValidator] = useState({
        fullName: false,
        username: false,
        email: false,
        password: false,
    });
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
    });
    const [showPassword, setshowPassword] = useState(false);
    const { loading, error, signup } = useSignUpWithEmailAndPassword();
    if (error) {
        toaster(error.message, "error");
    }
    const submit = () => {

        let isInvalid = false;
        if (inputs.fullName.trim() === "") {
            // setValidator({ ...validator, fullName: true });
            setValidator((oldvalue) => ({ ...oldvalue, fullName: true }));
            isInvalid = true;
        }
        if (inputs.username.trim() === "") {
            // setValidator({ ...validator, username: true });
            setValidator((oldvalue) => ({ ...oldvalue, username: true }));
            isInvalid = true;
        }
        if (inputs.email.trim() === "" || inputs.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
            // setValidator({ ...validator, email: true });
            setValidator((oldvalue) => ({ ...oldvalue, email: true }));
            isInvalid = true;
        }
        if (inputs.password.trim() < 6 || inputs.password.trim() === "") {
            setValidator((oldvalue) => ({ ...oldvalue, password: true }));

            // setValidator({ ...validator, password: true });
            isInvalid = true;
        }
        if (isInvalid === false) {
            signup(inputs);
            setInputs({
                fullName: "",
                username: "",
                email: "",
                password: "",
            });
            setValidator({
                fullName: false,
                username: false,
                email: false,
                password: false,
            });
        };

    }
    return (
        <>
            <Field.Root invalid={validator.fullName}>
                <Input
                    placeholder="Full Name"
                    fontSize="14"
                    type="text"
                    size={"sm"}
                    value={inputs.fullName}
                    onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                />
                <Field.ErrorText>please enter your full name</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={validator.username}>
                {" "}
                <Input
                    placeholder="Username"
                    fontSize="14"
                    type="text"
                    size={"sm"}
                    value={inputs.username}
                    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                />
                <Field.ErrorText>please enter your username</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={validator.email} >
                <Input
                    placeholder="Email"
                    fontSize="14"
                    type="email"
                    size={"sm"}
                    value={inputs.email}
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                />
                <Field.ErrorText>please enter your email</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={validator.password}>
                <InputGroup
                    endElement={
                        <Button
                            variant={"ghost"}
                            size={"sm"}
                            onClick={() => setshowPassword(!showPassword)}
                        >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    }
                >
                    <Input
                        placeholder="Password"
                        fontSize="14"
                        size={"sm"}
                        type={showPassword ? "text" : "password"}
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                </InputGroup>
                <Field.ErrorText>password must be at least 6 characters</Field.ErrorText>
            </Field.Root>

            {error && (
                <Alert.Root
                    status="error"
                    fontSize={13}
                    size={"md"}
                    p={2}
                    borderRadius={4}
                >
                    <Alert.Indicator />
                    <Alert.Content>
                        <Alert.Description>{error.message}</Alert.Description>
                    </Alert.Content>
                </Alert.Root>
            )}
            <Button
                w={"full"}
                colorScheme={"blue"}
                size={"sm"}
                fontSize={14}
                isLoading={loading}
                onClick={submit}
            >
                Sign up
            </Button>

        </>
    );
};
