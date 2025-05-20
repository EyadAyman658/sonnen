import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthenticatedStackParamList } from '../stacks/authenticated/types';

export const useTypedNavigation = () =>
  useNavigation<NativeStackNavigationProp<AuthenticatedStackParamList>>();
