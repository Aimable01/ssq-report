# SSQ Report Generator

A modern, beautiful attendance report generator for Sabbath School Quarterly built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern UI**: Clean, responsive design with shadcn/ui components
- **Single-Step Form**: Fill attendance data for all families in one streamlined form
- **Dynamic Date Selection**: Choose any report date via date picker
- **Beautiful PDF Reports**: Generate professional PDF reports with elegant styling
- **State Management**: Powered by Zustand for efficient state management
- **Real-time Calculations**: Automatic percentage calculations and family rankings

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## How to Use

1. **Select Report Date**: Choose the date for your attendance report
2. **Fill Attendance Data**: Enter attendance numbers for all three families (Ebenezer, Salvation Siblings, Jehovah-Nissi)
3. **Generate Report**: Click "Generate Report" to view the formatted report
4. **Download PDF**: Click "Download PDF Report" to save the report as a PDF file

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **PDF Generation**: Puppeteer
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions
├── store/              # Zustand store
└── util/               # Helper functions
```

## Families Tracked

- **Ebenezer**
- **Salvation Siblings**
- **Jehovah-Nissi**

## Attendance Metrics

- Abanditswe (Total Members)
- Abaje (Present)
- Abize Karindwi (Bible Study)
- Abatangiye Isabato (Sabbath School)
- Abasuye (Visitors)
- Abafashije (Helped)
- Abasuwe (Baptized)
- Abafashijwe (Received Help)
- Abarwayi (Sick)
- Abasibye (Absent)
- Abafite Impamvu (With Excuse)
- Abashyitsi (Guests)
