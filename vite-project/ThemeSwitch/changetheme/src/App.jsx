import React, { useEffect, useState } from 'react';

import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import './App.css';
import { Themeprovider } from './contex/theme';
function App() {
  const [thememode, seTememode] = useState("light");

  const darktheme = () => seTememode("dark");
  const lighttheme = () => seTememode("light");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
document.querySelector("html").classList.add(thememode);

    document.querySelector("html").classList.add(thememode);
  }, [thememode]);

  return (
    <Themeprovider value={{ thememode, darktheme, lighttheme }}> 
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </Themeprovider>
  );
}

export default App;
