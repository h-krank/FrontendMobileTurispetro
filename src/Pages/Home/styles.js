import styled from 'styled-components/native';


export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;

  
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #888;
`;
export const WeatherBox = styled.View`
  flex-direction: row;
  padding: 10px;
  border: 1px solid #888;
  border-radius: 20px;
`

export const WeatherText = styled.Text`
  font-size: 24px;
  color: #D15B49;
`

export const WeatherDetail = styled.Text`
  font-size: 12px;
  color: #999;
`

export const SearchBar = styled.TextInput`
  flex: 1;
  margin-top: 50px;
  background-color: #ccc;
  border-radius: 20px;
  height: 44px;
  padding-left: 30px;
  position: absolute;
  width: 100%;
`
export const IconArea = styled.ScrollView`
  margin: 25px;
  flex-direction: row;
  
`
export const Icon = styled.View`
  align-items: center;
  margin: 10px;
`

export const IconText = styled.Text`
  color: #D15B49;
  font-size: 12px;
`