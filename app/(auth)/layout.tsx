import React from"react";
import{Analytics}from'@vercel/analytics/react';
import{SpeedInsights}from"@vercel/speed-insights/next"
import type{Metadata}from"next";
import{Inter}from"next/font/google";
import{ClerkProvider}from"@clerk/nextjs";
import{dark}from"@clerk/themes";
import"../globals.css";
const inter = Inter({subsets:["latin"]});
export const metadata: Metadata={
title:"Авторизация ЭкоЭл Journal",
description:"Создайте ваш аккаунт для общения ✨",};
export default function RootLayout({children,
}:{children:React.ReactNode;}){
return (<ClerkProvider appearance={{baseTheme: dark,}}><Analytics/>
<html lang='en'>
<body className={`${inter.className} bg-dark-1`}>{children}</body></html>
</ClerkProvider>);}