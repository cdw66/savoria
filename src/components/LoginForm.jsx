import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  LoadingOverlay,
} from "@mantine/core";
import { useForm, isEmail } from "@mantine/form";
import { IconX, IconCheck } from "@tabler/icons-react";
import { auth } from "../config/firebase";
import {
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const currentUser = auth.currentUser;

  // Auth hooks
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // State hooks
  const [checked, setChecked] = useState(false);
  const [fbError, setFbError] = useState(false);
  const [success, setSuccess] = useState(false);
  const defaultError = "There was an error while signing in to your account";
  const [errorMessage, setErrorMessage] = useState(defaultError);

  // Sign user in when form is submitted
  const handleSubmit = async (values) => {
    // Reset state
    setFbError(false);
    setSuccess(false);

    try {
      // If a user is already signed in, sign them out first
      if (currentUser) {
        await signOut(auth);
      }

      // Get user credentials from form values
      const { email, password } = values;

      // Set auth persistence
      await setPersistence(
        auth,
        checked ? browserLocalPersistence : browserSessionPersistence
      );
      const result = await signInWithEmailAndPassword(email, password);
      // Update state on successful login
      result && setSuccess(true);
    } catch (err) {
      setFbError(true);
      setErrorMessage(defaultError);
    }
  };

  // Redirect the user to profile page on login
  //(this does not redirect already logged in users,
  //user variable comes from useSignInWithEmailAndPassword hook)
  // if (success && user) {
  //   setTimeout(() => router.push("/"), "1000");
  // }

  // Mantine form values & validation functions
  const form = useForm({
    initialValues: { email: "", password: "" },

    // Validate email address
    validate: {
      email: isEmail("Invalid email"),
    },
  });

  // Common error messages from firebase
  const messages = [
    "Firebase: Error (auth/wrong-password).",
    "Firebase: Error (auth/invalid-email).",
    "Firebase: Error (auth/user-not-found).",
  ];
  const retryError =
    "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).";

  useEffect(() => {
    // Set descriptive error messages
    if (error) {
      //   toast.error("An error occurred while signing in.", {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   });
      if (messages.includes(error.message)) {
        setErrorMessage("Invalid email or password.");
      } else if (error.message === retryError) {
        setErrorMessage(
          "Access temporarily disabled due to too many failed login attempts. Please reset your password or try again later."
        );
      } else {
        setErrorMessage(defaultError);
      }
    }
    //Redirect to home on successful login
    if (success) {
      //   toast.success("Sign in successful!", {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   });
      setTimeout(() => router.push("/auth/admin"), "50");
      // router.push("/");
    }
  }, [error, success]);

  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome back!</Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Don't have an account yet?
        <Link href="/register" className="hover:underline no-underline">
          {" "}
          Create account
        </Link>
      </Text>

      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        className="relative"
      >
        <LoadingOverlay visible={loading} overlayBlur={2} />

        {(error || fbError) && (
          <div className="flex items-center gap-2 mb-4">
            <IconX className="text-red-500 min-w-[24px]" />
            <Text size="sm" className="">
              {errorMessage}
            </Text>
          </div>
        )}

        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            label="Email"
            placeholder="Your email"
            {...form.getInputProps("email")}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps("password")}
            required
          />

          <Group position="apart" mt="lg">
            <Checkbox
              label="Remember me"
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
            />
            <Link
              href="/reset-password"
              className="hover:underline no-underline"
            >
              Forgot password?
            </Link>
            {/* </Anchor> */}
          </Group>
          <Button fullWidth mt="xl" type="submit" loading={loading}>
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
