import React, { HtmlHTMLAttributes, InputHTMLAttributes } from 'react'

type TextSize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl' | 'text-7xl' | 'text-8xl' | 'text-9xl';

type InputProps = {
    labelText?: string;
    textSize?: TextSize;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ textSize = 'text-sm', labelText = 'labelText', ...rest }: InputProps) => {
    return (
        <div className='flex flex-col'>
            <label htmlFor="first_name" className={`block mb-2 font-medium text-gray-900 dark:text-gray-300 ${textSize}`}>{labelText}</label>
            <input {...rest} type="text" id="first_name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
    )
}
