import { useEffect, useState } from "react"
import { Moon, Sun, System } from "../atom/Icon"

const ThemeSwitch = () => {
    const [activeTheme, setActiveTheme] = useState(localStorage.theme ?? 'system')
    const setTheme = () => {
        const x = activeTheme === 'dark' || activeTheme === 'system' ? 'light' : 'dark'
        setActiveTheme(x)
        localStorage.theme = x
    }
useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
if ( activeTheme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
}, [activeTheme])
  return (
    <>
    <div onClick={() => setTheme()} className="mr-4 px-2 border-x-2 border-gray-200 cursor-pointer">
                <span className="py-0.5 px-4 text-gray-800 dark:text-white font-semibold flex items-center">
                    <span className="">
                        {activeTheme === 'dark' ? <Sun className={`w-6 h-6`} /> : activeTheme === 'light' ?  <Moon className={`w-5 h-5`} /> : <System className={`w-5 h-5`} />}
                    </span>
                </span>
            </div></>
  )
}

export default ThemeSwitch