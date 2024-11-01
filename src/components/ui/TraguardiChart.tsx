'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react'

const trafficData = [
  { month: 'Gen', prima: 1000, dopo: 1200 },
  { month: 'Feb', prima: 1100, dopo: 1400 },
  { month: 'Mar', prima: 1200, dopo: 1800 },
  { month: 'Apr', prima: 1300, dopo: 2300 },
  { month: 'Mag', prima: 1400, dopo: 2900 },
  { month: 'Giu', prima: 1500, dopo: 3600 },
  { month: 'Lug', prima: 1600, dopo: 4400 },
  { month: 'Ago', prima: 1700, dopo: 5300 },
  { month: 'Set', prima: 1800, dopo: 6300 },
  { month: 'Ott', prima: 1900, dopo: 7400 },
  { month: 'Nov', prima: 2000, dopo: 8600 },
  { month: 'Dic', prima: 2100, dopo: 10000 },
]

const conversionData = [
  { campagna: 'SEO', prima: 2, dopo: 5 },
  { campagna: 'PPC', prima: 3, dopo: 7 },
  { campagna: 'Social Media', prima: 1.5, dopo: 4 },
  { campagna: 'Email Marketing', prima: 2.5, dopo: 6 },
]

const roiData = [
  { servizio: 'SEO', roi: 250 },
  { servizio: 'PPC', roi: 180 },
  { servizio: 'Social Media', roi: 150 },
  { servizio: 'Email Marketing', roi: 200 },
]

const clientiData = [
  { settore: 'Meccanica', valore: 35 },
  { settore: 'Plastica', valore: 25 },
  { settore: 'Tecnologia', valore: 20 },
  { settore: 'Logistica', valore: 15 },
  { settore: 'Altri', valore: 5 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

export function TraguardiChart() {
  const [isMounted, setIsMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 500, height: 250 })

  useEffect(() => {
    setIsMounted(true)
    
    const updateDimensions = () => {
      const width = window.innerWidth
      if (width < 768) { // mobile
        setDimensions({ width: width - 40, height: 300 })
      } else { // desktop
        const calculatedWidth = Math.min(500, (width / 2) - 100)
        const calculatedHeight = Math.min(250, window.innerHeight / 3)
        setDimensions({ width: calculatedWidth, height: calculatedHeight })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="bg-gray-800 border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">Traffico sito web dei clienti</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          {isMounted && (
            <LineChart
              width={dimensions.width}
              height={dimensions.height}
              data={trafficData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '4px' }} />
              <Legend />
              <Line type="monotone" dataKey="prima" stroke="#FF8042" strokeWidth={2} dot={{ fill: '#FF8042', strokeWidth: 2 }} activeDot={{ r: 8 }} name="Prima" />
              <Line type="monotone" dataKey="dopo" stroke="#0088FE" strokeWidth={2} dot={{ fill: '#0088FE', strokeWidth: 2 }} activeDot={{ r: 8 }} name="Dopo" />
            </LineChart>
          )}
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">Tasso di conversione per campagna</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          {isMounted && (
            <BarChart
              width={dimensions.width}
              height={dimensions.height}
              data={conversionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="campagna" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '4px' }} />
              <Legend />
              <Bar dataKey="prima" fill="#FF8042" name="Prima" />
              <Bar dataKey="dopo" fill="#00C49F" name="Dopo" />
            </BarChart>
          )}
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">ROI sui servizi di marketing</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          {isMounted && (
            <BarChart
              width={dimensions.width}
              height={dimensions.height}
              data={roiData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="servizio" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '4px' }} />
              <Legend />
              <Bar dataKey="roi" fill="#FFBB28" name="ROI %" />
            </BarChart>
          )}
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">Distribuzione dei clienti per settore</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          {isMounted && (
            <PieChart
              width={dimensions.width}
              height={dimensions.height}
              margin={{ top: 0, right: 30, left: 20, bottom: 40 }}
            >
              <Pie
                data={clientiData}
                cx={dimensions.width / 2}
                cy={(dimensions.height - 60) / 2}
                labelLine={false}
                outerRadius={Math.min(dimensions.width, dimensions.height - 80) / 4}
                fill="#8884d8"
                dataKey="valore"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {clientiData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '4px' }} />
              <Legend 
                verticalAlign="bottom" 
                height={50}
                wrapperStyle={{ bottom: 0 }}
              />
            </PieChart>
          )}
        </CardContent>
      </Card>
    </div>
  )
}