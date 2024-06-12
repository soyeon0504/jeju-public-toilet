// 위도를 표현하는 타입
type Lat = number;
// 경도를 표현하는 타입
type Lng = number;
// 위도와 경도를 묶어준 타입
export type Coordinates = [Lat, Lng];