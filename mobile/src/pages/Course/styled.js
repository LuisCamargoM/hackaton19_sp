import styled from "styled-components/native";
import { Platform, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === "ios",
  behavior: "padding"
})`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled(ScrollView)`
  align-self: stretch;
  margin: 40px 0;

  background: #eee;
  border-radius: 4px;
  padding: 15px 0 20px;
`;

export const FormInput = styled.TextInput`
  padding: 0 0 15px 15px;
  margin-top: 10px;
`;

export const Button = styled(RectButton)`
  height: 50px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 15px 0 40px;
  background-color: #7159c1;  
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const Label = styled.Text`
  font-size: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
`;