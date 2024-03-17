'use client'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'


export default function WhatsApp() {
    return (
        <FloatingWhatsApp 
                phoneNumber="+212661807470"
                accountName="Setly Luxury Cars" 
                avatar='/LOGO.png' // Convert the logo variable to a string
            />
    )
}
