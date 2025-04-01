import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface DarkModeSwitchProps {
    isDark: boolean;
    toggleDark: () => void;
}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ isDark, toggleDark }) => {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                toggleDark();
            }}
            className="cursor-pointer flex items-center justify-center"
        >
            {isDark ? (
                <FaMoon className="text-xl text-gray-300" />
            ) : (
                <FaSun className="text-xl text-yellow-500" />
            )}
        </div>
    );
};

export default DarkModeSwitch;