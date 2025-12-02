// import { createContext, useEffect, useState, useContext } from "react";

// const DarkModeContext = createContext();

// export function DarkModeProvider({ children }) {
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     updateDarkMode(!darkMode);
//   };
//   // 컴포넌트가 처음 렌더링 될 때 한 번 실행됨
//   // 로컬스토리지에 theme=dark가 저장되어 있으면 다크모드로 설정
//   // 만약 localStorage 설정이 없고, 운영체제 또는 브라우저가 다크 모드라면 자동 다크모드 적용
//   useEffect(() => {
//     const isDark =
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("prefers=color-scheme: dark").matches);
//     setDarkMode(isDark);
//     updateDarkMode(isDark);
//   }, []);
//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// }

// function updateDarkMode(darkMode) {
//   if (darkMode) {
//     document.documentElement.classList.add("dark");
//     localStorage.theme = "dark";
//   } else {
//     document.documentElement.classList.remove("dark");
//     localStorage.theme = "light";
//   }
// }

// export const useDarkMode = () => useContext(DarkModeContext);
