import {FC,ChangeEvent, useState} from 'react';

export enum HairColor {
    Blonde = "Your hair is blonde, good for you",
    Brown = "Cool hair color",
    Pink = "Wow that is so cool",
}

interface Props {
    name: string;
    age: number;
    email: string;
    // name?: string 옵셔널도 가능
    // getName: (name: string) => string; // return을 string
    hairColor: HairColor;
}

//  props에 {name, email, age}: Props 넣어도 되고 아래처럼 해도 가능
export const Person:FC<Props> = ({name, age, email, hairColor}) => {
    // null의 경우, <string | null>로 사용
    // null로 하는게 좋음
    const [country, setCountry] = useState<string | null>("");

    // type NameType = "Hangyeol" | "Dora";
    // const nameForType: NameType = 'Hangyeol';

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };

    

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      {/* <input placeholder='wriet down your country...' onChange={(e: React.ChangeEvent<HTMLInputElement)=>setCountry(event)}/> */}
      <input placeholder='wriet down your country...' onChange={handleChange}/>

      {country}
      {hairColor}
    </div>
  );
}
