import React, {FC, createContext} from 'react';
import './App.css';
import { Person, HairColor } from './components/Person';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

// union 후, null 없으면 에러
// 에러를 잘 읽어서 해결하기
// any로 하면 에러가 안 나지만 안 쓰는 것이 좋음
const AppContetxt = createContext<AppContextInterface | null>(null);


// 함수형 컴포넌트 FC
const App: FC = () => {

  const name: string = "hangyeol";
  const age: number = 19;
  const isOk: boolean = false;

  // 인자, return 값
  // return 없으면 void
  const getName = (name: string): number => {
    if(name==='hangyeol'){
      return 20;
    } else {
      return 0;
    };
  };

  const contextValue: AppContextInterface = {
    name: 'hangyeol',
    age: 27,
    country: 'busan'
  }

  return (
    <AppContetxt.Provider value={contextValue}>
      <div className="App">
        <Person name="hangyeol" age={27} email="hgyeol.0107@gmail.com" hairColor={HairColor.Blonde} />
      </div>
    </AppContetxt.Provider>
  );
}

export default App;
