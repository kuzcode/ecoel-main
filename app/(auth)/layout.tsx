import React from"react"
import type{Metadata}from"next"
import{Inter}from"next/font/google"
import{ClerkProvider}from"@clerk/nextjs"
import{dark}from"@clerk/themes"
import"../globals.css"
const inter = Inter({subsets:["latin"]})
export const metadata: Metadata={
title:"ЭкоЭл Journal",
description:"ЭкоЭл Journal — укромный интернет-уголок учеников школы г.Минска :)"}
export default function RootLayout({children,
}:{children:React.ReactNode;}){
return (<><head><meta name="keywords" content="ЭкоЭл Journal, эко эл, eco el"/></head><ClerkProvider appearance={{ baseTheme: dark }}><html lang='ru'>
    <body className={`${inter.className} bg-dark-1`}>{children}</body></html>
</ClerkProvider></>);}