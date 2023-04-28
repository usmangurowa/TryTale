import { View } from "react-native";
import React from "react";
import * as Yup from "yup";
import Form from "../../components/Form";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../twrnc";
import { Button, IconButton, Spacer, Text } from "../../components";
import { FormikHelpers } from "formik";
import { useStore } from "../../hooks";
import { Actions } from "../../context/reducer";
import { Google } from "iconsax-react-native";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const initialValues = { email: "", password: "" };

const Login = () => {
  const { dispatch } = useStore();

  const handleLogin = (
    data: typeof initialValues,
    helpers: FormikHelpers<typeof initialValues>
  ) => {
    setTimeout(() => {
      dispatch({ type: Actions.AUTHENTICATE, payload: data });
      console.log(data);
      helpers.setSubmitting(false);
    }, 3000);
  };
  return (
    <SafeAreaView
      style={tw`container flex flex-col justify-center h-full bg-primary-dark`}
    >
      <View style={tw`container flex-0.8 flex justify-center`}>
        <Form
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleLogin}
        >
          <Form.Input
            name="email"
            placeholder="Email"
            style={tw`self-start w-48`}
          />
          <Spacer my={3} />
          <Form.Input name="password" placeholder="Password" type="password" />
          <Spacer my={3} />
          <Form.Button type="submit" title="Login" mode="outlined" full />
          <Spacer my={3} />
          <View style={tw`flex flex-row items-center justify-center`}>
            <IconButton>
              <Google size={20} color={tw.color("primary")} />
            </IconButton>
          </View>
          <Spacer my={3} />
        </Form>
      </View>
      <View>
        <Button type="submit" title="Sign Up?" mode="text" full />
      </View>
    </SafeAreaView>
  );
};

export default Login;
